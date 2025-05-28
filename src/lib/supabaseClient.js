import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwtcqkpvctbuuecmiina.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3dGNxa3B2Y3RidXVlY21paW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NTA3NDcsImV4cCI6MjA2MTEyNjc0N30.QIq-1n2lFaptCHTFZ7XRRvA5Bnc5jOvMk0qUc6vWKlo'

export const supabase = createClient(supabaseUrl, supabaseKey)
