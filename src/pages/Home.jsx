import React from 'react'
import resume from "../assets/Arvind_Backend.pdf";
import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Download, Award, Briefcase, Code, GraduationCap, ExternalLink, Star, User } from 'lucide-react';
import pp from '../assets/pp.jpg';

const Home = () => {

    const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };


const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Arvind_Backend.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const skills = {
    'Machine Learning & AI': ['Machine Learning', 'Computer Vision', 'CNN', 'Data Analysis', 'Power BI', 'Predictive Models'],
    'AR/VR & Game Development': ['Unity Development', 'Augmented Reality', 'Virtual Reality', 'WebAR', '3D.js', 'Blender', 'Animation'],
    'Full-Stack Development': ['Node.js', 'Express', 'TypeScript', 'HTML', 'CSS', 'Git'],
    'Mobile Development': ['Flutter', 'Dart', 'Android Development', 'API Integration'],
    'Cloud & Database': ['Azure', 'AWS', 'MongoDB', 'Database Management'],
    'Design & Languages': ['UI/UX Development', 'Python', 'Java', 'C Programming', 'C# Development', 'DSA']
  };

  const achievements = [
    {
      title: 'FICCI BAF AWARD 2025',
      subtitle: 'Winner in XR Category',
      description: 'Mahakumbh in Virtual Reality and Mechanical Lab AR',
      highlight: 'Winner'
    },
    {
      title: 'Infosys Global Hackathon 2025',
      subtitle: '2nd Runner Up',
      description: 'Developed Skill Adaptive enhancer Using Web3, AR, VR, AI',
      highlight: '₹2,00,000'
    },
    {
      title: 'DAY ZERO HACKATHON 2025',
      subtitle: 'Runners Up',
      description: 'Developed a Meta Character for Educational Purpose using AR and AI',
      highlight: 'Runners Up'
    },
    {
      title: 'IEEE SSH-2024 HACKATHON',
      subtitle: 'Team Leader',
      description: 'AR/VR/AI Real Estate Project with 3D Virtual tours and real-time chat in VR',
      highlight: 'Runners * $500 Prize'
      
    }
  ];

  const projects = [
    {
      title: 'Exlity Application',
      category: 'Flutter Development',
      description: 'Job seeking application connecting job providers and seekers with Azure, MongoDB, Express, Flutter, and Postman API integrations.',
      tech: ['Flutter', 'Dart', 'Azure', 'MongoDB', 'Express', 'API Integration'],
      status: 'Market Ready',
      statusColor: 'bg-green-500'
    },
    {
      title: 'Utilsens Traffic Sens',
      category: 'Multi-Platform',
      description: 'Traffic sensing development using Unity and Flutter integration for real-time traffic monitoring and analysis.',
      tech: ['Unity', 'Flutter', 'Node.js', 'Real-time Analytics'],
      status: 'Deployed',
      statusColor: 'bg-blue-500'
    },
    {
      title: 'AR/VR Real Estate Platform',
      category: 'AR/VR Development',
      description: '3D Virtual tours with real-time customization, furniture changes, wall colors, and VR chat with language customization.',
      tech: ['Unity', 'AR/VR', 'Real-time Chat', '3D Modeling'],
      status: 'IEEE Selected',
      statusColor: 'bg-purple-500'
    },
    {
      title: 'First Person Boxing Game',
      category: 'Game Development',
      description: 'Complete boxing game experience launched on Steam with immersive gameplay and professional polish.',
      tech: ['Unity', 'C#', 'Steam Integration', 'Game Design'],
      status: 'Live on Steam',
      statusColor: 'bg-orange-500'
    },
    {
      title: 'ONGC Predictive Models',
      category: 'Machine Learning',
      description: 'Developed predictive models for development and data analysis in the oil and gas sector.',
      tech: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Modeling'],
      status: 'Corporate Project',
      statusColor: 'bg-indigo-500'
    },
    {
      title: 'AR Virtual Garden',
      category: 'AR/VR Development',
      description: 'AR/VR Virtual Garden with real-time AI assistance, selected for best prototype in IEEE Student Innovation.',
      tech: ['AR/VR', 'AI Integration', 'Real-time Interaction'],
      status: 'IEEE Best Prototype',
      statusColor: 'bg-emerald-500'
    }
  ];

  const experience = [
    {
      title: 'Flutter Developer',
      company: 'Codegress',
      type: 'Full Time Intern',
      location: 'Remote',
      duration: 'Currently Working',
      description: 'Develop Flutter Applications with Authentication, Full Stack development, Backend-Frontend integration and User Interaction enhancement.',
      current: true
    },
    {
      title: 'Data Science Intern',
      company: 'ONGC',
      type: 'Full Time Intern',
      location: 'Vadodara Campus',
      duration: '1 Month',
      description: 'Handled Database management, developed Predictive Models and performed Data Analysis in the Data Science Department.',
      current: false
    },
    {
      title: 'Backend Developer',
      company: 'Codegress',
      type: 'Intern',
      location: 'Remote',
      duration: '3 Months',
      description: 'Developed and maintained backend APIs for Android applications, integrated secure authentication systems, optimized database queries.',
      current: false
    },
    {
      title: 'Game Developer',
      company: 'Codegress',
      type: 'Intern',
      location: 'Remote',
      duration: '8 Months',
      description: 'Designed, coded, and tested core game mechanics, levels, and player interactions, ensuring smooth and immersive gameplay.',
      current: false
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{background: 'linear-gradient(135deg, #0f172a 0%, #030c23ff 50%, #312e81 100%)'}}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Arvind Kumar
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'achievements', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10">
              {['home', 'about', 'skills', 'projects', 'achievements', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Photo */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                    <div className="text-center">
                      {/* <div className="w-20 h-20 bg-blue-400/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <User size={40} className="text-blue-400" />
                      </div>
                      <p className="text-sm text-gray-300">Your Photo Here</p>
                      <p className="text-xs text-gray-500 mt-2">Upload your image to replace this placeholder</p> */}

                      <img src={pp} alt="pic" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Arvind Kumar Sahu
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-8">
                Full-Stack Developer | AR/VR Specialist | Machine Learning Engineer
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5 rounded-lg">
                  <div className="bg-black/50 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-yellow-400">₹2,00,000</span>
                    <span className="ml-2 text-sm">Infosys Hackathon Prize</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-0.5 rounded-lg">
                  <div className="bg-black/50 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-cyan-400">8.27</span>
                    <span className="ml-2 text-sm">CGPA</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-0.5 rounded-lg">
                  <div className="bg-black/50 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-green-400">10+</span>
                    <span className="ml-2 text-sm">Projects</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
                >
                  View Projects
                </button>
                <button 
                  onClick={downloadResume}
                  className="px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm a passionate Full-Stack Developer specializing in AR/VR technologies and Machine Learning. 
                Currently pursuing Computer Science at NIST University with a stellar 8.27 CGPA, I've won multiple 
                hackathons and built innovative solutions across diverse domains.
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-400">4+</div>
                  <div className="text-sm text-gray-400">Major Awards</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Briefcase className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">4</div>
                  <div className="text-sm text-gray-400">Internships</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <GraduationCap className="text-blue-400" size={24} />
                <div>
                  <div className="font-semibold">Bachelor of Technology</div>
                  <div className="text-gray-400">Computer Science & Engineering</div>
                  <div className="text-sm text-gray-500">NIST University, Berhampur (2022-2026)</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <MapPin className="text-green-400" size={24} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-400">Dhanbad, Jharkhand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-blue-400 text-sm">{project.category}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs ${project.statusColor} text-white`}>
                    {project.status}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/20 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <ExternalLink size={16} />
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Award className="text-yellow-400" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold">{achievement.title}</h3>
                      <p className="text-blue-400">{achievement.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm border border-yellow-500/30">
                    {achievement.highlight}
                  </div>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    {exp.current && (
                      <div className="px-2 py-1 bg-green-500 rounded-full text-xs animate-pulse">
                        Current
                      </div>
                    )}
                    <span className="text-gray-400 text-sm">{exp.duration}</span>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's connect and explore opportunities to collaborate on innovative projects
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:arvindsahu9149@gmail.com" className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all group">
              <Mail className="text-blue-400 group-hover:scale-110 transition-transform" size={32} />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-400 text-sm">arvindsahu9149@gmail.com</div>
              </div>
            </a>
            
            <a href="tel:+917992230572" className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all group">
              <Phone className="text-green-400 group-hover:scale-110 transition-transform" size={32} />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-gray-400 text-sm">+91 7992230572</div>
              </div>
            </a>
            
            <a href="#" className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all group">
              <User className="text-blue-400 group-hover:scale-110 transition-transform" size={32} />
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-gray-400 text-sm">Connect with me</div>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105">
              Send Email
            </button>
            <button 
              onClick={downloadResume}
              className="px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
            <button
              onClick={() => window.open("https://www.linkedin.com/in/arvind-kumar-sahu-380498257/", "_blank")}
              className="px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2"
             >
              <User size={20} />
              LinkedIn Profile
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Arvind Kumar Sahu. Built with React and passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home