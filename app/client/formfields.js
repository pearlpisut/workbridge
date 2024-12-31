const PROJECT_TYPES = [
    'Web Development',
    'Mobile Development',
    'Graphic Design',
    'UI/UX Design',
    'Video Editing',
    'Social Media Content Creation',
    'Copy Writing',
    'SEO',
    'Bookkeeping',
    'Data Entry & Cleaning',
    'Data Annotation',
    'Translation',
    'Voice Over',
]

export const formFields = [
    {name: 'name', label: 'Name', type: 'text', required: true },
    { 
        name: 'whatsapp', 
        label: 'WhatsApp Number', 
        type: 'text', 
        required: true,
      },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'project_type', 
      label: 'Project Type(s)', 
      type: 'multiselect', 
      required: true,
      options: PROJECT_TYPES,
      placeholder: 'Select your project type(s)'
    },
      { 
        name: 'projectDetails', 
        label: 'Project Details', 
        type: 'textarea', 
        required: true,
        placeholder: 'Describe briefly your project requirements...',
        rows: 4
      },
      { 
        name: 'dutiesForHelper', 
        label: 'Duties for the Helper', 
        type: 'textarea', 
        required: true,
        placeholder: 'Describe briefly what helpers will do...',
        rows: 4
      },
      { 
        name: 'budget', 
        label: 'Budget (HKD)', 
        type: 'text', 
        required: true,
        placeholder: 'A rough estimation for our reference.'
      },
      { 
        name: 'deadline', 
        label: 'Estimated Deadline', 
        type: 'text', 
        required: true,
        placeholder: "Input 'flexible' if no time pressure."
      },
      { 
        name: 'additionalProjectDetails', 
        label: 'Anything else you want to share', 
        type: 'textarea', 
        required: false,
        placeholder: 'Additional preferences or requirements, etc.',
        rows: 4
      }
]
