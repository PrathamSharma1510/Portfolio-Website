import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ContactCode from '../components/ContactCode';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Send email via EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_name: 'Pratham Sharma',
        },
        publicKey
      );

      if (result.text === 'OK') {
        setShowSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Breadcrumbs filename="contact.css" />
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      {showSuccess && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.successIcon}>✓</div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I will get back to you soon!</p>
          </div>
        </div>
      )}

      {showError && (
        <div className={styles.modal}>
          <div className={`${styles.modalContent} ${styles.error}`}>
            <div className={styles.errorIcon}>✕</div>
            <h3>Oops!</h3>
            <p>There was an error sending your message. Please try again later.</p>
          </div>
        </div>
      )}

      {/* CSS Document */}
      <div className={styles.editorContent}>
        <div className={styles.cssDocument}>
          
          {/* CSS Header Comments */}
          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>1</span>
            <span className={styles.comment}>/* ================================================== */</span>
          </div>
          
          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>2</span>
            <span className={styles.comment}>/*   Contact Page Styles - Pratham Sharma           */</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>3</span>
            <span className={styles.comment}>/*   Get in touch for collaborations & opportunities */</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>4</span>
            <span className={styles.comment}>/* ================================================== */</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>5</span>
            <span></span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>6</span>
            <span className={styles.comment}>/* Contact Container */</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>7</span>
            <span className={styles.selector}>.contact-page</span>
            <span className={styles.bracket}> &#123;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>8</span>
            <span className={styles.indent}>  </span>
            <span className={styles.property}>display</span>
            <span className={styles.colon}>:</span>
            <span className={styles.value}> flex</span>
            <span className={styles.semicolon}>;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>9</span>
            <span className={styles.indent}>  </span>
            <span className={styles.property}>padding</span>
            <span className={styles.colon}>:</span>
            <span className={styles.value}> 2rem</span>
            <span className={styles.semicolon}>;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>10</span>
            <span className={styles.bracket}>&#125;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>11</span>
            <span></span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>12</span>
            <span className={styles.comment}>/* Social Links Section */</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>13</span>
            <span className={styles.selector}>.social-links</span>
            <span className={styles.bracket}> &#123;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>14</span>
            <span className={styles.indent}>  </span>
            <span className={styles.property}>width</span>
            <span className={styles.colon}>:</span>
            <span className={styles.value}> 100%</span>
            <span className={styles.semicolon}>;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>15</span>
            <span className={styles.bracket}>&#125;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>16</span>
            <span></span>
          </div>

      <div className={styles.contentGrid}>
        <div className={styles.socialSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>{'<socials>'}</span>
            <h2 className={styles.sectionTitle}>Connect With Me</h2>
          </div>
          <ContactCode />
          <div className={styles.sectionFooter}>
            <span className={styles.tag}>{'</socials>'}</span>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>{'<form>'}</span>
            <h2 className={styles.sectionTitle}>Send a Message</h2>
          </div>

          <form className={styles.form} onSubmit={submitForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  <span className={styles.labelIcon}>👤</span>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  <span className={styles.labelIcon}>📧</span>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">
                <span className={styles.labelIcon}>📌</span>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Project Collaboration"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">
                <span className={styles.labelIcon}>💬</span>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Tell me about your project or idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={styles.textarea}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Sending...
                </>
              ) : (
                <>
                  <span className={styles.btnIcon}>🚀</span>
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className={styles.sectionFooter}>
            <span className={styles.tag}>{'</form>'}</span>
          </div>
        </div>
      </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>17</span>
            <span className={styles.comment}>/* Contact Form Styles */</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>18</span>
            <span className={styles.selector}>.contact-form</span>
            <span className={styles.bracket}> &#123;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>19</span>
            <span className={styles.indent}>  </span>
            <span className={styles.property}>background</span>
            <span className={styles.colon}>:</span>
            <span className={styles.value}> rgba(255, 255, 255, 0.03)</span>
            <span className={styles.semicolon}>;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>20</span>
            <span className={styles.indent}>  </span>
            <span className={styles.property}>border-radius</span>
            <span className={styles.colon}>:</span>
            <span className={styles.value}> 12px</span>
            <span className={styles.semicolon}>;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>21</span>
            <span className={styles.bracket}>&#125;</span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>22</span>
            <span></span>
          </div>

          <div className={styles.cssLine}>
            <span className={styles.lineNumber}>23</span>
            <span className={styles.comment}>/* End of Styles */</span>
          </div>

        </div>
      </div>

      {/* VS Code Status Bar */}
      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusItem}>
            <span className={styles.statusIcon}>🎨</span>
            CSS
          </span>
          <span className={styles.statusItem}>
            <span className={styles.statusIcon}>✓</span>
            No Issues
          </span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>UTF-8</span>
          <span className={styles.statusItem}>LF</span>
          <span className={styles.statusItem}>Ln 23, Col 1</span>
        </div>
      </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;

