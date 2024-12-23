import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request) {
  try {
    const data = await request.json()
    
    const { error } = await supabase
      .from('clients')
      .insert([{
        name: data.name,
        email: data.email,
        project_details: data.projectDetails,
        budget: data.budget,
        deadline: data.deadline
      }])

    if (error) throw error

    return NextResponse.json({ message: 'Client created successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to create client' }, 
      { status: 500 }
    )
  }
}