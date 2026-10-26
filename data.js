export const profile = {
  name: 'Prabakaran B',
  role: 'MERN stack developer',
  location: 'Arcot, Ranipet district, Tamil Nadu',
  email: 'prabakaranbaktha@gmail.com',
  github: 'https://github.com/Praba151',
  linkedin: 'https://www.linkedin.com/in/praba-karan-a3a0b9234/',

  resume: 'https://drive.google.com/file/d/1zRhbnU0T8BPOreml1k8NziqslRDm-dMw/view?usp=sharing',


  photo: '/Photo.jpg',
}

export const techChips = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Socket.IO',
  'Razorpay',
]


export const projects = [
  {
    title: 'Online counselling platform',
    description:
      'A web app where clients find a counsellor, book a time slot, pay online and meet on video. Counsellors manage their own profile, slots, session notes and client records.',
    points: [
      'Two roles, client and counsellor, with JWT login and protected pages',
      'Razorpay payments, with the payment signature checked on the server',
      'Jitsi Meet video link created after payment, and a confirmation email with the Brevo API',
      'Real-time chat with Socket.IO. Messages are saved in MongoDB, so history stays after a refresh',
      'Session notes with file upload. Only the client and counsellor of that session can open them',
      'Client records page, and a check that stops the same time slot from being booked twice',
    ],
    tech: [
      'React (Vite)',
      'React Router',
      'Context API',
      'Axios',
      'Node.js',
      'Express.js',
      'MongoDB and Mongoose',
      'JWT',
      'bcryptjs',
      'Socket.IO',
      'Razorpay',
      'Jitsi Meet',
      'Brevo API',
      'Multer',
      'Netlify',
      'Render',
    ],
    live: 'https://counselling-frontend-app.netlify.app/',
    code: [
      {
        label: 'Frontend code',
        url: 'https://github.com/Praba151/counselling-frontend-app',
      },
      {
        label: 'Backend code',
        url: 'https://github.com/Praba151/counselling-backend-app',
      },
    ],
    demo: [],
  },
  {
    title: 'E-commerce store',
    description:
      'A shopping site that loads real product data from the Fake Store API.',
    points: [
      'Responsive product grid',
      'Add to cart, view cart and remove items',
      'Cart item count that updates live',
    ],
    tech: ['React', 'useState and useEffect', 'Fake Store API', 'CSS'],
    live: '',
    code: [
      {
        label: 'View code on GitHub',
        url: 'https://github.com/Praba151/e_commerce-website',
      },
    ],
    note: '',
    demo: [],
  },
  {
    title: 'Weather app',
    description:
      'Search any city in the world and see its current weather. Uses the OpenWeatherMap API.',
    points: [
      'Temperature in °C, humidity, wind speed and coordinates',
      'Loading state and a clear message when a city is not found',
      'Works on mobile and desktop',
    ],
    tech: ['React', 'OpenWeatherMap API', 'CSS'],
    live: '',
    code: [
      {
        label: 'View code on GitHub',
        url: 'https://github.com/Praba151/Weather-APP',
      },
    ],
    note: '',
    demo: [],
  },
  {
    title: 'Movie search',
  
    description: 'A React app where you search for movies by name.',
    points: [],
    tech: ['React', 'Vite'],
    live: 'https://praba-movie-review-app.netlify.app/',
    code: [
      {
        label: 'View code on GitHub',
        url: 'https://github.com/Praba151/movie_search_app',
      },
    ],
    note: '',
    demo: [],
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'React.js',
      'React Hooks',
      'Context API',
      'React Router',
      'Vite',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT authentication',
      'bcryptjs password hashing',
      'File uploads with Multer',
    ],
  },
  {
    title: 'Database',
    items: ['MongoDB with Mongoose', 'MySQL', 'CRUD operations', 'Table joins'],
  },
  {
    title: 'Integrations',
    items: [
      'Razorpay payments',
      'Socket.IO real-time chat',
      'Jitsi Meet video calls',
      'Brevo API emails',
      'Axios',
      'Fetch API',
    ],
  },
  {
    title: 'Tools and deployment',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Render'],
  },
]


export const education = [
  {
    title: 'B.E. Computer Science and Engineering',
    place: 'Jeppiaar Institute of Technology',
    years: '2019 to 2023',
    score: 'CGPA 7.8',
  },
  {
    title: 'Higher Secondary Course',
    place: 'Annai Saradha Matriculation Higher Secondary School',
    years: '2018 to 2019',
    score: 'Percentage 77%',
  },
]


export const certifications = [
  { title: 'Full-Stack (MERN) Development', link: 'https://drive.google.com/file/d/1eMGZbcqMrSA11YPKvgc7fklAy2-mgdz8/view?usp=drive_link' },
  { title: 'React.js', link: 'https://drive.google.com/file/d/1UIlmMZrPCH85trcfoiArbAo6ZPUYc9kO/view?usp=sharing' },
  { title: 'Node.js', link: 'https://drive.google.com/file/d/13mB7OncS9Y5GpyxHSmV4Hh3XiPF5YH0M/view?usp=sharing' },
]