'use client'

import { useForm } from 'react-hook-form'

export default function FreelancerForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/freelancers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) throw new Error('Failed to submit')
      
      reset()
      alert('Form submitted successfully!')
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to submit form. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-2">Full Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-2">Skills</label>
        <input
          {...register('skills', { required: 'Skills are required' })}
          placeholder="e.g., JavaScript, React, Node.js"
          className="w-full p-2 border rounded"
        />
        {errors.skills && (
          <span className="text-red-500">{errors.skills.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-2">Experience (years)</label>
        <input
          type="number"
          {...register('experience', { 
            required: 'Experience is required',
            min: { value: 0, message: 'Experience cannot be negative' }
          })}
          className="w-full p-2 border rounded"
        />
        {errors.experience && (
          <span className="text-red-500">{errors.experience.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-2">Hourly Rate ($)</label>
        <input
          type="number"
          {...register('hourlyRate', { 
            required: 'Hourly rate is required',
            min: { value: 0, message: 'Rate cannot be negative' }
          })}
          className="w-full p-2 border rounded"
        />
        {errors.hourlyRate && (
          <span className="text-red-500">{errors.hourlyRate.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  )
}