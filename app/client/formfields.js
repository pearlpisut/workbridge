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
    { name: 'project_type', 
    label: 'Project Type(s)', 
    type: 'multiselect', 
    required: true,
    options: PROJECT_TYPES,
    placeholder: 'Select your project type(s)'}
]
