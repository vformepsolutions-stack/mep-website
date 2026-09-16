import { useEffect, useState } from 'react'
import './App.css'
import { icons } from 'lucide-react'

//this is simple
const phone = '917852046206'
const mapEmbed = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.607796458594!2d75.79169297543956!3d26.915939676645294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1788332700570!5m2!1sen!2sin'

const heroImages = [
  '/cursole/1.jpeg',
  '/cursole/3.jpeg',
  '/cursole/4.jpeg',
  '/cursole/5.jpeg',
]

const services = [
  { number: '01', title: 'VRF/VRV AC Systems', text: 'High-performance climate control engineered for comfort, efficiency and long service life.', icon: '◒', img: "/services/hvac.jpg" },
  { number: '02', title: 'Ventilation', text: 'Balanced fresh-air and evaporative cooling systems for healthier, more productive spaces.', icon: '≋', img: "/services/vetilation.jpg" },
  { number: '03', title: 'Fire Protection', text: 'Integrated detection, firefighting and suppression systems designed around your facility.', icon: '✧', img: "/services/fire preventation.jpg" },
  { number: '04', title: 'Electrical Works', text: 'Safe, precise HV and LV power distribution, controls and electrical installation.', icon: '⌁', img: "/services/Electric Works.jpg" },
  { number: '05', title: 'Service & Maintenance', text: 'Planned maintenance and responsive support that keeps every system performing.', icon: '↻', img: "/services/service and maintance.jpg" },
  {number:"06", title : "Solar installation and maintenance",text:'Reliable solar installation and expert maintenance for efficient, long-lasting clean energy.',icon:"",img:"/services/solar.jpg"}
]

const projects = [
  { title: 'Rajasthan Police Academy', tag: 'Institutional HVAC & MEP', image: '/Pictures/Rajasthan_Police_Academy.jpg' },
  { title: 'Wipro Hydraulics Facility', tag: 'Industrial Ventilation & Cooling', image: '/Pictures/Wipro-Hydraulics-1.jpg' },
  { title: 'CKS Hospital Complex', tag: 'Healthcare Climate Control', image: '/Pictures/Cks-Mob-size.jpg' },
  { title: 'CrossFit Fitness Center', tag: 'Commercial Ventilation & Air Conditioning', image: '/Pictures/cross-fit-uplift-murlipura-jaipur-gyms-o69o22264x.jpg' },
  { title: 'Hotel Surya INN', tag: 'VRF & Fire Protection Systems', image: '/Pictures/5292ae27.jpg' },
  { title: 'Alien Carrier Instuite', tag: 'Complete MEP Execution', image: '/Pictures/alien.jpg' },
]

const clientLogos = [
  { name: 'KC Memorial Eye Hospital', file: '/Pictures/logo.png' },
  { name: 'KR Memorial Hospital', file: '/Pictures/logo.webp' },
  { name: 'CKS Hospital', file: '/Pictures/ck.png' },
  { name: 'Axis Bank', file: '/Pictures/axis.png' },
  { name: 'AU Small Finance Bank', file: '/Pictures/images (2).png' },
  { name: 'Kanha', file: '/Pictures/kanha.jpeg' },
  { name: 'Narayana Health Jaipur', file: '/Pictures/nh-logo.svg' },
  { name: 'Rungta Hospital', file: '/Pictures/rh-logo.svg' },
]

const clientProjects = [
  '1.jpg', '5292ae27.jpg', 'Cks-Mob-size.jpg', 'cross-fit-uplift-murlipura-jaipur-gyms-o69o22264x.jpg',
  'images (10).jpg', 'images (11).jpg', 'images (12).jpg', 'images (13).jpg', 'images (14).jpg',
  'images (15).jpg', 'images (16).jpg', 'images (17).jpg', 'images (18).jpg', 'images (19).jpg',
  'images (20).jpg', 'images (21).jpg', 'images (22).jpg', 'images (23).jpg', 'images (24).jpg',
  'images (25).jpg', 'Rajasthan_Police_Academy.jpg', 'Wipro-Hydraulics-1.jpg', 'unnamed.jpg',
  'unnamed (1).jpg', 'unnamed (2).webp', 'WhatsApp Image 2026-09-02 at 2.08.01 PM.jpeg',
]

const faqs = [
  ['What areas do you serve?', 'We deliver HVAC and MEP projects across Jaipur, Rajasthan and selected cities throughout North India.'],
  ['Do you provide site surveys?', 'Yes. Every project starts with a detailed site evaluation so our recommendation is accurate and buildable.'],
  ['Can you handle complete MEP execution?', 'Our team can coordinate HVAC, ventilation, electrical and fire protection as one integrated scope.'],
  ['Which HVAC systems do you work with?', 'We work across VRF, ducted, split, precision cooling and ventilation systems for homes, offices and industries.'],
  ['Do you offer maintenance support?', 'Yes. Warranty and planned maintenance support are available to keep systems performing reliably.'],
  ['How quickly can I get a quotation?', 'Share your project details and our team will respond with the next steps and a clear estimate.'],
]

