export const HONG_KONG_DISTRICTS = [
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
   
export const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'whatsapp', label: 'WhatsApp Number', type: 'text', required: true },
    { 
      name: 'location', 
      label: 'Current Location', 
      type: 'select', 
      required: true,
      options: HONG_KONG_DISTRICTS
    },
    { name: 'skills', label: 'Skills (comma-separated)', type: 'text', required: true },
    { name: 'portfolio_links', label: 'Portfolio Links (comma-separated)', type: 'text', required: true },
    { name: 'preferred_gig_type', label: 'Preferred Gig Types (comma-separated)', type: 'text', required: true },
    { name: 'project_size', label: 'Preferred Project Sizes (comma-separated)', type: 'text', required: true },
    { name: 'bio', label: 'Bio', type: 'textarea', required: true }
]