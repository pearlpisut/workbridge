'use client'

import { useForm, Controller } from 'react-hook-form'
import dynamic from 'next/dynamic' 
import { formFields} from './formfields.js'

// Dynamically import react-select with ssr disabled
const Select = dynamic(() => import('react-select'), {
  ssr: false  // This prevents server-side rendering
})

export default function Client() {
  const field = formFields[0]
  const { 
    register, 
    control,
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
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Join as a Client
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Find the right helper for your projects - a fellow student, a freelancer, etc. We will
            match you with the most suitable helpers based on your project details and follow up
            with you with emails or a short call.
            <br /><br />
            <span className="underline">Keep your details concise</span> so it's easier for us to process your info.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white py-4 px-6 shadow rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Describe your project requirements..."
              />
              {errors.projectDetails && (
                <span className="text-sm text-red-500 mt-1">{errors.projectDetails.message}</span>
              )}
            </div>

            <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
            <Controller
                    name={field.name}
                    control={control}
                    rules={{ required: field.required && `${field.label} is required` }}
                    render={({ field: { onChange, value, ref } }) => (
                      <Select
                        isMulti
                        options={field.options?.map(opt => ({ value: opt, label: opt }))}
                        onChange={(val) => onChange(val?.map(v => v.value))}
                        value={value?.map(v => ({ value: v, label: v })) || []}
                        placeholder={field.placeholder}
                        className="mt-1 block w-full"
                        classNamePrefix="select"
                        styles={{
                          control: (base) => ({
                            ...base,
                            borderColor: '#D1D5DB',
                            '&:hover': {
                              borderColor: '#10B981'
                            },
                            boxShadow: 'none',
                            '&:focus-within': {
                              borderColor: '#10B981',
                              boxShadow: '0 0 0 1px #10B981'
                            }
                          }),
                          multiValue: (base) => ({
                            ...base,
                            backgroundColor: '#E5E7EB',
                            borderRadius: '0.375rem'
                          }),
                          multiValueLabel: (base) => ({
                            ...base,
                            color: '#374151'
                          }),
                          multiValueRemove: (base) => ({
                            ...base,
                            ':hover': {
                              backgroundColor: '#DC2626',
                              color: 'white'
                            }
                          })
                        }}
                      />
                    )}
                  />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Duties for the Helper</label>
              <textarea
                {...register('dutiesForHelper', { required: 'Duties for the helper are required' })}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Describe the duties you have for the helper..."
              />
              {errors.dutiesForHelper && (
                <span className="text-sm text-red-500 mt-1">{errors.dutiesForHelper.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Budget (HKD)</label>
              <input
                {...register('budget', { required: 'Budget is required' })}
                placeholder="A rough estimation for our reference only."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {errors.budget && (
                <span className="text-sm text-red-500 mt-1">{errors.budget.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Estimated Deadline</label>
              <input
                type="text"
                {...register('deadline', { required: 'Deadline is required' })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Input 'flexible' if no time pressure."
              />
              {errors.deadline && (
                <span className="text-sm text-red-500 mt-1">{errors.deadline.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Anything else you want to share</label>
              <textarea
                {...register('additionalProjectDetails')}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Additional preferences or requirements, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}