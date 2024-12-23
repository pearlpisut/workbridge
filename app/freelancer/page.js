'use client'

import { useForm } from 'react-hook-form'
import { formFields} from './formfields.js'

export default function Freelancer() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/freelancers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) throw new Error('Failed to submit')
      
      reset()
      alert('Registration successful!')
    } catch (error) {
      console.error('Error:', error)
      alert('Registration failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Join as a Freelancer
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Start your freelancing journey today
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {formFields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    {...register(field.name, { required: `${field.label} is required` })}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                ) : field.type === 'select' ? (
                  <select
                    {...register(field.name, { required: `${field.label} is required` })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select a district</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) :(
                  <input
                    type={field.type}
                    {...register(field.name, { required: `${field.label} is required` })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                )}
                {errors[field.name] && (
                  <span className="text-sm text-red-500 mt-1">
                    {errors[field.name].message}
                  </span>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}