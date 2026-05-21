import React, { useState } from 'react';
import { ArrowRight, Code2, Cuboid, Film, Mail, MapPin, Play, Sparkles, Download, ExternalLink, Menu, X } from 'lucide-react';
import { profile, services, projects, skills, showreels } from './data.js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ['Home', 'About', 'Services', 'Projects', 'Showreel', 'Contact'];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}>NS<span>.</span></a>

      <nav className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">Hire Me</a>

      <button
        className="hamburger-btn"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <p className="eyebrow"><Sparkles size={16} /> Available for Frontend, 3D Web & Creative Tech roles</p>
        <h1>{profile.title}</h1>
        <p className="hero-text">I build interactive web applications, real-time 3D experiences and visually rich digital products using React, Three.js, WebGL, GSAP and modern frontend technologies.</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">View Projects <ArrowRight size={18} /></a>
          <a className="btn secondary" href={profile.resume} target="_blank" rel="noreferrer">Download Resume <Download size={18} /></a>
        </div>
        <div className="stats">
          <div><strong>11+</strong><span>Years Experience</span></div>
          <div><strong>20+</strong><span>Film/VFX Projects</span></div>
          <div><strong>100+</strong><span>Students Mentored</span></div>
        </div>
      </div>
      <div className="hero-visual" aria-label="3D creative frontend visual">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="glass-card floating-card top"><Code2 /> React · WebGL · GSAP</div>
        <div className="cube"><span></span><span></span><span></span></div>
        <div className="glass-card floating-card bottom"><Cuboid /> Real-time 3D Experiences</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section two-col">
      <div>
        <p className="section-kicker">About Me</p>
        <h2>Engineering precision with cinematic visual storytelling.</h2>
      </div>
      <div className="body-copy">
        <p>I am a Creative Frontend Engineer based in Bengaluru, India, specializing in React, Three.js, WebGL, React Three Fiber and GSAP.</p>
        <p>My work blends frontend engineering with 3D graphics, animation and visual storytelling. I have built responsive web applications, real-time 3D product configurators, desktop learning platforms and visual effects for regional feature films and commercial projects.</p>
        <p>Before working independently, I served as a Senior Web Development Faculty at Arena Animation, Raipur, where I trained 100+ students in HTML, CSS, JavaScript, PHP, MySQL and responsive web development.</p>
        <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <p className="section-kicker">Services</p>
      <h2>What I can build for you</h2>
      <div className="card-grid services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span className="number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-kicker">Selected Projects</p>
      <h2>Production-ready work across frontend, 3D web and VFX.</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <p className="project-stack">{project.stack}</p>
              <h3>{project.title}</h3>
              <p className="client">Client: {project.client}</p>
              <p>{project.description}</p>
            </div>
            <ul>
              {project.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function VideoCard({ reel }) {
  const isExternal = reel.video.startsWith('http');

  return (
    <article className="video-card">
      <div className="video-frame">
        {isExternal ? (
          <a href={reel.video} target="_blank" rel="noreferrer" className="video-placeholder">
            <Play size={42} />
            <span>Watch Video</span>
            <ExternalLink size={18} />
          </a>
        ) : (
          <video controls poster={reel.poster} preload="metadata">
            <source src={reel.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="video-info">
        <p>{reel.category}</p>
        <h3>{reel.title}</h3>
        <span>{reel.description}</span>
      </div>
    </article>
  );
}

function Showreel() {
  return (
    <section id="showreel" className="section showreel-section">
      <div className="showreel-copy">
        <p className="section-kicker">Showreel</p>
        <h2>Creative Technology Showreel</h2>
        <p>A visual showcase of my work across interactive websites, real-time 3D experiences, motion graphics, VFX and cinematic digital storytelling.</p>
        <div className="reel-tags">
          {['3D Web', 'Frontend UI', 'Product Configurator', 'Motion Graphics', 'Film VFX'].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>

      <div className="video-grid">
        {showreels.map((reel) => <VideoCard key={reel.title} reel={reel} />)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="section-kicker">Contact</p>
        <h2>Let’s build something interactive.</h2>
      </div>
      <div className="contact-card">
        <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
        <p><MapPin size={18} /> {profile.location}</p>
        <p>Availability: Immediate</p>
        <p>Work Mode: On-site · Remote</p>
        <a className="btn primary full" href={`mailto:${profile.email}`}>Send Message <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}

function Footer() {
  return <footer>© {new Date().getFullYear()} ScenovaFX</footer>;
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Showreel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
