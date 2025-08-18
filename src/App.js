import {
  ArrowRight,
  CheckCircle,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import React from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("about");

  const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"];

  // --- Scroll Spy Logic ---
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.toLowerCase())
      );
      const scrollPosition = window.scrollY + 150; // Offset for better accuracy

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Data extracted and enhanced from your resume ---
  const portfolioData = {
    name: "Akash Bhatt",
    title: "Senior Software Engineer",
    summary:
      "A Senior Software Engineer with over 4 years of experience specializing in frontend development. I have a proven track record of designing, developing, and deploying highly responsive, scalable, and user-centric web applications. My expertise lies in translating complex business requirements and design wireframes into high-quality, maintainable code using modern JavaScript frameworks like React.",
    contact: {
      email: "akashbhattq1@gmail.com",
      linkedin: "https://www.linkedin.com/in/akashbhatt123/",
      github: "https://github.com/iamakashbhatt",
      resumeUrl:
        "https://drive.google.com/file/d/1O-1b8-xXFw6R1SpAiEweCr3vaqRIcxB3/view?usp=sharing", 
    },
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Zustand",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Ant Design",
      "Bootstrap",
      "REST APIs",
      "Git & GitHub",
      "Jira",
      "Postman",
      "Figma",
    ],
    experience: [
      {
        role: "Sr. Software Developer",
        company: "Ogpm India Pvt Limited",
        period: "Aug 2024 - Present",
        description:
          "As a senior member of the frontend team, I architect and develop critical user interfaces for enterprise-level applications in the oil and petroleum sector. My role involves translating complex business logic into intuitive and performant user experiences.",
        keyAchievements: [
          "Engineered complex data management interfaces for vendors, manufacturers, and customer interactions.",
          "Implemented robust solutions for handling large-scale product line uploads and data synchronization.",
          "Optimized application performance and state management using Zustand and React best practices.",
          "Collaborated closely with stakeholders to understand business requirements and deliver high-impact features.",
        ],
      },
      {
        role: "Software Developer",
        company: "Softuvo Solutions Pvt. Ltd.",
        period: "Aug 2022 - Jul 2024",
        description:
          "Developed and maintained frontend architecture for a diverse range of client projects, from AI-powered platforms to SaaS products. I was responsible for the full development lifecycle of UI components, from concept to deployment.",
        keyAchievements: [
          "Spearheaded the frontend development of 'Hirebird', an innovative AI-powered job search platform.",
          "Architected a scalable Point-of-Sale (POS) application with multi-user login and persistent state using Redux Persist.",
          "Built the next-generation UI for a client's Warehouse Management System, resulting in a 20% reduction in user-reported bugs.",
          "Implemented data visualization dashboards for a CRM application using Recharts.js to track sales analytics.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "NOI Technologies LLC",
        period: "Apr 2021 - Jul 2022",
        description:
          "Translated UI/UX designs and wireframes into high-quality, responsive code. My primary focus was on seamless API integration and enhancing the overall quality and stability of the codebase.",
        keyAchievements: [
          "Served as the primary developer for integrating complex REST APIs for a handheld scanner application.",
          "Improved code quality and application stability through meticulous debugging and refactoring.",
          "Worked closely with designers and backend developers to ensure pixel-perfect implementation of new features.",
          "Ensured a consistent and intuitive user experience across all developed interfaces.",
        ],
      },
    ],
    projects: [
      {
        title: "RFQ Gun - AI-Powered Procurement Solution",
        description:
          "Led frontend development for an innovative platform that revolutionizes how businesses manage bulk RFQs. I built the UI that allows for automated data extraction from documents, intelligent supplier assignment, and accelerated procurement lifecycles, streamlining complex workflows for enterprise clients.",
        tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "AI Integration"],
      },
      {
        title: "Enterprise Point-of-Sale (POS) System",
        description:
          "Solely developed the frontend for a complex POS system. My work involved implementing secure payment gateway integrations, a multi-level user hierarchy (Superadmin, Owner, Manager), and robust state management with Redux Toolkit. This project showcased my ability to handle scalable architecture and role-based access control.",
        tech: [
          "React.js",
          "Redux Toolkit",
          "Payment Gateway APIs",
          "Bootstrap",
        ],
      },
      {
        title: "Agency CRM & Sales Analytics Platform",
        description:
          "Developed and maintained a feature-rich CRM application. I implemented a comprehensive sales module to track and visualize product sales data using Recharts.js. Also engineered a multi-portal authentication system for different user roles (Admin, Client), ensuring secure and segregated access.",
        tech: ["React.js", "Recharts.js", "Redux Persist", "Figma"],
      },
      {
        title: "Smart Commerce - SaaS WMS",
        description:
          "Built the next-generation user interface for a client's warehouse management system. My focus was on improving the user experience, adding new features, and significantly enhancing the stability and performance of the application, leading to a 20% reduction in reported bugs.",
        tech: ["React.js", "Ant Design", "Redux Toolkit", "SaaS"],
      },
    ],
  };

  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center py-6 sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm">
          <a
            href="#about"
            className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {portfolioData.name}
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center">
            <nav className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-medium transition-colors duration-300 ${
                    activeSection === link.toLowerCase()
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        )}

        <main className="pt-16 md:pt-24">
          <section id="about" className="mb-24 md:mb-36">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {portfolioData.title}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mb-8">
              {portfolioData.summary}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Get In Touch <Mail className="ml-2" size={20} />
              </a>
              <div className="flex space-x-4">
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>
          </section>

          <section id="skills" className="mb-24 md:mb-36">
            <h2 className="text-3xl font-bold text-white mb-8">
              Core Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 text-cyan-400 text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="experience" className="mb-24 md:mb-36">
            <h2 className="text-3xl font-bold text-white mb-12">
              Professional Experience
            </h2>
            <div className="relative border-l-2 border-slate-700 pl-8 space-y-16">
              <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1 ring-8 ring-slate-900"></div>
              {portfolioData.experience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[39px] top-1 ring-8 ring-slate-900"></div>
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  <p className="text-cyan-400 font-semibold text-lg mb-1">
                    {job.company}
                  </p>
                  <p className="text-slate-400 text-sm mb-4">{job.period}</p>
                  <p className="text-slate-300 max-w-2xl mb-4">
                    {job.description}
                  </p>
                  <ul className="space-y-2">
                    {job.keyAchievements.map((ach, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-cyan-400 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="mb-24 md:mb-36">
            <h2 className="text-3xl font-bold text-white mb-12">
              Featured Enterprise Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 flex flex-col"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 flex-grow mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium bg-slate-700 text-cyan-300 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="group text-cyan-400 font-semibold inline-flex items-center mt-auto"
                  >
                    <span>View Details</span>
                    <ArrowRight
                      className="ml-2 transition-transform group-hover:translate-x-1"
                      size={16}
                    />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="text-center py-24">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              I'm currently open to new opportunities and collaborations. If you
              have a project in mind or just want to connect, feel free to reach
              out.
            </p>
            <div className="flex justify-center items-center flex-wrap gap-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center bg-cyan-500 text-slate-900 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Contact Me
              </a>
              <a
                href={portfolioData.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 font-bold py-4 px-8 rounded-lg border-2 border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Resume <FileText className="ml-2" size={20} />
              </a>
            </div>
          </section>
        </main>

        <footer className="text-center py-6 border-t border-slate-800">
          <p className="text-slate-500">
            Designed & Built by {portfolioData.name}
          </p>
        </footer>
      </div>
    </div>
  );
};
export default App;
