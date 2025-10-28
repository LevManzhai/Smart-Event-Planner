'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

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

export default function ViewEventPage() {
  const searchParams = useSearchParams()
  const inviteCode = searchParams.get('id')
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    attending: true,
    message: ''
  })

  useEffect(() => {
    if (inviteCode) {
      fetchEvent()
    } else {
      setLoading(false)
    }
  }, [inviteCode])

  const fetchEvent = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('invite_code', inviteCode)
        .single()

      if (error) throw error
      setEvent(data)
    } catch (error: any) {
      toast.error('Event not found')
      console.error('Error fetching event:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRsvp = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!rsvpData.name || !rsvpData.email) {
      toast.error('Please fill in your name and email')
      return
    }

    try {
      const { error } = await supabase
        .from('rsvps')
        .insert({
          event_id: event?.id,
          name: rsvpData.name,
          email: rsvpData.email,
          attending: rsvpData.attending,
          message: rsvpData.message || null
        })

      if (error) throw error
      
      toast.success(rsvpData.attending ? 'RSVP confirmed!' : 'RSVP declined')
      setRsvpData({ name: '', email: '', attending: true, message: '' })
    } catch (error: any) {
      toast.error('Error submitting RSVP')
      console.error('Error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event...</p>
        </div>
      </div>
    )
  }

  if (!inviteCode || !event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h1>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist.</p>
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Calendar className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Event Planner</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Details */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              {event.image_url && (
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
              )}
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
              
              {event.description && (
                <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
              )}

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-primary-600" />
                  <span className="font-medium">
                    {new Date(event.event_date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-primary-600" />
                  <span className="font-medium">{event.event_time}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RSVP Form */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">RSVP</h2>
              
              <form onSubmit={handleRsvp} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your name"
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                    value={rsvpData.email}
                    onChange={(e) => setRsvpData({ ...rsvpData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Will you attend?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        checked={rsvpData.attending}
                        onChange={() => setRsvpData({ ...rsvpData, attending: true })}
                        className="mr-2"
                      />
                      <span className="text-green-600 font-medium">Yes, I'll be there!</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        checked={!rsvpData.attending}
                        onChange={() => setRsvpData({ ...rsvpData, attending: false })}
                        className="mr-2"
                      />
                      <span className="text-red-600 font-medium">Sorry, can't make it</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any additional message..."
                    value={rsvpData.message}
                    onChange={(e) => setRsvpData({ ...rsvpData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Submit RSVP
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
