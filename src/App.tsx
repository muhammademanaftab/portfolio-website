import { useState, useEffect } from 'react';
import './App.css';
import { 
  ChevronDown, 
  Award, 
  Download,
  MessageCircle,
  // Modern icons we actually use
  Code as CodeModern,
  Cpu as CpuModern,
  Database as DatabaseModern,
  Globe as GlobeModern,
  Monitor as MonitorModern,
  Palette as PaletteModern,
  Shield as ShieldModern,
  Smartphone as SmartphoneModern,
  Star as StarModern,
  Target as TargetModern,
  TrendingUp as TrendingUpModern,
  Users as UsersModern,
  Zap as ZapModern,
  Terminal as TerminalModern,
  Settings as SettingsModern,
  Brain as BrainModern,
  Lock as LockModern,
  Cloud,
  // Contact icons
  Mail as MailIcon,
  Phone as PhoneIcon,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  // Section icons
  Briefcase as BriefcaseIcon,
  GraduationCap as GraduationCapIcon
} from 'lucide-react';

// Static portfolio data
const portfolioData = {
  personalInfo: {
    name: 'Muhammad Eman Aftab',
    title: 'Computer Science Student & Full-Stack Developer',
    location: 'Budapest, Hungary',
    email: 'emanaftab2022@gmail.com',
    phone: '+36 20 252 6795',
    github: 'muhammademanaftab',
    linkedin: 'muhammademanaftab',
    about: [
      'I am a passionate Computer Science student at Eötvös Loránd University (ELTE) in Budapest, Hungary, pursuing my Bachelor\'s degree with a focus on software development and emerging technologies.',
      'With a strong foundation in both frontend and backend development, I specialize in creating modern web applications using React, Laravel, and various other technologies. My experience spans from full-stack development to system design and implementation.',
      'I am currently working as a Student Mentor at HOOK, where I guide international students in their academic journey and help them integrate into the Hungarian academic environment.',
      'My technical interests include DevOps, containerization, machine learning, and building scalable applications. I am always eager to learn new technologies and contribute to innovative projects.'
    ]
  },
  quickFacts: {
    education: 'BSc Computer Science',
    experience: '2+ Years',
    projects: '8+ Projects',
    certifications: '12+ Certifications'
  },
  education: {
    degree: 'Bachelor\'s in Computer Science',
    institution: 'Eötvös Loránd University (ELTE), Hungary',
    period: 'Sep 2023 – Jul 2026',
    scholarship: 'Stipendium Hungaricum Scholarship (100%)',
    coursework: [
      'Data Structures',
      'Algorithms',
      'Object-Oriented Programming',
      'Software Development Methodologies',
      'Computer Networks'
    ]
  },
  experience: {
    title: 'Student Mentor',
    company: 'HOOK',
    location: 'Budapest, Hungary',
    period: 'Jul 2024 – Present',
    responsibilities: [
      'Guided international students in academic success and cultural integration throughout their studies in Hungary',
      'Assisted with course selection, administrative processes, and adapting to student life abroad',
      'Fostered a supportive and enriching environment to help students achieve both academic and personal goals'
    ]
  },
  projects: [
    {
      id: 1,
      title: 'Pet Catalogue – React and Laravel Web App',
      description: 'Developed a web application to catalogue and manage pets, featuring full CRUD capabilities with detailed birth/death tracking and dynamic pet statistics.',
      tech: ['React', 'Laravel', 'TailwindCSS', 'SQLite', 'Laravel Blade'],
      features: ['Full CRUD capabilities', 'Birth/death tracking', 'Dynamic pet statistics', 'Clean user interface'],
      icon: 'database',
      icon_color: 'blue'
    },
    {
      id: 2,
      title: 'Laravel LMS – Learning Management System',
      description: 'Built a full-stack learning platform with role-based dashboards for teachers and students.',
      tech: ['Laravel 12', 'SQLite', 'TailwindCSS', 'PHP'],
      features: ['Role-based dashboards', 'Task assignment and evaluation flows', 'Secure authentication using Laravel Breeze'],
      icon: 'graduationCap',
      icon_color: 'purple'
    },
    {
      id: 3,
      title: 'Task Manager Pro',
      description: 'Created a Flask-based to-do app with priority-based task filtering, due date tracking, and completion toggling.',
      tech: ['Flask', 'Python', 'SQLite', 'Bootstrap', 'HTML/CSS'],
      features: ['Priority-based task filtering', 'Due date tracking and real-time reminders', 'Detail view system for long tasks'],
      icon: 'checkSquare',
      icon_color: 'green'
    },
    {
      id: 4,
      title: 'Atmospheric Layer Simulation',
      description: 'Simulated interactions between atmospheric layers under varying environmental influences using advanced OOP design.',
      tech: ['C#', 'OOP', 'Simulation', 'Unit Testing'],
      features: ['Advanced OOP design with design patterns', 'Visitor and Singleton pattern implementation', 'Modularity and scalability'],
      icon: 'cloud',
      icon_color: 'cyan'
    },
    {
      id: 5,
      title: 'Java Board Game Simulation',
      description: 'Developed a custom Java board game with dynamic movement logic, player turns, and score management.',
      tech: ['Java', 'Swing', 'JUnit 5'],
      features: ['Dynamic movement logic and player turns', 'Score management', 'Unit-tested edge cases like board boundaries'],
      icon: 'gamepad2',
      icon_color: 'orange'
    },
    {
      id: 6,
      title: 'Vlera AI – Static Website',
      description: 'Built a responsive and informative static website detailing the impact and applications of AI assistants.',
      tech: ['HTML5', 'CSS', 'Bootstrap'],
      features: ['Responsive and informative design', 'AI assistant applications and impact', 'Modern static website'],
      icon: 'brain',
      icon_color: 'pink'
    },
    {
      id: 7,
      title: 'Web Store Management System',
      description: 'Designed a CLI-based store management system featuring product entry, cart updates, and file-based persistence.',
      tech: ['C++', 'Dynamic Memory', 'File Handling'],
      features: ['Product entry and cart updates', 'File-based persistence', 'CLI-based store management'],
      icon: 'shoppingCart',
      icon_color: 'yellow'
    },
    {
      id: 8,
      title: 'Event Log Analyzer',
      description: 'Created a Python-based analyzer to process, sort, and summarize user-machine logs.',
      tech: ['Python', 'Object-Oriented Programming'],
      features: ['Log processing and analysis', 'Data sorting and summarization', 'OOP and file handling for data reporting'],
      icon: 'fileText',
      icon_color: 'indigo'
    }
  ],
  skills: {
    'Programming Languages': ['Java', 'Python', 'C', 'C#', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS', 'PHP', 'Clean', 'Haskell'],
    'Web Development': ['React', 'Laravel', 'Flask', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'Laravel Blade'],
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'Helm', 'Linux', 'Git', 'GitHub'],
    'Database & Storage': ['SQLite', 'SQL', 'DBMS', 'File Handling'],
    'Testing & Quality': ['JUnit 5', 'Unit Testing', 'Robot Framework'],
    'Specialized Areas': ['Networking', 'Cryptography & Security', 'Computer Graphics', 'Game Development', 'GUI', 'Microservices']
  },
  certifications: [
    'Stipendium Hungaricum Scholarship (100%)',
    'React JS – Meta',
    'React Basics',
    'React Advanced',
    'Unsupervised Learning, Recommenders, Reinforcement Learning – Stanford Online',
    'Introduction to Containers w/ Docker, Kubernetes & OpenShift – IBM',
    'Java (Basic) – HackerRank',
    'REST API (Intermediate) – HackerRank',
    'SQL (Intermediate) – HackerRank',
    'C# (Basic) – HackerRank',
    'Crash Course on Python – Coursera',
    'Introduction to Git and GitHub – Coursera',
    'Web Design: Strategy and Information Architecture – Coursera'
  ],
  contact: {
    email: {
      address: 'emanaftab2022@gmail.com',
      icon: 'mail',
      color: 'blue',
      label: 'Email'
    },
    phone: {
      number: '+36 20 252 6795',
      icon: 'phone',
      color: 'green',
      label: 'Phone'
    },
    github: {
      username: 'muhammademanaftab',
      url: 'https://github.com/muhammademanaftab',
      icon: 'github',
      color: 'gray',
      label: 'GitHub'
    },
    linkedin: {
      username: 'muhammademanaftab',
      url: 'https://linkedin.com/in/muhammademanaftab',
      icon: 'linkedin',
      color: 'blue',
      label: 'LinkedIn'
    }
  }
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Get icon component by name with better mapping for projects
  const getProjectIcon = (iconName: string) => {
    const projectIcons: { [key: string]: any } = {
      'code': CodeModern,
      'users': UsersModern,
      'zap': ZapModern,
      'trendingUp': TrendingUpModern,
      'star': StarModern,
      'cpu': CpuModern,
      'web': GlobeModern,
      'mobile': SmartphoneModern,
      'database': DatabaseModern,
      'server': ShieldModern, // Using ShieldModern as ServerModern
      'frontend': MonitorModern,
      'backend': ShieldModern, // Using ShieldModern as ServerModern
      'fullstack': CodeModern,
      'ai': BrainModern,
      'game': TargetModern,
      'security': LockModern,
      'ui': PaletteModern,
      'api': TerminalModern,
      'cloud': Cloud,
      'devops': SettingsModern
    };
    return projectIcons[iconName] || CodeModern;
  };

  // Get icon component by name with better mapping
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      star: StarModern,
      zap: ZapModern,
      users: UsersModern,
      trendingUp: TrendingUpModern,
      code: CodeModern,
      cpu: CpuModern,
      mail: MailIcon,
      phone: PhoneIcon,
      github: GithubIcon,
      linkedin: LinkedinIcon,
      download: Download,
      externalLink: GlobeModern,
      heart: StarModern,
      sparkles: StarModern,
      target: TargetModern,
      globe: GlobeModern,
      briefcase: BriefcaseIcon,
      graduationCap: GraduationCapIcon,
      bookOpen: GraduationCapIcon,
      shield: ShieldModern,
      database: DatabaseModern,
      server: ShieldModern,
      monitor: MonitorModern,
      smartphone: SmartphoneModern,
      globe2: GlobeModern,
      messageCircle: MessageCircle,
      send: MessageCircle
    };
    return icons[iconName] || CodeModern;
  };

  // Get skill category icon
  const getSkillCategoryIcon = (category: string) => {
    const categoryIcons: { [key: string]: any } = {
      'Programming Languages': CodeModern,
      'Frontend Development': MonitorModern,
      'Backend Development': ShieldModern, // Using ShieldModern as ServerModern
      'Database & Storage': DatabaseModern,
      'DevOps & Tools': ShieldModern,
      'Specialized Areas': TargetModern
    };
    return categoryIcons[category] || CodeModern;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="gradient-text text-xl font-bold flex items-center gap-2">
              <CodeModern className="w-6 h-6" />
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-purple-400 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#education" className="text-white hover:text-purple-400 transition-colors relative group">
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#experience" className="text-white hover:text-purple-400 transition-colors relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-white hover:text-purple-400 transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#skills" className="text-white hover:text-purple-400 transition-colors relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#certifications" className="text-white hover:text-purple-400 transition-colors relative group">
                Certifications
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white hover:text-purple-400 transition-colors p-2" 
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu dropdown */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10 z-50 transition-all duration-300 ease-in-out`}>
            <div className="px-6 py-8 space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-lg font-semibold">Navigation</h3>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <a 
                  href="#about" 
                  className="flex items-center text-white hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-medium">About</span>
                </a>
                <a 
                  href="#education" 
                  className="flex items-center text-white hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-medium">Education</span>
                </a>
                <a 
                  href="#experience" 
                  className="flex items-center text-white hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-medium">Experience</span>
                </a>
                <a 
                  href="#projects" 
                  className="flex items-center text-white hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-medium">Projects</span>
                </a>
                <a 
                  href="#skills" 
                  className="flex items-center text-white hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-medium">Skills</span>
                </a>
                <a 
                  href="#certifications" 
                  className="flex items-center text-white hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-medium">Certifications</span>
                </a>
                <a 
                  href="#contact" 
                  className="flex items-center text-white hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-medium">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

             {/* Hero Section */}
       <section id="hero" className="pt-24 pb-16 sm:pb-20 md:pb-24 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <div className="mb-8">
               <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-glow">
                 <CodeModern className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
               </div>
             </div>
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text mb-4 sm:mb-6 animate-slide-in leading-tight">
               {portfolioData.personalInfo?.name || 'Muhammad Eman Aftab'}
             </h1>
             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto animate-fade-in px-4">
               {portfolioData.personalInfo?.title || 'Computer Science Student & Full-Stack Developer'}
             </p>
             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
               <a 
                 href="#contact" 
                 className="btn-secondary hover-lift px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
               >
                 <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                 Get In Touch
               </a>
               <a 
                 href="/resume.pdf" 
                 download="Muhammad_Eman_Aftab_Resume.pdf"
                 className="btn-primary hover-lift px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
               >
                 <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                 Download Resume
               </a>
             </div>
             <div className="flex justify-center">
               <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 animate-bounce" aria-label="Scroll down" />
             </div>
           </div>
         </div>
       </section>

             {/* About Section */}
       <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 pt-20 sm:pt-32 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text mb-8 sm:mb-12 lg:mb-16">
             About Me
           </h2>
           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
             <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
               {portfolioData.personalInfo?.about?.map((paragraph, index) => (
                 <p key={index} className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                   {paragraph}
                 </p>
               ))}
             </div>
             <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
               {portfolioData.quickFacts && Object.entries(portfolioData.quickFacts).map(([key, value]) => (
                 <div key={key} className="glass hover-lift p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center">
                   <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-1 sm:mb-2">{value}</h3>
                   <p className="text-xs sm:text-sm text-gray-400 capitalize">{key}</p>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>

             {/* Education Section */}
       <section id="education" className="py-12 sm:py-16 md:py-20 lg:py-24 pt-20 sm:pt-32 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text mb-8 sm:mb-12 lg:mb-16">
             Education
           </h2>
           <div className="glass hover-lift p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl">
             <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
               <GraduationCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 mt-1" />
               <div>
                 <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                   {portfolioData.education?.degree}
                 </h3>
                 <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">
                   {portfolioData.education?.institution}
                 </p>
                 <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg font-mono">
                   {portfolioData.education?.period}
                 </p>
               </div>
             </div>
             <div className="mb-4 sm:mb-6">
               <span className="btn-primary inline-block px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-full whitespace-normal text-center block w-full md:w-auto">
                 {portfolioData.education?.scholarship}
               </span>
             </div>
             <div>
               <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">Key Coursework</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                 {portfolioData.education?.coursework?.map((course, index) => (
                   <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base text-center">
                     {course}
                   </span>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 md:py-24 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Experience
          </h2>
          <div className="glass hover-lift p-8 sm:p-10 md:p-12 rounded-3xl">
                         <div className="flex items-start gap-4 mb-6">
               <BriefcaseIcon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  {portfolioData.experience?.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-2">
                  {portfolioData.experience?.company}
                </p>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg font-mono">
                  {portfolioData.experience?.period}
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {portfolioData.experience?.responsibilities?.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 text-base sm:text-lg md:text-xl">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

             {/* Projects Section */}
       <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 pt-20 sm:pt-32 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text mb-8 sm:mb-12 lg:mb-16">
             Projects
           </h2>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
             {portfolioData.projects?.map((project) => {
               const IconComponent = getProjectIcon(project.icon);
               return (
                 <div key={project.id} className="glass hover-lift p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
                   <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                     <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-${project.icon_color}-500 to-${project.icon_color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 icon-glow`}>
                       <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                     </div>
                     <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                       {project.title}
                     </h3>
                   </div>
                   <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6">
                     {project.description}
                   </p>
                   <div className="space-y-3 sm:space-y-4">
                     <div>
                       <h4 className="text-white font-semibold mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Technologies</h4>
                       <div className="flex flex-wrap gap-1 sm:gap-2">
                         {project.tech.map((tech, index) => (
                           <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs sm:text-sm">
                             {tech}
                           </span>
                         ))}
                       </div>
                     </div>
                     <div>
                       <h4 className="text-white font-semibold mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Features</h4>
                       <ul className="space-y-1">
                         {project.features.map((feature, index) => (
                           <li key={index} className="text-gray-300 text-xs sm:text-sm md:text-base flex items-center gap-2">
                             <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full"></span>
                             {feature}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                 </div>
               );
             })}
           </div>
         </div>
       </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 md:py-24 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.skills && Object.entries(portfolioData.skills).map(([category, skills]) => {
              const CategoryIcon = getSkillCategoryIcon(category);
              return (
                <div key={category} className="glass hover-lift p-6 sm:p-8 rounded-2xl">
                                     <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 icon-pulse">
                       <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                     </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-2 rounded-lg text-sm sm:text-base">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-20 md:py-24 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Certifications
          </h2>
          <div className="glass hover-lift p-8 sm:p-10 md:p-12 rounded-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Professional Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {portfolioData.certifications?.map((certification, index) => (
                <span key={index} className="bg-purple-500/20 text-purple-300 px-4 py-3 rounded-lg text-sm sm:text-base md:text-lg">
                  {certification}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

             {/* Contact Section */}
       <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 pt-20 sm:pt-32 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center gradient-text mb-6 sm:mb-8">
             Get In Touch
           </h2>
           <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
             I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
           </p>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
             {portfolioData.contact && Object.entries(portfolioData.contact).map(([key, contact]) => {
               const IconComponent = getIcon(contact.icon);
               const contactData = contact as any; // Type assertion to handle different contact types
               return (
                 <a
                   key={key}
                   href={key === 'email' ? `mailto:${contactData.address}` : key === 'phone' ? `tel:${contactData.number}` : contactData.url}
                   target={key === 'email' || key === 'phone' ? undefined : '_blank'}
                   rel={key === 'email' || key === 'phone' ? undefined : 'noopener noreferrer'}
                   className="glass hover-lift p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group transition-all duration-300"
                 >
                   <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 icon-bounce`}>
                     <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                   </div>
                   <h3 className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">
                     {contact.label}
                   </h3>
                   <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                     {key === 'email' ? contactData.address : key === 'phone' ? contactData.number : contactData.username}
                   </p>
                 </a>
               );
             })}
           </div>
         </div>
       </section>

      {/* Footer */}
      <footer className="py-8 glass-dark border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 font-mono text-sm sm:text-base">
              © 2024 {portfolioData.personalInfo?.name || 'Muhammad Eman Aftab'}. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 