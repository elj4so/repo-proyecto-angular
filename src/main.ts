import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="landing-page">
      <!-- Navigation -->
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-brand">
            <h2>Proyecto Angular</h2>
          </div>
          <ul class="nav-menu">
            <li><a href="#home" (click)="scrollTo('home')">Home</a></li>
            <li><a href="#features" (click)="scrollTo('features')">Features</a></li>
            <li><a href="#about" (click)="scrollTo('about')">About</a></li>
            <li><a href="#contact" (click)="scrollTo('contact')">Contact</a></li>
          </ul>
          <button class="nav-toggle" (click)="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">SOLIS GARCIA JASIEL</h1>
            <p class="hero-subtitle">
              Proyecto creado en Angular.
            </p>
            <div class="hero-buttons">
              <button class="btn btn-primary" (click)="scrollTo('contact')">Get Started</button>
              <button class="btn btn-outline" (click)="scrollTo('features')">Junio 23</button>
            </div>
          </div>
          <div class="hero-image">
            <div class="hero-graphic">
              <div class="floating-card card-1"></div>
              <div class="floating-card card-2"></div>
              <div class="floating-card card-3"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="features">
        <div class="container">
          <div class="section-header">
            <h2>Why Choose Us</h2>
            <p>Discover the powerful features that make us the perfect choice for your next project</p>
          </div>
          <div class="features-grid">
            <div class="feature-card" *ngFor="let feature of features">
              <div class="feature-icon" [style.background-color]="feature.color">
                <span>{{ feature.icon }}</span>
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>About Our Mission</h2>
              <p>
                We are passionate about creating digital experiences that matter. Our team combines 
                technical expertise with creative vision to deliver solutions that not only meet your 
                business goals but exceed your expectations.
              </p>
              <p>
                With years of experience in the industry, we understand the challenges businesses face 
                in the digital landscape. That's why we focus on building scalable, maintainable, and 
                user-friendly applications that grow with your business.
              </p>
              <div class="stats">
                <div class="stat">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div class="stat">
                  <h3>98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div class="stat">
                  <h3>24/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
            <div class="about-image">
              <div class="image-placeholder">
                <span>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to start your next project? We'd love to hear from you.</p>
          </div>
          <div class="contact-content">
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>hello&#64;boltlab.com</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  [(ngModel)]="formData.name" 
                  name="name"
                  required
                >
              </div>
              <div class="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  [(ngModel)]="formData.email" 
                  name="email"
                  required
                >
              </div>
              <div class="form-group">
                <textarea 
                  placeholder="Your Message" 
                  [(ngModel)]="formData.message" 
                  name="message"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-brand">
              <h3>Proyecto Angular</h3>
              <p>Building the future, one project at a time.</p>
            </div>
            <div class="footer-links">
              <div class="footer-section">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#features">Services</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h4>Follow Us</h4>
                <ul>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2025 BoltLab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class App {
  features = [
    {
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Lightning-fast applications built with modern technologies and optimized for speed.',
      color: '#3B82F6'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures and reliable infrastructure you can trust.',
      color: '#8B5CF6'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive designs that look perfect on any device, from mobile to desktop.',
      color: '#06B6D4'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning user interfaces that provide exceptional user experiences.',
      color: '#10B981'
    },
    {
      icon: '🚀',
      title: 'Scalable Solutions',
      description: 'Applications that grow with your business and adapt to changing needs.',
      color: '#F59E0B'
    },
    {
      icon: '🔧',
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your applications running smoothly.',
      color: '#EF4444'
    }
  ];

  formData = {
    name: '',
    email: '',
    message: ''
  };

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu?.classList.toggle('active');
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.formData = { name: '', email: '', message: '' };
  }
}

bootstrapApplication(App);