import React from 'react';
import './App.css';
import logo from './images/logo.png';
import sampleBookCover from './images/sample-book-cover.jpg';
import qrCode from './images/QR.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Little Legends Logo" className="logo" />
        </div>
        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#samples">Samples</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Little Legends</h1>
          <p>Experience the magic of personalized AI-generated children's books.</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Little Legends is dedicated to creating unique, personalized stories for children, powered by advanced AI technology. Our mission is to foster a love for reading through engaging and customized narratives.</p>
      </section>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Personalized Stories</h3>
            <p>Each book is tailored to include your child's name, likeness, and preferences, making them the hero of their own adventure.</p>
          </div>
          <div className="feature-item">
            <h3>AI-Generated Illustrations</h3>
            <p>Our AI crafts beautiful, unique illustrations that bring each story to life in a way that's never been seen before.</p>
          </div>
          <div className="feature-item">
            <h3>Easy Ordering Process</h3>
            <p>Simply contact us to provide a few details about your child, and we'll handle the rest, delivering a high-quality book to your doorstep.</p>
          </div>
        </div>
      </section>

      <section id="samples" className="samples">
        <h2>Sample Works</h2>
        <div className="sample-gallery">
          <img src={sampleBookCover} alt="Sample Book Cover" className="sample-image" />
          {/* Add more sample images as needed */}
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"Little Legends created a magical experience for my child. The personalized story and images were beautifully crafted and will be cherished for years."</p>
          </div>
          <div className="testimonial-item">
            <p>"The best gift ever for my kid!!"</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Ready to create a personalized story for your child? Reach out to us at:</p>
        <p>Email: <a href="mailto:littlelegends.cs@gmail.com">littlelegends.cs@gmail.com</a></p>
        <p>Phone: 050-2491316 / 052-4635060</p>
        <div className="qr-container">
          <img src={qrCode} alt="Contact QR Code" className="qr-code" />
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Little Legends. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
