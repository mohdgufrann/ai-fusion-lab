import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iagsyfmqxoobtiympgtd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhZ3N5Zm1xeG9vYnRpeW1wZ3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NDUzOTAsImV4cCI6MjA3NjUyMTM5MH0.ESbkVAY6CdPCJAjUmIL6q-b354mKtslGPIVrT6OBI18'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)