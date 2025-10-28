import Link from 'next/link'
import { Calendar, Users, Mail, Clock, ArrowRight, Sparkles, User, LogOut } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Calendar className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Event Planner</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/events" className="text-gray-600 hover:text-primary-600 transition-colors">
                My Events
              </Link>
              <Link href="/auth" className="btn-primary">
                Sign In
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="h-0.5 bg-gray-600 w-full"></div>
                <div className="h-0.5 bg-gray-600 w-full"></div>
                <div className="h-0.5 bg-gray-600 w-full"></div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/events" className="text-gray-600 hover:text-primary-600 transition-colors">
                My Events
              </Link>
              <Link href="/auth" className="btn-primary text-center">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 shadow-xl">
                <Sparkles className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Plan Events
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              in 2 Minutes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create <span className="font-semibold text-blue-600">beautiful invitations</span>, 
            manage guest lists and track RSVPs. 
            <br className="hidden md:block" />
            Everything in one place, fast and simple.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth" className="btn-large">
              Start Planning
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            <Link href="/events" className="btn-secondary text-lg px-8 py-3">
              View Examples
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                Create an event in just a few clicks. Simple form with drag-and-drop for photos.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Invitations</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatic link generation and email invitation sending.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guest Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Track who's coming, get notifications about new RSVPs.
              </p>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              How it Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Just three simple steps to the perfect event
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="relative group text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Event</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill out the form with title, date, time and description
              </p>
            </div>

            <div className="relative group text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Link</h3>
              <p className="text-gray-600 leading-relaxed">
                The system automatically creates a unique invitation link
              </p>
            </div>

            <div className="relative group text-center">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send to Guests</h3>
              <p className="text-gray-600 leading-relaxed">
                Share the link or send invitations via email
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Calendar className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">Smart Event Planner</span>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Created with ❤️ for convenient event planning. 
              <br />
              Make every event unforgettable.
            </p>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                &copy; 2024 Smart Event Planner. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
