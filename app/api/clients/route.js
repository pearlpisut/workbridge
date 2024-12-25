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
        duties_for_helper: data.dutiesForHelper,
        budget: data.budget,
        deadline: data.deadline,
        additional_details: data.additionalProjectDetails || null,
        status: 'new'
      }])

    if (error) throw error

    return NextResponse.json({ message: 'Client application submitted successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to submit client application' }, 
      { status: 500 }
    )
  }
}