import React from 'react';
import './App.css';
import logo from './images/logo.png';
import sampleBookCover from './images/sample-book-cover.jpg';
import sampleBookCover2 from './images/sample-book-cover1.jpg';
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
        <p>At Little Legends, we craft one-of-a-kind, personalized stories for children using cutting-edge AI technology. Our mission is to inspire a love for reading by creating engaging, custom-made tales that make every child the hero of their own adventure.</p>
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
          <img src={sampleBookCover2} alt="Sample Book Cover" className="sample-image" />
          {/* Add more sample images as needed */}
        </div>
      </section>

          <section id="testimonials" className="testimonials">
      <h2>לקוחות מספרים</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"ליטל לג'נדס יצרו חוויה קסומה עבור הילד שלי. הסיפור והתמונות המותאמות אישית היו מעוצבים בצורה מדהימה ויהיו מזכרת להרבה שנים."</p>
        </div>
        <div className="testimonial-item">
          <p>"ההתאמה האישית וההשקעה בפרטים פשוט מדהימים! הילד שלי מרגיש כמו גיבור אמיתי בספר שמיועד כולו לו. ליטל לג'נדס נתנו לנו מזכרת שתישאר איתנו לנצח"</p>
        </div>
        <div className="testimonial-item">
          <p>"לראות את הפנים של הילד שלי מאירות כשהוא מזהה את עצמו בסיפור היה רגע מופלא. ליטל לג'נדס הכניסו התרגשות חדשה לשעת הקריאה, והפכו כל סיפור להרפתקה אישית"</p>
        </div>
      </div>
    </section>

      <section id="contact" className="contact">
        <h2>דברו איתנו</h2>
        <p>רוצים ליצור סיפור מותאם אישית עבור ילדכם? צרו איתנו קשר</p>
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
