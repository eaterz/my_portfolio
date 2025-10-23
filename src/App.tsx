import { useState } from 'react';
import { Github, Mail, ExternalLink, Menu, X, Phone, Code2, Briefcase } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  image: string;
}

interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  profileImage: string;
  projects: Project[];
  skills: string[];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const portfolioData: PortfolioData = {
    name: "Ruslans Muraško",
    title: "Full Stack Developer",
    bio: "Es esmu aizrautīgs programmētājs, kas specializējas modernās web tehnoloģijās. Man patīk veidot lietotājam draudzīgas un efektīvas aplikācijas.",
    email: "muraskoruslans@gmail.com",
    phone: "+371 28710408",
    github: "https://github.com/eaterz",
    profileImage: "/profile.jpg",

    projects: [
      {
        title: "SportMatch sporta iepazīšanās platforma",
        description: "Iepazīšanās platforma lai meklēt sporta partnerus",
        tech: ["React", "Node.js", "TypeScript", "Laravel", "Pusher","Tailwind CSS","SQLite"],
        github: "https://github.com/eaterz/SportMatch",
        demo: "https://sportmatch.id.lv/",
        image: "/attēls-1.png"
      },
      {
        title: "Football Market",
        description: "Futbolu ekipējuma internetveikals",
        tech: ["React", "Node.js", "TypeScript", "Laravel", "Tailwind CSS", "MySQL"],
        github: "https://github.com/eaterz/F_Market",
        demo: null,
        image: "/attēls-2.png"
      },
      {
        title: "Hotel Booking App",
        description: "Vieglā hotelu rezervēšanas platforma",
        tech: ["Laravel", "Tailwind CSS", "MySQL"],
        github: "https://github.com/eaterz/hotel",
        demo: null,
        image: "/attēls-3.png"
      },
    ],

    skills: [
      "JavaScript", "React", "Node.js", "TypeScript",
      "Tailwind CSS", "Git", "REST APIs", "Docker", "SQL", "Pusher"
    ]
  };

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
      <div className="min-h-screen bg-slate-50">
        {/* Navigation */}
        <nav className="fixed w-full bg-slate-900 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white">
                  {portfolioData.name.charAt(0)}
                </div>
                <span className="text-white font-bold text-xl hidden sm:block">
                  {portfolioData.name}
                </span>
              </div>

              <div className="hidden md:flex gap-1">
                <button onClick={() => scrollToSection('home')} className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">Sākums</button>
                <button onClick={() => scrollToSection('projects')} className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">Projekti</button>
                <button onClick={() => scrollToSection('skills')} className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">Prasmes</button>
                <button onClick={() => scrollToSection('contact')} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition font-medium">Kontakti</button>
              </div>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden mt-4 pb-2 space-y-2">
                  <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition">Sākums</button>
                  <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition">Projekti</button>
                  <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition">Prasmes</button>
                  <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition">Kontakti</button>
                </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 text-sm font-medium">Pieejams projektiem</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {portfolioData.name}
                </h1>

                <p className="text-2xl text-emerald-400 mb-6 font-medium">
                  {portfolioData.title}
                </p>

                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {portfolioData.bio}
                </p>

                <div className="flex gap-3 mb-8">
                  <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition">
                    <Github className="text-white" size={22} />
                  </a>
                  <a href={`mailto:${portfolioData.email}`}
                     className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition">
                    <Mail className="text-white" size={22} />
                  </a>
                  <a href={`tel:${portfolioData.phone}`}
                     className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition">
                    <Phone className="text-white" size={22} />
                  </a>
                </div>

                <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition shadow-lg shadow-emerald-500/30"
                >
                  Apskatīt projektus
                </button>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-slate-700 shadow-2xl">
                    <img
                        src={portfolioData.profileImage}
                        alt={portfolioData.name}
                        className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="text-slate-700" size={32} />
              <h2 className="text-4xl font-bold text-slate-900">
                Projekti
              </h2>
            </div>
            <p className="text-slate-600 mb-12 text-lg">
              Mani jaunākie darbi un izstrādātās aplikācijas
            </p>

            <div className="space-y-8">
              {portfolioData.projects.map((project, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 h-64 md:h-auto overflow-hidden bg-slate-100">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>

                      <div className="md:col-span-3 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition">
                          {project.title}
                        </h3>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                                {tech}
                              </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                             className="flex items-center gap-2 px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition font-medium">
                            <Github size={18} />
                            GitHub
                          </a>
                          {project.demo && (
                              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                 className="flex items-center gap-2 px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-medium">
                                <ExternalLink size={18} />
                                Live Demo
                              </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Code2 className="text-slate-700" size={32} />
              <h2 className="text-4xl font-bold text-slate-900">
                Tehnoloģijas
              </h2>
            </div>
            <p className="text-slate-600 mb-12 text-lg">
              Rīki un valodas, ar kurām es strādāju
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {portfolioData.skills.map((skill, index) => (
                  <div
                      key={index}
                      onMouseEnter={() => setHoveredSkill(index)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`p-6 bg-white rounded-xl border-2 transition cursor-default ${
                          hoveredSkill === index
                              ? 'border-emerald-500 shadow-lg shadow-emerald-500/20 -translate-y-1'
                              : 'border-slate-200'
                      }`}
                  >
                    <p className="text-center font-semibold text-slate-800">{skill}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Sazināties
            </h2>
            <p className="text-slate-600 mb-12 text-lg">
              Esmu atvērts jaunām sadarbībām un projektiem
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a href={`mailto:${portfolioData.email}`} className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-lg transition group">
                <Mail className="text-emerald-500 mx-auto mb-3 group-hover:scale-110 transition" size={36} />
                <p className="text-sm text-slate-600 mb-1">E-pasts</p>
                <p className="text-slate-900 font-semibold break-all">{portfolioData.email}</p>
              </a>

              <a href={`tel:${portfolioData.phone}`} className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-lg transition group">
                <Phone className="text-emerald-500 mx-auto mb-3 group-hover:scale-110 transition" size={36} />
                <p className="text-sm text-slate-600 mb-1">Telefons</p>
                <p className="text-slate-900 font-semibold">{portfolioData.phone}</p>
              </a>

              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-lg transition group">
                <Github className="text-emerald-500 mx-auto mb-3 group-hover:scale-110 transition" size={36} />
                <p className="text-sm text-slate-600 mb-1">GitHub</p>
                <p className="text-slate-900 font-semibold">{portfolioData.github.replace('https://', '')}</p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-400">
              © 2025 {portfolioData.name}. Visas tiesības aizsargātas.
            </p>
          </div>
        </footer>
      </div>
  );
}

export default App;