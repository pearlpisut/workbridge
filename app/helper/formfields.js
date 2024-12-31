const HONG_KONG_DISTRICTS = [
    'Kwai Tsing',
    'North',
    'Tuen Mun',
    'Yuen Long',
    'Sham Shui Po',
    'Kwun Tong',
    'Wong Tai Sin',
    'Tai Po',
    'Sha Tin',
    'Islands',
    'Sai Kung',
    'Yau Tsim Mong',
    'Tsuen Wan',
    'Kowloon City',
    'Eastern',
    'Central and Western',
    'Southern',
    'Wan Chai'
]

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
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'whatsapp', label: 'WhatsApp Number', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { 
      name: 'location', 
      label: 'Current Location', 
      type: 'select', 
      required: true,
      options: HONG_KONG_DISTRICTS,
      placeholder: 'Select a district'
    },
    { name: 'skills', label: 'Skills', type: 'text', required: true, placeholder: 'seperate by commas' },
    { name: 'preferred_project_type', 
      label: 'Preferred Project Type(s)', 
      type: 'multiselect', 
      required: true,
      options: PROJECT_TYPES,
      placeholder: 'Select preferred project type(s)'
    },
    { name: 'portfolio_links', label: 'Portfolio Link(s)', type: 'text', required: true, placeholder: 'Resume File Link, Personal Site, etc.' },
    // { name: 'project_size', label: 'Preferred Project Sizes (comma-separated)', type: 'text', required: true },
    { name: 'bio', 
      label: 'Anything else you want to share', 
      type: 'textarea', 
      required: true,
      placeholder: 'Specific types of projects you are interested in, etc.'
    }
]