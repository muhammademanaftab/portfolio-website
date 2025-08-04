import { useState, useEffect } from 'react';
import './App.css';
import { 
  ChevronDown, 
  MapPin, 
  Calendar, 
  Award, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  Star,
  Zap,
  Users,
  TrendingUp,
  Code,
  Cpu,
  Download,
  ExternalLink,
  Heart,
  Sparkles,
  Target,
  Globe,
  Briefcase,
  GraduationCap,
  BookOpen,
  Shield,
  Database,
  Server,
  Monitor,
  Smartphone,
  Globe2,
  MessageCircle,
  Send,
  FileText,
  Layers,
  Palette,
  Smartphone as Mobile,
  Globe as Web,
  Code2,
  Terminal,
  Box,
  Package,
  Settings,
  Wrench,
  Rocket,
  Lightbulb,
  Brain,
  Cpu as Chip,
  Network,
  Lock,
  Eye,
  Globe as Website,
  Database as Storage,
  Server as Backend,
  Monitor as Frontend,
  Shield as Security,
  Target as Specialized
} from 'lucide-react';

// API Base URL
const API_BASE_URL = 'http://localhost:8000/api';

// Types for API responses
interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  about: string[];
}

interface QuickFacts {
  education: string;
  experience: string;
  projects: string;
  certifications: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  scholarship: string;
  coursework: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  icon: string;
  icon_color: string;
}

interface Skills {
  [category: string]: string[];
}

interface Contact {
  email: {
    address: string;
    icon: string;
    color: string;
    label: string;
  };
  phone: {
    number: string;
    icon: string;
    color: string;
    label: string;
  };
  github: {
    username: string;
    url: string;
    icon: string;
    color: string;
    label: string;
  };
  linkedin: {
    username: string;
    url: string;
    icon: string;
    color: string;
    label: string;
  };
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [portfolioData, setPortfolioData] = useState<{
    personalInfo?: PersonalInfo;
    quickFacts?: QuickFacts;
    education?: Education;
    experience?: Experience;
    projects?: Project[];
    skills?: Skills;
    certifications?: string[];
    contact?: Contact;
  }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all portfolio data
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all data in parallel
        const [
          overviewResponse,
          educationResponse,
          experienceResponse,
          projectsResponse,
          skillsResponse,
          certificationsResponse,
          contactResponse
        ] = await Promise.all([
          fetch(`${API_BASE_URL}/portfolio/overview`),
          fetch(`${API_BASE_URL}/portfolio/education`),
          fetch(`${API_BASE_URL}/portfolio/experience`),
          fetch(`${API_BASE_URL}/portfolio/projects`),
          fetch(`${API_BASE_URL}/portfolio/skills`),
          fetch(`${API_BASE_URL}/portfolio/certifications`),
          fetch(`${API_BASE_URL}/portfolio/contact`)
        ]);

        // Check if all requests were successful
        const responses = [
          overviewResponse,
          educationResponse,
          experienceResponse,
          projectsResponse,
          skillsResponse,
          certificationsResponse,
          contactResponse
        ];

        const failedResponses = responses.filter(response => !response.ok);
        if (failedResponses.length > 0) {
          throw new Error(`Failed to fetch data: ${failedResponses.length} requests failed`);
        }

        // Parse all responses
        const [
          overviewData,
          educationData,
          experienceData,
          projectsData,
          skillsData,
          certificationsData,
          contactData
        ] = await Promise.all([
          overviewResponse.json(),
          educationResponse.json(),
          experienceResponse.json(),
          projectsResponse.json(),
          skillsResponse.json(),
          certificationsResponse.json(),
          contactResponse.json()
        ]);

        setPortfolioData({
          personalInfo: overviewData.personal_info,
          quickFacts: overviewData.quick_facts,
          education: educationData.education,
          experience: experienceData.experience,
          projects: projectsData.projects,
          skills: skillsData.skills,
          certifications: certificationsData.certifications,
          contact: contactData.contact
        });

        setIsLoaded(true);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-white mt-4 text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-white text-2xl mb-2">Error Loading Portfolio</h2>
          <p className="text-gray-300 mb-4">{error}</p>
          <p className="text-gray-400 text-sm">
            Make sure the Laravel backend is running on http://localhost:8000
          </p>
        </div>
      </div>
    );
  }

  // Get icon component by name with better mapping for projects
  const getProjectIcon = (iconName: string) => {
    const projectIcons: { [key: string]: any } = {
      'code': Code2,
      'users': Users,
      'zap': Zap,
      'trendingUp': TrendingUp,
      'star': Star,
      'cpu': Chip,
      'web': Web,
      'mobile': Mobile,
      'database': Database,
      'server': Server,
      'frontend': Monitor,
      'backend': Backend,
      'fullstack': Code,
      'ai': Brain,
      'game': Target,
      'security': Lock,
      'ui': Palette,
      'api': Terminal,
      'cloud': Globe,
      'devops': Settings
    };
    return projectIcons[iconName] || Code2;
  };

  // Get icon component by name with better mapping
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      star: Star,
      zap: Zap,
      users: Users,
      trendingUp: TrendingUp,
      code: Code,
      cpu: Cpu,
      mail: Mail,
      phone: Phone,
      github: Github,
      linkedin: Linkedin,
      download: Download,
      externalLink: ExternalLink,
      heart: Heart,
      sparkles: Sparkles,
      target: Target,
      globe: Globe,
      briefcase: Briefcase,
      graduationCap: GraduationCap,
      bookOpen: BookOpen,
      shield: Shield,
      database: Database,
      server: Server,
      monitor: Monitor,
      smartphone: Smartphone,
      globe2: Globe2,
      messageCircle: MessageCircle,
      send: Send
    };
    return icons[iconName] || Code;
  };

  // Get skill category icon
  const getSkillCategoryIcon = (category: string) => {
    const categoryIcons: { [key: string]: any } = {
      'Programming Languages': Code,
      'Frontend Development': Monitor,
      'Backend Development': Server,
      'Database & Storage': Database,
      'DevOps & Tools': Shield,
      'Specialized Areas': Target
    };
    return categoryIcons[category] || Code;
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
              <Code className="w-6 h-6" />
              Portfolio
            </div>
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
            <button className="md:hidden text-white hover:text-purple-400 transition-colors" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 sm:pb-20 md:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-glow">
                <Code className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" />
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
              <GraduationCap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
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
              <Briefcase className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
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
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-${project.icon_color}-500 to-${project.icon_color}-600 flex items-center justify-center`}>
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
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
              return (
                <a
                  key={key}
                  href={key === 'email' ? `mailto:${contact.address}` : key === 'phone' ? `tel:${contact.number}` : contact.url}
                  target={key === 'email' || key === 'phone' ? undefined : '_blank'}
                  rel={key === 'email' || key === 'phone' ? undefined : 'noopener noreferrer'}
                  className="glass hover-lift p-6 rounded-2xl text-center group transition-all duration-300"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base md:text-lg">
                    {contact.label}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                    {key === 'email' ? contact.address : key === 'phone' ? contact.number : contact.username}
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
              © 2024 {portfolioData.personalInfo?.name || 'Muhammad Eman Aftab'}. Built with React & Laravel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 