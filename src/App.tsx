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
    phone: '+36202526795',
    github: 'muhammademanaftab',
    linkedin: 'muhammademanaftab',
    about: [
      'I am a passionate Computer Science student at Budapest University of Technology and Economics, specializing in full-stack development and modern web technologies.',
      'With a strong foundation in both frontend and backend development, I enjoy creating responsive, user-friendly applications that solve real-world problems.',
      'I am constantly learning and exploring new technologies, with a particular interest in React, Laravel, and modern development practices.'
    ]
  },
  quickFacts: {
    education: 'BSc Computer Science',
    experience: '2+ Years',
    projects: '10+ Projects',
    certifications: '12+ Certifications'
  },
  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Budapest University of Technology and Economics',
    period: '2022 - 2026',
    scholarship: 'Stipendium Hungaricum Scholarship (100%)',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Web Development',
      'Software Engineering',
      'Computer Networks'
    ]
  },
  experience: {
    title: 'Full-Stack Developer',
    company: 'Freelance & Personal Projects',
    period: '2022 - Present',
    responsibilities: [
      'Developed responsive web applications using React, Laravel, and modern technologies',
      'Implemented RESTful APIs and database design with SQLite and MySQL',
      'Created user-friendly interfaces with TailwindCSS and Bootstrap',
      'Deployed applications using Docker, Vercel, and various cloud platforms',
      'Collaborated with clients to understand requirements and deliver solutions'
    ]
  },
  projects: [
    {
      id: 1,
      title: 'Pet Catalogue - React & Laravel Web App',
      description: 'Full-stack web application for cataloguing and managing pets with CRUD capabilities, birth/death tracking, and dynamic statistics.',
      tech: ['React', 'Laravel', 'TailwindCSS', 'SQLite', 'Laravel Blade'],
      features: ['Full CRUD Operations', 'Dynamic Statistics', 'Clean UI/UX'],
      icon: 'code',
      icon_color: 'green'
    },
    {
      id: 2,
      title: 'Laravel LMS - Learning Management System',
      description: 'Comprehensive learning platform with role-based dashboards for teachers and students, featuring task management and secure authentication.',
      tech: ['Laravel 12', 'SQLite', 'TailwindCSS', 'PHP', 'Laravel Breeze'],
      features: ['Role-based Dashboards', 'Task Assignment', 'Secure Authentication'],
      icon: 'users',
      icon_color: 'blue'
    },
    {
      id: 3,
      title: 'Task Manager Pro',
      description: 'Flask-based productivity application with priority filtering, due date tracking, and real-time reminders.',
      tech: ['Flask', 'Python', 'SQLite', 'Bootstrap', 'HTML/CSS'],
      features: ['Priority Filtering', 'Due Date Tracking', 'Real-time Reminders'],
      icon: 'zap',
      icon_color: 'yellow'
    },
    {
      id: 4,
      title: 'Atmospheric Layer Simulation',
      description: 'Advanced OOP simulation of atmospheric layer interactions using design patterns for modularity and scalability.',
      tech: ['C#', 'OOP', 'Design Patterns', 'Unit Testing'],
      features: ['Visitor Pattern', 'Singleton Pattern', 'Modular Design'],
      icon: 'trendingUp',
      icon_color: 'purple'
    },
    {
      id: 5,
      title: 'Java Board Game Simulation',
      description: 'Custom board game with dynamic movement logic, comprehensive player management, and extensive unit testing.',
      tech: ['Java', 'Swing', 'JUnit 5'],
      features: ['Dynamic Movement', 'Score Management', 'Unit Tested'],
      icon: 'star',
      icon_color: 'orange'
    },
    {
      id: 6,
      title: 'Vlera AI - Static Website',
      description: 'Responsive informational website showcasing AI assistant applications and impact.',
      tech: ['HTML5', 'CSS', 'Bootstrap'],
      features: ['Responsive Design', 'Modern UI', 'AI Focus'],
      icon: 'cpu',
      icon_color: 'cyan'
    }
  ],
  skills: {
    'Programming Languages': ['Java', 'Python', 'C', 'C#', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS', 'PHP', 'Clean', 'Haskell'],
    'Frontend Development': ['React', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'HTML5', 'CSS3', 'Responsive Design'],
    'Backend Development': ['Laravel', 'Flask', 'Node.js', 'PHP', 'REST APIs', 'Microservices'],
    'Database & Storage': ['SQLite', 'SQL', 'DBMS', 'File Handling'],
    'DevOps & Tools': ['Docker', 'Kubernetes', 'Helm', 'Linux', 'Git', 'GitHub'],
    'Specialized Areas': ['Networking', 'Cryptography & Security', 'Computer Graphics', 'Game Development', 'Robot Framework']
  },
  certifications: [
    'Stipendium Hungaricum Scholarship (100%)',
    'React JS – Meta',
    'React Basics & Advanced',
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
      color: 'purple',
      label: 'Email Me'
    },
    phone: {
      number: '+36202526795',
      icon: 'phone',
      color: 'green',
      label: 'Call Me'
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
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10 z-50`}>
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#about" 
                className="block text-white hover:text-purple-400 transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#education" 
                className="block text-white hover:text-purple-400 transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </a>
              <a 
                href="#experience" 
                className="block text-white hover:text-purple-400 transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block text-white hover:text-purple-400 transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="block text-white hover:text-purple-400 transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#certifications" 
                className="block text-white hover:text-purple-400 transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Certifications
              </a>
              <a 
                href="#contact" 
                className="block text-white hover:text-purple-400 transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 sm:pb-20 md:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
                             <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-glow">
                 <CodeModern className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" />
               </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold gradient-text mb-6 animate-slide-in">
              {portfolioData.personalInfo?.name || 'Muhammad Eman Aftab'}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in">
              {portfolioData.personalInfo?.title || 'Computer Science Student & Full-Stack Developer'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="#contact" 
                className="btn-secondary hover-lift px-8 py-3 text-base sm:text-lg md:text-xl font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Get In Touch
              </a>
              <a 
                href="/resume.pdf" 
                download="Muhammad_Eman_Aftab_Resume.pdf"
                className="btn-primary hover-lift px-8 py-3 text-base sm:text-lg md:text-xl font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
            <div className="flex justify-center">
              <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" aria-label="Scroll down" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {portfolioData.personalInfo?.about?.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              {portfolioData.quickFacts && Object.entries(portfolioData.quickFacts).map(([key, value]) => (
                <div key={key} className="glass hover-lift p-6 rounded-2xl text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{value}</h3>
                  <p className="text-gray-400 capitalize">{key}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 md:py-24 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Education
          </h2>
          <div className="glass hover-lift p-8 sm:p-10 md:p-12 rounded-3xl">
                         <div className="flex items-start gap-4 mb-6">
               <GraduationCapIcon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  {portfolioData.education?.degree}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-2">
                  {portfolioData.education?.institution}
                </p>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg font-mono">
                  {portfolioData.education?.period}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <span className="btn-primary inline-block px-4 py-2 text-sm sm:text-base md:text-lg font-semibold rounded-full whitespace-normal text-center block w-full md:w-auto">
                {portfolioData.education?.scholarship}
              </span>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">Key Coursework</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {portfolioData.education?.coursework?.map((course, index) => (
                  <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-2 rounded-lg text-sm sm:text-base text-center">
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
      <section id="projects" className="py-16 sm:py-20 md:py-24 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects?.map((project) => {
              const IconComponent = getProjectIcon(project.icon);
              return (
                <div key={project.id} className="glass hover-lift p-6 sm:p-8 rounded-2xl">
                                     <div className="flex items-center gap-4 mb-4">
                     <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-${project.icon_color}-500 to-${project.icon_color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 icon-glow`}>
                       <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                     </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base md:text-lg">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs sm:text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base md:text-lg">Features</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-gray-300 text-xs sm:text-sm md:text-base flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
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
      <section id="contact" className="py-16 sm:py-20 md:py-24 pt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-text mb-8">
            Get In Touch
          </h2>
          <p className="text-center text-gray-300 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.contact && Object.entries(portfolioData.contact).map(([key, contact]) => {
              const IconComponent = getIcon(contact.icon);
              const contactData = contact as any; // Type assertion to handle different contact types
              return (
                <a
                  key={key}
                  href={key === 'email' ? `mailto:${contactData.address}` : key === 'phone' ? `tel:${contactData.number}` : contactData.url}
                  target={key === 'email' || key === 'phone' ? undefined : '_blank'}
                  rel={key === 'email' || key === 'phone' ? undefined : 'noopener noreferrer'}
                  className="glass hover-lift p-6 rounded-2xl text-center group transition-all duration-300"
                >
                                     <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 icon-bounce`}>
                     <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                   </div>
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base md:text-lg">
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