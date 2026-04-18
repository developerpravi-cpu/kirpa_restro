import heroImg from '../assets/home.png'
import aboutImg from '../assets/about-us.png'
import { FaPhone, FaUser } from 'react-icons/fa'
import './Home.css'

function Home({ onNavigate }: { onNavigate: (page: 'home' | 'menu', targetAnchor?: string) => void }) {
  return (
    <main className="home-page">
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <span className="eyebrow">FRESH • HOMESTYLE • SATISFYING</span>
          <h1>Delicious homestyle meals, delivered to your door</h1>
          <p className="hero-text">
            Kirpa Tiffin Service brings you freshly prepared veg and non-veg meals made with authentic flavors and care. From everyday comfort food to special dishes and delightful desserts, we serve wholesome breakfast, lunch, and dinner—just like home, but better.
          </p>
          <div className="hero-actions">
            <button type="button" className="button primary" onClick={() => onNavigate('menu')}>
              View Menu
            </button>
            <button type="button" className="button secondary" onClick={() => onNavigate('home', '#contact')}>
              Place Order
            </button>
          </div>
        </div>

        <div className="hero-artboard">
          <div className="hero-image-card">
            <img src={heroImg} alt="Featured dish" />
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-grid">
          <div className="about-panel">
            <span className="eyebrow">About Us</span>
            <h2>Fresh homestyle meals made for your busy day</h2>
            <p>
              Kirpa Tiffin Service delivers freshly cooked veg and non-veg meals with authentic flavors, wholesome portions, and the comforts of home.
            </p>
            <p>
              We cook every meal daily with care, from hearty lunches and dinner plates to light breakfasts and sweet treats.
            </p>
            <div className="about-features">
              <strong>Our commitment:</strong>
              <ul>
                <li>Freshly cooked meals every day</li>
                <li>Balanced, wholesome portions</li>
                <li>Veg, non-veg, and sweet options</li>
                <li>Consistent taste and quality</li>
              </ul>
            </div>
          </div>
          <div className="about-image-card">
            <img src={aboutImg} alt="Kirpa Tiffin Service meal" />
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact">
        <div className="contact-panel">
          <span className="eyebrow">Contact</span>
          <h2>Order Fresh Tiffin Anytime</h2>
          <p>
            Contact us to order daily veg & non-veg meals, desserts, or customize your tiffin plan. Fast delivery, homestyle taste, and reliable service—just a call away.
          </p>
          <div className="contact-info">
            <article className="contact-card">
              <div className="contact-card-header">
                <span className="contact-icon-wrap">
                  <FaUser className="contact-icon" />
                </span>
                <div>
                  <p className="contact-card-type">Manager</p>
                  <p className="contact-card-name">Narinder Dhadral</p>
                </div>
              </div>
            </article>
            <article className="contact-card">
              <div className="contact-card-header">
                <span className="contact-icon-wrap">
                  <FaPhone className="contact-icon" />
                </span>
                <div>
                  <p className="contact-card-type">Call for orders</p>
                  <div className="contact-detail">
                    <a href="tel:+447352410267" className="contact-number">tel: +44 7352 410267</a>
                    <a href="tel:+447865697597" className="contact-number">tel: +44 7865 697597</a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
