import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Transform data to match schema
    const freelancerData = {
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      location: data.location,
      skills: Array.isArray(data.skills) ? data.skills : data.skills.split(',').map(s => s.trim()),
      portfolio_links: Array.isArray(data.portfolio_links) ? data.portfolio_links : data.portfolio_links.split(',').map(l => l.trim()),
      preferred_gig_type: Array.isArray(data.preferred_gig_type) ? data.preferred_gig_type : data.preferred_gig_type.split(',').map(t => t.trim()),
      project_size: Array.isArray(data.project_size) ? data.project_size : data.project_size.split(',').map(s => s.trim()),
      bio: data.bio,
      tags: Array.isArray(data.tags) ? data.tags : data.tags?.split(',').map(t => t.trim()) || []
    }

    // Insert into Supabase
    const { data: freelancer, error } = await supabase
      .from('freelancers')
      .insert([freelancerData])
      .select()

    if (error) throw error

    return NextResponse.json({ 
      message: 'Freelancer registered successfully',
      data: freelancer[0]
    }, { status: 201 })

  } catch (error) {
    console.error('Error registering freelancer:', error)
    return NextResponse.json({ 
      error: 'Failed to register freelancer',
      details: error.message 
    }, { status: 500 })
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const skill = searchParams.get('skill')
    const gigType = searchParams.get('gigType')
    
    let query = supabase.from('freelancers').select('*')

    if (skill) {
      query = query.contains('skills', [skill])
    }
    
    if (gigType) {
      query = query.contains('preferred_gig_type', [gigType])
    }

    const { data: freelancers, error } = await query

    if (error) throw error

    return NextResponse.json({ data: freelancers })

  } catch (error) {
    console.error('Error fetching freelancers:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch freelancers',
      details: error.message 
    }, { status: 500 })
  }
}
