import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request) {
  try {
    const data = await request.json()
    
    const { error } = await supabase
      .from('freelancers')
      .insert([{
        name: data.name,
        email: data.email,
        skills: data.skills,
        experience: data.experience,
        hourly_rate: data.hourlyRate
      }])

    if (error) throw error

    return NextResponse.json({ message: 'Freelancer created successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to create freelancer' }, 
      { status: 500 }
    )
  }
}
