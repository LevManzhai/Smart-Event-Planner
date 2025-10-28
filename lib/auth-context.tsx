'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './supabase'

interface AuthContextType {
  user: any
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check localStorage first
        const savedUser = localStorage.getItem('supabase_user')
        if (savedUser) {
          try {
            const userData = JSON.parse(savedUser)
            setUser(userData)
          } catch (error) {
            localStorage.removeItem('supabase_user')
          }
        }

        // Then check Supabase session
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session?.user) {
          setUser(session.user)
          localStorage.setItem('supabase_user', JSON.stringify(session.user))
        } else if (!savedUser) {
          setUser(null)
          localStorage.removeItem('supabase_user')
        }
      } catch (error) {
        setUser(null)
        localStorage.removeItem('supabase_user')
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user)
        localStorage.setItem('supabase_user', JSON.stringify(session.user))
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
        localStorage.removeItem('supabase_user')
      } else if (event === 'TOKEN_REFRESHED' && session?.user) {
        setUser(session.user)
        localStorage.setItem('supabase_user', JSON.stringify(session.user))
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    localStorage.removeItem('supabase_user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
