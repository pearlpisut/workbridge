import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request) {
  try {
    const data = await request.json()
     // Basic validation
    const requiredFields = ['name', 'email', 'whatsapp', 'location', 'skills', 'preferred_project_type', 'portfolio_links', 'bio']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }
     // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
     // WhatsApp number validation (basic)
    const whatsappRegex = /^\+?[0-9]{8,}$/
    if (!whatsappRegex.test(data.whatsapp.replace(/\s+/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid WhatsApp number' },
        { status: 400 }
      )
    }
     // Convert skills string to array
    const skills = data.skills
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0)
     // Validate location is in allowed districts
    if (!HONG_KONG_DISTRICTS.includes(data.location)) {
      return NextResponse.json(
        { error: 'Invalid location selected' },
        { status: 400 }
      )
    }
     // Validate project types
    const invalidProjectTypes = data.preferred_project_type
      .filter(type => !PROJECT_TYPES.includes(type))
    
    if (invalidProjectTypes.length > 0) {
      return NextResponse.json(
        { error: 'Invalid project type(s) selected' },
        { status: 400 }
      )
    }
     // Insert into database
    const { error } = await supabase
      .from('helpers')
      .insert([{
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        location: data.location,
        skills: skills,
        preferred_project_types: data.preferred_project_type,
        portfolio_links: data.portfolio_links,
        bio: data.bio,
        status: 'new'
      }])
     if (error) throw error
     // Optional: Send welcome email to helper
    // Add email sending logic here if needed
     return NextResponse.json(
      { message: 'Helper registration successful' },
      { status: 201 }
    )
   } catch (error) {
    console.error('Error processing helper registration:', error)
    return NextResponse.json(
      { error: 'Failed to register helper' },
      { status: 500 }
    )
  }
} 