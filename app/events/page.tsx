'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Calendar, Plus, Filter, Clock, Users, Mail, LogOut } from 'lucide-react'
import { format, isToday, isThisWeek, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'
import toast from 'react-hot-toast'
import SendInvitations from '@/components/SendInvitations'

interface Event {
  id: string
  title: string
  description: string | null
  event_date: string
  event_time: string
  image_url: string | null
  invite_code: string
  created_at: string
}

type FilterType = 'all' | 'today' | 'thisWeek'

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [showSendInvitations, setShowSendInvitations] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkUser()
    fetchEvents()
  }, [])

  useEffect(() => {
    filterEvents()
  }, [events, filter])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth')
      return
    }
    setUser(user)
  }

  const fetchEvents = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('created_by', user.id)
        .order('event_date', { ascending: true })

      if (error) throw error
      setEvents(data || [])
    } catch (error: any) {
      toast.error('Error loading events')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const filterEvents = () => {
    let filtered = [...events]

    switch (filter) {
      case 'today':
        filtered = events.filter(event => isToday(parseISO(event.event_date)))
        break
      case 'thisWeek':
        filtered = events.filter(event => isThisWeek(parseISO(event.event_date)))
        break
      default:
        filtered = events
    }

    setFilteredEvents(filtered)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const copyInviteLink = (inviteCode: string) => {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://levmanzhai.github.io/Smart-Event-Planner'
      : window.location.origin
    const link = `${baseUrl}/invite/${inviteCode}`
    navigator.clipboard.writeText(link)
    toast.success('Link copied to clipboard!')
  }

  const openSendInvitations = (event: Event) => {
    setSelectedEvent(event)
    setShowSendInvitations(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
              <span className="text-lg sm:text-2xl font-bold text-gray-900">Smart Event Planner</span>
            </Link>
            
                        <div className="hidden md:flex items-center space-x-4">
                          <span className="text-gray-600">Hello, {user?.email}</span>
                          <button
                            onClick={handleSignOut}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                          >
                            <LogOut className="h-5 w-5" />
                            <span>Sign Out</span>
                          </button>
                        </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="h-0.5 bg-gray-600 w-full"></div>
                <div className="h-0.5 bg-gray-600 w-full"></div>
                <div className="h-0.5 bg-gray-600 w-full"></div>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="text-sm">{user?.email}</span>
                </div>
                            <button
                              onClick={handleSignOut}
                              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 w-full text-left"
                            >
                              <LogOut className="h-5 w-5" />
                              <span>Sign Out</span>
                            </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 text-center sm:text-left">
                      <div className="mb-4 sm:mb-0">
                        <h1 className="text-3xl font-bold text-gray-900">My Events</h1>
                        <p className="text-gray-600 mt-2">Manage your events and invitations</p>
                      </div>
                      <Link href="/events/create" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center transform hover:scale-105">
                        <Plus className="h-5 w-5 mr-2" />
                        Create Event
                      </Link>
                    </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2">
                <Filter className="h-5 w-5 text-white" />
              </div>
                          <span className="text-sm font-medium text-gray-700">Filters</span>
            </div>
            <div className="grid grid-cols-1 sm:flex sm:space-x-3 gap-3">
              {[
                { key: 'all', label: 'All Events' },
                { key: 'today', label: 'Today' },
                { key: 'thisWeek', label: 'This Week' }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key as FilterType)}
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    filter === key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {filter === 'all' ? 'You have no events yet' : 'No events for the selected filter'}
            </h3>
            <p className="text-gray-600 mb-6">
              {filter === 'all' 
                ? 'Create your first event to start planning'
                : 'Try selecting a different filter or create a new event'
              }
            </p>
            <Link href="/events/create" className="btn-primary">
              Create Event
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20 overflow-hidden ${event.image_url ? '' : 'h-fit'}`}>
                {event.image_url ? (
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ) : (
                  <div className="h-4"></div>
                )}
                
                <div className={`${event.image_url ? 'p-6 space-y-4' : 'p-4 space-y-3'}`}>
                  <div>
                    <h3 className={`${event.image_url ? 'text-xl' : 'text-lg'} font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors`}>
                      {event.title}
                    </h3>
                    
                    {event.description && (
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm bg-gray-50 rounded-lg px-3 py-2">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="font-medium">
                      {format(parseISO(event.event_date), 'dd MMMM yyyy', { locale: ru })}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="font-medium">{event.event_time}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    <button
                      onClick={() => copyInviteLink(event.invite_code)}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs py-2.5 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      <span className="truncate">Copy</span>
                    </button>
                    <button
                      onClick={() => openSendInvitations(event)}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium text-xs py-2.5 px-2 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      <span className="truncate">Send</span>
                    </button>
                    <Link
                      href={`/invite/${event.invite_code}`}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs py-2.5 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Users className="h-3 w-3 mr-1" />
                      <span className="truncate">View</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Send Invitations Modal */}
      {showSendInvitations && selectedEvent && (
        <SendInvitations
          eventId={selectedEvent.id}
          eventTitle={selectedEvent.title}
          inviteCode={selectedEvent.invite_code}
          onClose={() => {
            setShowSendInvitations(false)
            setSelectedEvent(null)
          }}
        />
      )}
    </div>
  )
}
