'use client'

import { useForm } from 'react-hook-form'

export default function Client() {
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
      
      reset()
      alert('Form submitted successfully!')
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to submit form. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Join as a Client
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Find the perfect freelancer for your projects
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">{errors.name.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.email && (
                <span className="text-sm text-red-500 mt-1">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Project Details</label>
              <textarea
                {...register('projectDetails', { required: 'Project details are required' })}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Describe your project requirements..."
              />
              {errors.projectDetails && (
                <span className="text-sm text-red-500 mt-1">{errors.projectDetails.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Budget</label>
              <input
                {...register('budget', { required: 'Budget is required' })}
                placeholder="e.g., $1000"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.budget && (
                <span className="text-sm text-red-500 mt-1">{errors.budget.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Deadline</label>
              <input
                type="date"
                {...register('deadline', { required: 'Deadline is required' })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.deadline && (
                <span className="text-sm text-red-500 mt-1">{errors.deadline.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}