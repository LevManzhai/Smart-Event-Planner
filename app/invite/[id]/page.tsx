'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Calendar, Clock, MapPin, Users, CheckCircle, XCircle, Mail, ArrowLeft } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'
import toast from 'react-hot-toast'

interface Event {
  id: string
  title: string
  description: string | null
  event_date: string
  event_time: string
  image_url: string | null
  invite_code: string
}

interface RSVP {
  id: string
  email: string
  name: string
  attending: boolean
  created_at: string
}

export default function InvitePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [event, setEvent] = useState<Event | null>(null)
  const [rsvps, setRsvps] = useState<RSVP[]>([])
  const [loading, setLoading] = useState(true)
  const [rsvpLoading, setRsvpLoading] = useState(false)
  const [rsvpsLoading, setRsvpsLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [attending, setAttending] = useState(true)

  useEffect(() => {
    fetchEvent()
  }, [params.id])

  const fetchEvent = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('invite_code', params.id)
        .single()

      if (error) throw error
      setEvent(data)
    } catch (error: any) {
      toast.error('Event not found')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const fetchRSVPs = async () => {
    if (!event?.id) return
    
    setRsvpsLoading(true)
    try {
      const { data, error } = await supabase
        .from('rsvp')
        .select('*')
        .eq('event_id', event.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setRsvps(data || [])
    } catch (error: any) {
      console.error('Error fetching RSVPs:', error)
    } finally {
      setRsvpsLoading(false)
    }
  }

  useEffect(() => {
    if (event) {
      fetchRSVPs()
    }
  }, [event])

  const handleRSVP = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!event) return

    setRsvpLoading(true)
    try {
      const { error } = await supabase
        .from('rsvp')
        .insert({
          event_id: event.id,
          email,
          name,
          attending,
        })

      if (error) throw error

      toast.success(attending ? 'Great! We look forward to seeing you!' : 'Understood, thanks for your response!')
      
      // Reset form
      setName('')
      setEmail('')
      setAttending(true)
      
      // Refresh RSVPs
      fetchRSVPs()
    } catch (error: any) {
      toast.error('Error sending response')
      console.error(error)
    } finally {
      setRsvpLoading(false)
    }
  }

  const copyInviteLink = () => {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://levmanzhai.github.io/Smart-Event-Planner'
      : window.location.origin
    const link = `${baseUrl}/invite/${params.id}`
    navigator.clipboard.writeText(link)
    toast.success('Link copied!')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
          </div>
          
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading event...</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
          </div>
          
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
            <p className="text-gray-600">The link might be incorrect or the event was deleted.</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  const attendingCount = rsvps.filter(rsvp => rsvp.attending).length
  const notAttendingCount = rsvps.filter(rsvp => !rsvp.attending).length

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Назад</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Event Image */}
          {event.image_url && (
            <div className="h-64 md:h-80">
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Event Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {event.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  {format(parseISO(event.event_date), 'dd MMMM yyyy', { locale: ru })}
                  <span className="mx-2">•</span>
                  <Clock className="h-5 w-5 mr-2" />
                  {event.event_time}
                </div>
                
                <button
                  onClick={copyInviteLink}
                  className="btn-secondary text-sm inline-flex items-center"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>
            </div>

            {/* Event Description */}
            {event.description && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">About the Event</h2>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* RSVP Form */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Response</h2>
                <form onSubmit={handleRSVP} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="input-field"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="input-field"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Will you attend the event?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="attending"
                          checked={attending}
                          onChange={() => setAttending(true)}
                          className="mr-3 text-primary-600"
                        />
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">Yes, I'll attend!</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="attending"
                          checked={!attending}
                          onChange={() => setAttending(false)}
                          className="mr-3 text-primary-600"
                        />
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        <span className="text-gray-700">Sorry, can't make it</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={rsvpLoading}
                    className="w-full btn-primary disabled:opacity-50"
                  >
                    {rsvpLoading ? 'Sending...' : 'Send Response'}
                  </button>
                </form>
              </div>

              {/* RSVP Stats */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Who's Coming</h2>
                
                {rsvpsLoading ? (
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400 mr-2"></div>
                          <span className="font-medium text-gray-600">Loading...</span>
                        </div>
                        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400 mr-2"></div>
                          <span className="font-medium text-gray-600">Loading...</span>
                        </div>
                        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="font-medium text-green-800">Attending</span>
                        </div>
                        <span className="text-2xl font-bold text-green-600">{attendingCount}</span>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                          <span className="font-medium text-red-800">Not Attending</span>
                        </div>
                        <span className="text-2xl font-bold text-red-600">{notAttendingCount}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* RSVP List */}
                {rsvpsLoading ? (
                  <div className="mt-6">
                    <h3 className="font-medium text-gray-900 mb-3">Recent Responses</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg animate-pulse">
                          <div className="flex items-center">
                            <div className="h-4 w-4 bg-gray-300 rounded mr-2"></div>
                            <div className="h-4 w-24 bg-gray-300 rounded"></div>
                          </div>
                          <div className="h-3 w-12 bg-gray-300 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : rsvps.length > 0 ? (
                  <div className="mt-6">
                    <h3 className="font-medium text-gray-900 mb-3">Recent Responses</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {rsvps.slice(0, 10).map((rsvp) => (
                        <div key={rsvp.id} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            {rsvp.attending ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500 mr-2" />
                            )}
                            <span className="text-sm font-medium text-gray-900">{rsvp.name}</span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {format(parseISO(rsvp.created_at), 'dd.MM HH:mm')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
