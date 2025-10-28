import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, CheckCircle, XCircle, Mail, ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  return []
}

export default function InvitePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors mb-8">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Invitation
          </h1>
          <p className="text-xl text-gray-600">
            You've been invited to an event!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-lg">
              <Calendar className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Event Details
            </h2>
            
            <p className="text-gray-600 mb-8">
              This is a static invitation page. For full functionality, please visit the main application.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span>Event Date: TBD</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>Event Time: TBD</span>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                RSVP Information
              </h3>
              <p className="text-blue-700">
                To RSVP to this event, please visit the main application and use the invitation code: <strong>{params.id}</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth" className="btn-primary">
                Sign In to RSVP
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}