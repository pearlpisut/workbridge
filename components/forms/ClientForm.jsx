'use client'

import { useForm } from 'react-hook-form'

export default function ClientForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) throw new Error('Failed to submit')
      
      // Handle success
      reset() // Reset form
      alert('Form submitted successfully!')
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to submit form. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-2">Name</label>
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
        <label className="block mb-2">Project Details</label>
        <textarea
          {...register('projectDetails', { required: 'Project details are required' })}
          className="w-full p-2 border rounded"
          rows={4}
        />
        {errors.projectDetails && (
          <span className="text-red-500">{errors.projectDetails.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-2">Budget</label>
        <input
          {...register('budget', { required: 'Budget is required' })}
          placeholder="e.g., $1000"
          className="w-full p-2 border rounded"
        />
        {errors.budget && (
          <span className="text-red-500">{errors.budget.message}</span>
        )}
      </div>

      <div>
        <label className="block mb-2">Deadline</label>
        <input
          type="date"
          {...register('deadline', { required: 'Deadline is required' })}
          className="w-full p-2 border rounded"
        />
        {errors.deadline && (
          <span className="text-red-500">{errors.deadline.message}</span>
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