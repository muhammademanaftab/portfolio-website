import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Cpu, Award, Calendar, Download, Star, Zap, Users, TrendingUp } from 'lucide-react';
import './App.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Pet Catalogue - React & Laravel Web App",
      description: "Full-stack web application for cataloguing and managing pets with CRUD capabilities, birth/death tracking, and dynamic statistics.",
      tech: ["React", "Laravel", "TailwindCSS", "SQLite", "Laravel Blade"],
      features: ["Full CRUD Operations", "Dynamic Statistics", "Clean UI/UX"],
      icon: <Code className="text-blue-400" size={24} />
    },
    {
      title: "Laravel LMS - Learning Management System",
      description: "Comprehensive learning platform with role-based dashboards for teachers and students, featuring task management and secure authentication.",
      tech: ["Laravel 12", "SQLite", "TailwindCSS", "PHP", "Laravel Breeze"],
      features: ["Role-based Dashboards", "Task Assignment", "Secure Authentication"],
      icon: <Users className="text-green-400" size={24} />
    },
    {
      title: "Task Manager Pro",
      description: "Flask-based productivity application with priority filtering, due date tracking, and real-time reminders.",
      tech: ["Flask", "Python", "SQLite", "Bootstrap", "HTML/CSS"],
      features: ["Priority Filtering", "Due Date Tracking", "Real-time Reminders"],
      icon: <Zap className="text-yellow-400" size={24} />
    },
    {
      title: "Atmospheric Layer Simulation",
      description: "Advanced OOP simulation of atmospheric layer interactions using design patterns for modularity and scalability.",
      tech: ["C#", "OOP", "Design Patterns", "Unit Testing"],
      features: ["Visitor Pattern", "Singleton Pattern", "Modular Design"],
      icon: <TrendingUp className="text-purple-400" size={24} />
    },
    {
      title: "Java Board Game Simulation",
      description: "Custom board game with dynamic movement logic, comprehensive player management, and extensive unit testing.",
      tech: ["Java", "Swing", "JUnit 5"],
      features: ["Dynamic Movement", "Score Management", "Unit Tested"],
      icon: <Star className="text-orange-400" size={24} />
    },
    {
      title: "Vlera AI - Static Website",
      description: "Responsive informational website showcasing AI assistant applications and impact.",
      tech: ["HTML5", "CSS", "Bootstrap"],
      features: ["Responsive Design", "Modern UI", "AI Focus"],
      icon: <Cpu className="text-cyan-400" size={24} />
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "C", "C#", "C++", "SQL", "JavaScript", "HTML", "CSS", "PHP", "Clean", "Haskell"],
    "Frontend Development": ["React", "TypeScript", "TailwindCSS", "Bootstrap", "HTML5", "CSS3", "Responsive Design"],
    "Backend Development": ["Laravel", "Flask", "Node.js", "PHP", "REST APIs", "Microservices"],
    "Database & Storage": ["SQLite", "SQL", "DBMS", "File Handling"],
    "DevOps & Tools": ["Docker", "Kubernetes", "Helm", "Linux", "Git", "GitHub"],
    "Specialized Areas": ["Networking", "Cryptography & Security", "Computer Graphics", "Game Development", "Robot Framework"]
  };

  const certifications = [
    "Stipendium Hungaricum Scholarship (100%)",
    "React JS – Meta",
    "React Basics & Advanced",
    "Unsupervised Learning, Recommenders, Reinforcement Learning – Stanford Online",
    "Introduction to Containers w/ Docker, Kubernetes & OpenShift – IBM",
    "Java (Basic) – HackerRank",
    "REST API (Intermediate) – HackerRank",
    "SQL (Intermediate) – HackerRank",
    "C# (Basic) – HackerRank",
    "Crash Course on Python – Coursera",
    "Introduction to Git and GitHub – Coursera",
    "Web Design: Strategy and Information Architecture – Coursera"
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-dark z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text truncate">
              Muhammad Eman Aftab
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-all duration-300 relative ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`bg-white block h-0.5 w-6 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`bg-white block h-0.5 w-6 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 animate-slide-in">
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 hover:text-purple-400 hover:bg-white/5 transition-colors touch-manipulation rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
          <div className="mb-8 sm:mb-12 animate-slide-in">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center animate-glow">
              <Code size={32} className="sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-4 sm:mb-6 gradient-text leading-tight px-2">
              Muhammad Eman Aftab
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 font-light px-4">Computer Science Student & Full-Stack Developer</p>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 font-mono">Budapest, Hungary</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 px-2">
            <a href="mailto:emanaftab2022@gmail.com" className="btn-secondary flex items-center gap-2 sm:gap-3 hover-lift text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              <Mail size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Email Me</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a href="tel:+36202526795" className="btn-secondary flex items-center gap-2 sm:gap-3 hover-lift text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              <Phone size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Call Me</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href="https://github.com/muhammademanaftab" className="btn-secondary flex items-center gap-2 sm:gap-3 hover-lift text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              <Github size={16} className="sm:w-5 sm:h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/muhammademanaftab" className="btn-secondary flex items-center gap-2 sm:gap-3 hover-lift text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              <Linkedin size={16} className="sm:w-5 sm:h-5" />
              LinkedIn
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce touch-manipulation"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} className="sm:w-10 sm:h-10 text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 px-4 pt-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 gradient-text px-4">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a passionate Computer Science student at Eötvös Loránd University (ELTE) in Budapest, Hungary, 
                with a strong foundation in full-stack development and software engineering. Currently pursuing my 
                Bachelor's degree, I combine academic excellence with practical experience in modern web technologies.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                As a Student Mentor at HÖOK, I help international students navigate their academic journey while 
                continuously expanding my technical expertise through diverse projects ranging from web applications 
                to system simulations.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 text-gray-400">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
                <span className="font-mono text-sm sm:text-base">Budapest, Hungary</span>
              </div>
            </div>
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 gradient-text-secondary">Quick Facts</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm sm:text-base">Education</span>
                  <span className="text-white font-semibold text-sm sm:text-base">CS @ ELTE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm sm:text-base">Experience</span>
                  <span className="text-white font-semibold text-sm sm:text-base">Student Mentor</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm sm:text-base">Projects</span>
                  <span className="text-white font-semibold text-sm sm:text-base">8+ Completed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm sm:text-base">Certifications</span>
                  <span className="text-white font-semibold text-sm sm:text-base">12+ Earned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 md:py-24 px-4 glass-dark pt-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 gradient-text px-4">
            Education
          </h2>
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Bachelor's in Computer Science</h3>
                <p className="text-base sm:text-lg md:text-xl gradient-text-secondary mb-3 sm:mb-4">Eötvös Loránd University (ELTE), Hungary</p>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                  <Calendar size={16} className="sm:w-5 sm:h-5" />
                  <span className="font-mono text-sm sm:text-base">Sep 2023 – Jul 2026</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="btn-primary text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3 whitespace-normal text-center block w-full md:w-auto">
                  Stipendium Hungaricum Scholarship (100%)
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {[
                  "Data Structures", "Algorithms", "Object-Oriented Programming", 
                  "Software Development Methodologies", "Computer Networks"
                ].map((course) => (
                  <span key={course} className="glass px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 pt-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 gradient-text">
            Experience
          </h2>
          <div className="glass rounded-3xl p-10 hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Student Mentor</h3>
                <p className="text-xl gradient-text-secondary mb-4">HÖOK, Budapest, Hungary</p>
                <div className="flex items-center gap-3 text-gray-400">
                  <Calendar size={20} />
                  <span className="font-mono">Jul 2024 – Present</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">
                  Guided international students in academic success and cultural integration throughout their studies in Hungary
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">
                  Assisted with course selection, administrative processes, and adapting to student life abroad
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">
                  Fostered a supportive and enriching environment to help students achieve both academic and personal goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 glass-dark pt-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift group">
                <div className="flex items-center justify-between mb-6">
                  {project.icon}
                  <ExternalLink className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold gradient-text-secondary mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="glass px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 gradient-text">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center gap-4 mb-8">
                  {category.includes('Programming') && <Code className="text-blue-400" size={28} />}
                  {category.includes('Frontend') && <Server className="text-green-400" size={28} />}
                  {category.includes('Backend') && <Database className="text-purple-400" size={28} />}
                  {category.includes('Database') && <Database className="text-cyan-400" size={28} />}
                  {category.includes('DevOps') && <Cpu className="text-orange-400" size={28} />}
                  {category.includes('Specialized') && <Award className="text-pink-400" size={28} />}
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <span key={skill} className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-4 glass-dark pt-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 gradient-text">
            Honors & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass rounded-xl p-6 flex items-center gap-4 hover-lift group">
                <Award className="text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <span className="text-gray-200 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 gradient-text">
            Let's Connect
          </h2>
          <p className="text-2xl text-gray-300 mb-16 leading-relaxed">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <a href="mailto:emanaftab2022@gmail.com" className="glass rounded-2xl p-8 hover-lift group">
              <Mail className="text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold text-white mb-3 text-lg">Email</h3>
              <p className="text-gray-400 text-sm font-mono">emanaftab2022@gmail.com</p>
            </a>
            
            <a href="tel:+36202526795" className="glass rounded-2xl p-8 hover-lift group">
              <Phone className="text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold text-white mb-3 text-lg">Phone</h3>
              <p className="text-gray-400 text-sm font-mono">+36 20 252 6795</p>
            </a>
            
            <a href="https://github.com/muhammademanaftab" className="glass rounded-2xl p-8 hover-lift group">
              <Github className="text-gray-400 mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold text-white mb-3 text-lg">GitHub</h3>
              <p className="text-gray-400 text-sm font-mono">muhammademanaftab</p>
            </a>
            
            <a href="https://linkedin.com/in/muhammademanaftab" className="glass rounded-2xl p-8 hover-lift group">
              <Linkedin className="text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold text-white mb-3 text-lg">LinkedIn</h3>
              <p className="text-gray-400 text-sm font-mono">muhammademanaftab</p>
            </a>
          </div>

          <div className="flex justify-center">
            <a 
              href="/resume.pdf" 
              download="Muhammad_Eman_Aftab_Resume.pdf"
              className="btn-primary flex items-center gap-4 text-lg px-10 py-4"
            >
              <Download size={24} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 glass-dark">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 font-mono">
            © 2025 Muhammad Eman Aftab. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;