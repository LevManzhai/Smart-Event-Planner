'use client'

import { useState } from 'react'
import { Mail, Send, X } from 'lucide-react'
import toast from 'react-hot-toast'

interface SendInvitationsProps {
  eventId: string
  eventTitle: string
  inviteCode: string
  onClose: () => void
}

export default function SendInvitations({ eventId, eventTitle, inviteCode, onClose }: SendInvitationsProps) {
  const [emails, setEmails] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const emailList = emails.split(',').map(email => email.trim()).filter(email => email)
      
      if (emailList.length === 0) {
        toast.error('Please enter at least one email address')
        return
      }

      const response = await fetch('/api/send-invitations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: inviteCode, // Используем invite_code вместо eventId
          emails: emailList,
          message: message || `You're invited to "${eventTitle}"!`
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      toast.success('Invitations sent successfully!')
      onClose()
    } catch (error: any) {
      toast.error('Error sending invitations: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://levmanzhai.github.io/Smart-Event-Planner'
    : window.location.origin
  const inviteLink = `${baseUrl}/invite/${inviteCode}`

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Send Invitations</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Addresses *
              </label>
              <textarea
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
                className="input-field resize-none"
                rows={3}
                placeholder="email1@example.com, email2@example.com, email3@example.com"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate email addresses with commas
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input-field resize-none"
                rows={3}
                placeholder={`You're invited to "${eventTitle}"!`}
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-600 mb-2">Event Link:</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inviteLink}
                  readOnly
                  className="flex-1 text-xs bg-white border border-gray-300 rounded px-2 py-1"
                />
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(inviteLink)
                    toast.success('Link copied!')
                  }}
                  className="btn-secondary text-xs px-2 py-1"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 btn-primary disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
