import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'

const url = import.meta.env.VITE_SUPABASE_PROJECT_URL || ''
const anonKey = import.meta.env.VITE_SUPABASE_ANON_PUBLIC_KEY || ''

const supabase = createClient<Database>(
    url,
    anonKey
)

export default function SupabasePage() {
    const [countries, setCountries] = useState<Database['public']['Tables']['countries']['Row'][]>([])

    useEffect(() => {
        const fetchCountries = async () => {
            const { data } = await supabase.from('countries').select('*')
            setCountries(data || []) // Provide a default value of an empty array if data is null
        }

        fetchCountries()
    }, [])

    return (
        <>
            <h1>Supabase page</h1>
            This is a public page with country data from Supabase.

            <div>
                {countries.map(country => (
                    <p key={country.id}>{country.name}</p>
                ))}
            </div>
        </>
    );
}