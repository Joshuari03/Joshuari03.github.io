import { useEffect, useRef, useState } from 'react';
import { 
  Lightbulb, 
  Settings, 
  Zap, 
  Linkedin, 
  Github, 
  Mail, 
  ChevronRight,
  Cpu,
  Menu,
  X,
  ExternalLink,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-blue-darkest text-white overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-3' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-primary flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-space font-semibold text-lg hidden sm:block">Joshua Rizzello</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-dm text-sm text-gray-300 hover:text-white link-underline transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="/flashcards.html"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-primary/20 border border-blue-primary/40 text-blue-light hover:bg-blue-primary/30 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Flashcards</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass mt-3 mx-6 rounded-xl p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left font-dm text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.name}
                </button>
              ))}
              <a 
                href="/flashcards.html"
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-primary/20 border border-blue-primary/40 text-blue-light mt-2"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Flashcards</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 diagonal-stripes circuit-pattern"
      >
        {/* Background gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-primary/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-dark/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/30 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-light" />
              <span className="text-sm text-blue-light font-medium">Electrical Engineer</span>
            </div>

            <h1 className="font-space text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up stagger-1">
              Hi! I'm <span className="text-gradient">Joshua</span>
              <span className="inline-block ml-3 animate-float">👋</span>
            </h1>

            <p className="font-dm text-xl text-gray-400 max-w-lg animate-slide-up stagger-2">
              Passionate about <span className="text-blue-light">electric motors</span>, 
              <span className="text-blue-light"> smart grids</span>, and 
              <span className="text-blue-light"> sustainable transport</span>. 
              Building the future of electrical engineering.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="magnetic-btn px-8 py-6 bg-blue-primary hover:bg-blue-dark text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                Get in Touch
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="magnetic-btn px-8 py-6 border-blue-primary/50 text-white hover:bg-blue-primary/10 rounded-xl transition-all duration-300"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-slide-up stagger-4">
              <a 
                href="https://www.linkedin.com/in/joshua-rizzello-bb5857234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-blue-primary/10 border border-blue-primary/30 flex items-center justify-center hover:bg-blue-primary/20 hover:border-blue-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-blue-light" />
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-blue-primary/10 border border-blue-primary/30 flex items-center justify-center hover:bg-blue-primary/20 hover:border-blue-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-blue-light" />
              </a>
              <a 
                href="mailto:joshua.rizzello@email.com"
                className="w-12 h-12 rounded-xl bg-blue-primary/10 border border-blue-primary/30 flex items-center justify-center hover:bg-blue-primary/20 hover:border-blue-primary/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-blue-light" />
              </a>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in stagger-3">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-blue-primary/30 rounded-3xl blur-[60px] scale-90" />
              
              {/* Image container with 3D tilt */}
              <div className="relative group perspective-1000">
                <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden border-2 border-blue-primary/30 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src="/hero-portrait.jpg" 
                    alt="Joshua Rizzello"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-darkest/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 px-6 py-3 glass rounded-xl animate-float">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-primary" />
                    <span className="font-space font-semibold text-sm">EE Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/30 text-blue-light text-sm font-medium mb-6">
              About Me
            </span>
            <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">
              Driven by <span className="text-gradient">Curiosity</span>
            </h2>
            <p className="font-dm text-lg text-gray-400 max-w-2xl mx-auto">
              I'm a technology enthusiast with a deep passion for electricity-related technologies 
              and their efficiency. I would call myself "curious by nature" because I've always 
              loved learning how things work.
            </p>
          </div>

          {/* Interest Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-lift glass rounded-2xl p-8 group">
              <div className="w-16 h-16 rounded-xl bg-blue-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-blue-primary" />
              </div>
              <h3 className="font-space text-xl font-semibold mb-4">Curious by Nature</h3>
              <p className="font-dm text-gray-400 leading-relaxed">
                I've always loved learning how things work. From taking apart gadgets as a child 
                to studying complex electrical systems today, my curiosity drives me to understand 
                the world around me.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-lift glass rounded-2xl p-8 group md:translate-y-10">
              <div className="w-16 h-16 rounded-xl bg-blue-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-blue-primary" />
              </div>
              <h3 className="font-space text-xl font-semibold mb-4">Electric Motors & Design</h3>
              <p className="font-dm text-gray-400 leading-relaxed">
                Fascinated by electric motor design and control systems. I enjoy exploring motor 
                dynamics, control algorithms, and optimizing performance for various applications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-lift glass rounded-2xl p-8 group md:translate-y-20">
              <div className="w-16 h-16 rounded-xl bg-blue-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-blue-primary" />
              </div>
              <h3 className="font-space text-xl font-semibold mb-4">Smart Grids & Transport</h3>
              <p className="font-dm text-gray-400 leading-relaxed">
                Passionate about smart grid technologies and electric transportation. I believe 
                sustainable energy solutions are key to our future, and I'm eager to contribute 
                to this transformation.
              </p>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="mt-20 flex flex-wrap justify-center gap-3">
            {['MATLAB', 'Simulink', 'Arduino', 'Python', 'C/C++', 'PCB Design', 'Control Systems', 'Power Electronics'].map((skill, index) => (
              <span 
                key={skill}
                className="px-5 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/30 text-blue-light text-sm font-medium hover:bg-blue-primary/20 hover:border-blue-primary/50 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 diagonal-stripes">
        {/* Background gradient */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/30 text-blue-light text-sm font-medium mb-6">
              Portfolio
            </span>
            <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="font-dm text-lg text-gray-400 max-w-2xl mx-auto">
              A collection of my work in electrical engineering, from motor control systems 
              to smart grid monitoring solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative glass rounded-2xl overflow-hidden card-lift">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/project-motor-controller.jpg" 
                  alt="Electric Motor Controller"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-darkest via-blue-darkest/50 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">Arduino</span>
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">C++</span>
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">PID Control</span>
                </div>
                <h3 className="font-space text-2xl font-semibold mb-3 group-hover:text-blue-light transition-colors">
                  Electric Motor Controller
                </h3>
                <p className="font-dm text-gray-400 mb-6">
                  A brushless DC motor control system with PID feedback control, speed regulation, 
                  and real-time monitoring capabilities. Features PWM signal generation and encoder feedback.
                </p>
                <button className="flex items-center gap-2 text-blue-light font-medium hover:gap-3 transition-all">
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative glass rounded-2xl overflow-hidden card-lift lg:translate-y-10">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/project-smart-grid.jpg" 
                  alt="Smart Grid Monitor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-darkest via-blue-darkest/50 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">Python</span>
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">IoT</span>
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">MQTT</span>
                </div>
                <h3 className="font-space text-2xl font-semibold mb-3 group-hover:text-blue-light transition-colors">
                  Smart Grid Monitor
                </h3>
                <p className="font-dm text-gray-400 mb-6">
                  An IoT-based power distribution monitoring system that tracks voltage, current, 
                  and power factor across multiple nodes. Includes real-time dashboard and alert system.
                </p>
                <button className="flex items-center gap-2 text-blue-light font-medium hover:gap-3 transition-all">
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative glass rounded-2xl overflow-hidden card-lift">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/project-ev-battery.jpg" 
                  alt="EV Battery Management"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-darkest via-blue-darkest/50 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">MATLAB</span>
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">Simulink</span>
                  <span className="px-3 py-1 rounded-full bg-blue-primary/20 text-blue-light text-xs font-medium">BMS</span>
                </div>
                <h3 className="font-space text-2xl font-semibold mb-3 group-hover:text-blue-light transition-colors">
                  EV Battery Management System
                </h3>
                <p className="font-dm text-gray-400 mb-6">
                  A comprehensive battery management system simulation for electric vehicles, 
                  featuring cell balancing, SOC estimation, and thermal management algorithms.
                </p>
                <button className="flex items-center gap-2 text-blue-light font-medium hover:gap-3 transition-all">
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* More Projects Card */}
            <div className="flex items-center justify-center glass rounded-2xl p-8 lg:translate-y-10 min-h-[400px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-blue-primary" />
                </div>
                <h3 className="font-space text-2xl font-semibold mb-4">More Coming Soon</h3>
                <p className="font-dm text-gray-400 mb-6 max-w-sm">
                  I'm constantly working on new projects. Check back soon for updates on my latest work 
                  in electrical engineering and sustainable technology.
                </p>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-primary/20 border border-blue-primary/40 text-blue-light hover:bg-blue-primary/30 transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>Follow on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        {/* Background gradient */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/30 text-blue-light text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="font-dm text-lg text-gray-400 max-w-xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or simply chat about electrical engineering and technology.
            </p>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-dm text-sm text-gray-400">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="bg-blue-darkest/50 border-blue-primary/30 focus:border-blue-primary text-white placeholder:text-gray-500 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-dm text-sm text-gray-400">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-blue-darkest/50 border-blue-primary/30 focus:border-blue-primary text-white placeholder:text-gray-500 h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-dm text-sm text-gray-400">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="bg-blue-darkest/50 border-blue-primary/30 focus:border-blue-primary text-white placeholder:text-gray-500 resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full py-6 bg-blue-primary hover:bg-blue-dark text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-blue-primary/20">
              <div className="grid md:grid-cols-3 gap-8">
                <a 
                  href="https://www.linkedin.com/in/joshua-rizzello-bb5857234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-primary/10 flex items-center justify-center mb-4 group-hover:bg-blue-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-primary" />
                  </div>
                  <span className="font-space font-medium text-white group-hover:text-blue-light transition-colors">LinkedIn</span>
                  <span className="font-dm text-sm text-gray-500 mt-1">Connect with me</span>
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-primary/10 flex items-center justify-center mb-4 group-hover:bg-blue-primary/20 transition-colors">
                    <Github className="w-6 h-6 text-blue-primary" />
                  </div>
                  <span className="font-space font-medium text-white group-hover:text-blue-light transition-colors">GitHub</span>
                  <span className="font-dm text-sm text-gray-500 mt-1">View my code</span>
                </a>
                <a 
                  href="mailto:joshua.rizzello@email.com"
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-primary/10 flex items-center justify-center mb-4 group-hover:bg-blue-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-blue-primary" />
                  </div>
                  <span className="font-space font-medium text-white group-hover:text-blue-light transition-colors">Email</span>
                  <span className="font-dm text-sm text-gray-500 mt-1">Send a message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-blue-primary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-primary flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-space font-semibold text-lg">Joshua Rizzello</span>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-dm text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a 
                href="/flashcards.html"
                className="font-dm text-sm text-blue-light hover:text-white transition-colors"
              >
                Flashcards
              </a>
            </div>

            {/* Copyright */}
            <div className="font-dm text-sm text-gray-500">
              © 2024 Joshua Rizzello. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