function Mark({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand--light' : ''}`} href="#top" aria-label="Vision for MEP Solution home"><img src="/logo.jpg" alt="Vision for MEP Solution" /></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)
  const [page, setPage] = useState(window.location.hash === '#clients' ? 'clients' : 'home')
  const [heroIndex, setHeroIndex] = useState(0)
  const [projectIndex, setProjectIndex] = useState(0)

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(heroTimer)
  }, [])

  useEffect(() => {
    const projectTimer = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(projectTimer)
  }, [])

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((item) => reveal.observe(item))
    const syncPage = () => setPage(window.location.hash === '#clients' ? 'clients' : 'home')
    window.addEventListener('hashchange', syncPage)
    return () => {
      reveal.disconnect()
      window.removeEventListener('hashchange', syncPage)
    }
  }, [page])



  const nextProject = () => setProjectIndex((prev) => (prev + 1) % projects.length)
  const prevProject = () => setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <div id="top" className={page === 'clients' ? 'app--clients' : ''}>
      <div className="announcement"><span>India's trusted HVAC & MEP engineering partner</span><a href={`tel:+${phone}`}>Call +91 78520 46206 <span>↗</span></a></div>
      <header className="site-header"><Mark /><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button><nav className={menuOpen ? 'nav nav--open' : 'nav'}>{['Home', 'About', 'Services', 'Projects', 'Clients', 'Insights', 'Contact'].map((item) => <a key={item} href={item === 'Home' ? '#top' : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="button button--small" href="#contact" onClick={() => setMenuOpen(false)}>Get a quote <span>↗</span></a></nav></header>

      <main>
        <section className="hero">
          <div className="hero__bg-slider">
            {heroImages.map((img, idx) => (
              <div
                key={img}
                className={`hero__bg-slide ${idx === heroIndex ? 'hero__bg-slide--active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
          <div className="hero__overlay" />
          <div className="hero__content reveal">
            <p className="eyebrow eyebrow--light"><span /> COMPLETE HVAC & MEP SOLUTIONS</p>
            <h1>Engineering comfort<br /><em>for every space.</em></h1>
            <p className="hero__copy">We delivers reliable and efficient HVAC & MEP solutions for commercial, healthcare, hospitality, institutional, and residential projects. From design and supply to installation and commissioning, we provide end-to-end solutions engineered for comfort, performance, and long-term reliability.</p>
            <div className="hero__actions">
              <a className="button" href="#contact">Start a project <span>↗</span></a>
              <a className="text-link text-link--light" href="#services">Explore services <span>↓</span></a>
            </div>
          </div>
          <div className="hero__carousel-controls">
            <button onClick={() => setHeroIndex((heroIndex - 1 + heroImages.length) % heroImages.length)} aria-label="Previous slide">‹</button>
            <div className="hero__carousel-dots">
              {heroImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`hero__dot ${idx === heroIndex ? 'hero__dot--active' : ''}`}
                  onClick={() => setHeroIndex(idx)}
                />
              ))}
            </div>
            <button onClick={() => setHeroIndex((heroIndex + 1) % heroImages.length)} aria-label="Next slide">›</button>
          </div>
          <div className="hero__side-note">01 <span /> JAIPUR · RAJASTHAN</div>
          <div className="hero__scroll">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="intro section reveal"><div><p className="eyebrow">01 / WHO WE ARE</p><h2>Complete building systems,<br /><em>under one roof.</em></h2></div><div className="intro__copy"><p>Vision for MEP Solution brings together experienced engineers, trained technicians and dependable execution. From the first site survey to the final handover, we make complex HVAC and MEP work clear, coordinated and built to last.</p><div className="intro__signature"><strong>12+</strong><span>years of engineering<br />experience</span><i>— Vision MEP team</i></div><a className="text-link" href="#about">More about our approach <span>↗</span></a></div></section>
        <section id="services" className="services section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">02 / OUR SERVICES</p>
              <h2>One team. Every<br /><em>critical system.</em></h2>
            </div>
            <p>Technical depth across the MEP disciplines, with one accountable partner from concept to completion.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.number}>
                <span className="service-card__number">{service.number}</span>
                <div className="service-card__image">
                  <img src={service.img} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" className="card-link" aria-label={`Learn more about ${service.title}`}>↗</a>
              </article>
            ))}
          </div>
        </section>
        <section className="stats"><div className="stats__intro">A record of<br /><em>reliability.</em></div>{[['12+', 'Years of experience'], ['150+', 'Projects completed']].map(([num, label]) => <div className="stat" key={label}><strong>{num}</strong><span>{label}</span></div>)}</section>

        <section id="about" className="about section"><div className="about__image reveal"><img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85" alt="Engineer reviewing an industrial installation" /><span className="image-label">VISI / 001</span></div><div className="about__content reveal"><p className="eyebrow">03 / THE VISION DIFFERENCE</p><h2>Engineering you can<br /><em>build a business on.</em></h2><p>Vision for MEP Solution was founded on a simple belief: the best engineering is felt in the everyday. A comfortable room. A safe facility. A system that quietly does its job, year after year.</p><p>Based in Jaipur, we partner with architects, contractors, businesses and homeowners to make every project more efficient, more resilient and easier to maintain.</p><a className="button button--outline" href="#contact">Meet the team <span>↗</span></a></div></section>

        <section id="projects" className="projects section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">04 / OUR PROJECTS</p>
              <h2>Built to perform.<br /><em>Designed to last.</em></h2>
            </div>
            <div className="carousel-nav-buttons">
              <button onClick={prevProject} aria-label="Previous project">‹</button>
              <button onClick={nextProject} aria-label="Next project">›</button>
            </div>
          </div>
          <div className="project-carousel-container">
            <div
              className="project-carousel-track"
              style={{ transform: `translateX(-${projectIndex * (100 / (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%)` }}
            >
              {projects.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <img src={project.image} alt={project.title} />
                  <div className="project-card__shade" />
                  <div className="project-card__content">
                    <span>{project.tag}</span>
                    <h3>{project.title}</h3>
                    <a href="#clients" aria-label={`View ${project.title}`}>↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {projects.map((_, idx) => (
              <span
                key={idx}
                className={`carousel-dot ${idx === projectIndex ? 'carousel-dot--active' : ''}`}
                onClick={() => setProjectIndex(idx)}
              />
            ))}
          </div>
        </section>

        <section className="process section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">05 / HOW IT WORKS</p>
              <h2>A clear path from<br /><em>need to done.</em></h2>
            </div>
            <p>No guesswork, no hand-offs. A considered process that keeps every detail moving in the right direction.</p>
          </div>
          <div className="process-grid">
            {[['01', 'Consultation', 'We listen first, understand the brief and define what success needs to look like.'], ['02', 'Site evaluation', 'Our engineers study the space, constraints and usage before recommending a system.'], ['03', 'Installation', 'Precise execution by a coordinated team, with safety and finish held to a high standard.'], ['04', 'Support', 'Warranty and maintenance support that keeps your investment performing.']].map(([number, title, text]) => (
              <div className="process-item reveal" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-clients section reveal">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / CLIENTS & PARTNERS</p>
              <h2>Trusted by industry<br /><em>leaders & institutions.</em></h2>
            </div>
            <a className="text-link" href="#clients">View all clients & gallery <span>↗</span></a>
          </div>
          <div className="home-clients-grid">
            {clientLogos.map((client) => (
              <article className="home-client-card" key={client.name}>
                <img src={client.file} alt={client.name} />
                <span>{client.name}</span>
              </article>
            ))}
          </div>
        </section>

        {page === 'clients' && (
          <section id="clients" className="clients-page section">
            <div className="clients-page__back"><a className="text-link" href="#top">← Back to home</a></div>
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">CLIENTS & PARTNERS</p>
                <h2>Good work is<br /><em>always shared.</em></h2>
              </div>
              <p>We are proud to work alongside organisations that value quality, safety and systems built to last.</p>
            </div>
            <div className="client-logo-grid">
              {clientLogos.map((client) => (
                <article className="client-logo-card reveal" key={client.name}>
                  <img src={client.file} alt={client.name} />
                  <span>{client.name}</span>
                </article>
              ))}
            </div>
            <div className="client-gallery-heading">
              <p className="eyebrow">SELECTED PROJECT IMAGES</p>
              <h3>Spaces we have helped<br /><em>make work better.</em></h3>
            </div>
            <div className="client-photo-grid">
              {clientProjects.map((file, index) => (
                <figure className="client-photo-card reveal" key={file}>
                  <img src={`/Pictures/${file}`} alt={`Vision MEP project ${index + 1}`} />
                  <figcaption>Project {String(index + 1).padStart(2, '0')}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section id="insights" className="faq section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">07 / GOOD TO KNOW</p>
              <h2>Questions,<br /><em>answered.</em></h2>
            </div>
            <p>Still have something on your mind? <a className="text-link" href="#contact">Talk to an engineer <span>↗</span></a></p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index
              return (
                <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={question}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span>{question}</span>
                    <b>{isOpen ? '−' : '+'}</b>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact__intro reveal">
            <p className="eyebrow eyebrow--light">08 / START A CONVERSATION</p>
            <h2>Let's make your<br /><em>next space better.</em></h2>
            <p>Tell us a little about your project. Our team will get back to you with a clear next step.</p>
            <div className="contact-details">
              <a href="tel:+917852046206">+91 78520 46206</a>
              <a href="mailto:info@v4mep.in">info@v4mep.in</a>
              <address>43-B Gopalbari, Near SBI Branch,<br />Off Ajmer Road, Jaipur, Rajasthan 302001</address>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            {sent ? (
              <div className="form-success">
                <span>✓</span>
                <h3>Thanks for reaching out.</h3>
                <p>We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>Name<input required placeholder="Your name" /></label>
                  <label>Phone<input required placeholder="+91" type="tel" /></label>
                </div>
                <label>Email<input required placeholder="you@company.com" type="email" /></label>
                <label>Service interested in
                  <select defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>VRF / HVAC systems</option>
                    <option>Ventilation</option>
                    <option>Electrical works</option>
                    <option>Fire protection</option>
                  </select>
                </label>
                <label>Message<textarea required placeholder="Tell us about your project" rows={4} /></label>
                <button className="button" type="submit">Send enquiry <span>↗</span></button>
              </>
            )}
          </form>
        </section>

        <section className="map-wrap">
          <iframe src={mapEmbed} title="Vision for MEP Solution location map" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        </section>
      </main>

      <footer className="footer">
        <div className="footer__top">
          <Mark light />
          <p>HVAC & MEP engineering<br />for spaces that matter.</p>
          <a className="footer__top-link" href="#top">Back to top ↑</a>
        </div>
        <div className="footer__grid">
          <div>
            <p className="footer__label">Explore</p>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#insights">Insights</a>
          </div>
          <div>
            <p className="footer__label">Contact</p>
            <a href="tel:+917852046206">+91 78520 46206</a>
            <a href="tel:+917852036206">+91 78520 36206</a>
            <a href="mailto:info@v4mep.in">info@v4mep.in</a>
          </div>
          <div>
            <p className="footer__label">Visit</p>
            <p>43-B Gopalbari, Near SBI Branch,<br />Off Ajmer Road, Jaipur, Rajasthan 302001</p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Vision for MEP Solution</span>
          <span>Built for better spaces.</span>
        </div>
      </footer>

      <div className="floating-actions">
        <a className="brochure-float" href="/Brochure.pdf" download="Vision-MEP-Brochure.pdf" target="_blank" rel="noreferrer" title="Download brochure">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <strong>Download brochure</strong>
        </a>
        <a className="whatsapp-float" href={`https://wa.me/${phone}?text=Hello%20Vision%20for%20MEP%20Solution%2C%20I%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noreferrer" aria-label="Chat with Vision for MEP Solution on WhatsApp" title="Chat on WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.005 4.995A9.943 9.943 0 0 0 12 2c-5.523 0-10 4.477-10 10 0 1.77.46 3.486 1.332 5.006L2 22l5.127-1.314A9.945 9.945 0 0 0 12 22c5.523 0 10-4.477 10-10 0-2.67-1.039-5.18-2.995-7.005zM12 20.166c-1.503 0-2.977-.4-4.269-1.164l-.306-.182-3.17.812.828-3.09-.2-.317A8.134 8.134 0 0 1 3.834 12c0-4.503 3.663-8.166 8.166-8.166 2.18 0 4.23.849 5.772 2.391a8.125 8.125 0 0 1 2.394 5.775c0 4.503-3.663 8.166-8.166 8.166zm4.476-6.115c-.246-.123-1.455-.718-1.68-.8-.226-.082-.39-.123-.555.123-.164.246-.637.8-.781.964-.144.164-.288.185-.534.062-.246-.123-1.04-.383-1.981-1.222-.733-.654-1.228-1.463-1.372-1.709-.144-.246-.015-.379.108-.502.111-.11.246-.288.37-.432.123-.144.164-.246.246-.41.082-.164.041-.309-.021-.432-.062-.123-.555-1.337-.76-1.83-.2-.48-.403-.415-.555-.423h-.473c-.164 0-.432.062-.658.309-.226.246-.863.843-.863 2.057s.884 2.387 1.007 2.551c.123.164 1.74 2.657 4.217 3.725.59.255 1.05.408 1.41.522.593.188 1.133.161 1.56.097.476-.071 1.455-.595 1.66-1.17.205-.575.205-1.067.144-1.17-.062-.103-.226-.164-.472-.287z" />
          </svg>
          <strong>Chat on WhatsApp</strong>
        </a>
      </div>
    </div>
  )
}

export default App
