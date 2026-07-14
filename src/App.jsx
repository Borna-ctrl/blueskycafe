import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentReview, setCurrentReview] = useState(0);
const [loading, setLoading] = useState(true);
const [fadeOut, setFadeOut] = useState(false);

  const reviews = [
    { text: "Paninin är perfekta lunchen för när man behöver något snabbt och prisvänligt", author: "Ayoub Musa" },
    { text: "Trevlig personal, snabb och god mat. Renligheten perfekt. Glad och fantastisk bemötande", author: "Nayzak Alshaibani" },
    { text: "Väldigt god mat, härligt upplevelse, rekommenderar starkt. Trevlig, snäll och skojsam personal.", author: "Ahmed Diab" },
    { text: "Bra bemötande av personal, snäll och trevlig.", author: "Mina Al-Jabbari" },
  ];

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Trigger animation when currentReview changes
  useEffect(() => {
    const reviewText = document.querySelector('.testimonial');
    if (reviewText) {
      reviewText.classList.remove('slide-in'); // Remove the class before adding it again
      setTimeout(() => {
        reviewText.classList.add('slide-in'); // Add the class to trigger the animation
      }, 10); // Small delay to ensure the animation triggers
    }
  }, [currentReview]);


useEffect(() => {
  const timer = setTimeout(() => {
    setFadeOut(true); // starta fade-out
    setTimeout(() => setLoading(false), 600); // ta bort skärmen efter animationen
  }, 2000); // vänta 2 sekunder innan fade
  return () => clearTimeout(timer);
}, []);

  
useEffect(() => {
  if (activeSection === 'noodles') {
    const el = document.getElementById('noodles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, [activeSection]);


if (loading) {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <img src="/blueskycafe/images/noodle-bowl-icon.png" alt="Loading" />
        <p>Laddar Blue Sky...</p>
      </div>
    </div>
  );
}

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-inner">
          <h1 className="logo">Blue Sky</h1>
          <nav className="nav-center">
            <button onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Hem</button>
            <button onClick={() => setActiveSection('menu')} className={activeSection === 'menu' ? 'active' : ''}>Meny</button>
<button 
  onClick={() => setActiveSection('noodles')} 
  className={`noodles-button ${activeSection === 'noodles' ? 'active' : ''}`}
>
  Nudlar
</button>
            <button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>Om oss</button>
            <button onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Kontakt</button>
          </nav>
        </div>
      </header>

      <main>
        {activeSection === 'home' && (
          <section className="hero">
         <div className="main-hero-box">
    <div className="hero-dark-overlay"></div> {/* Lägg till denna */}
    <img src="/blueskycafe/images/BlueSkyFront.jpg" alt="BlueSkyFront" className="hero-main-image" />
    <div className="hero-text-overlay">
      <h1>Välkommen till Blue Sky Nudelkafé</h1>
      <button 
        className="to-noodles-button"
        onClick={() => setActiveSection('noodles')}
      >
        Hur gör man?
      </button>
    </div>
  </div>

            <div className="hero-gallery">
              <div className="featured-box">
                <div className="box-overlay"></div>
               
              </div>

              <div className="small-boxes-container">
                <div className="info-box hours-box">
                  <div className="box-overlay"></div>
                  <div className="box-content">
                    <h2>ÖPPETTIDER</h2>
                    <div className="hours-list">
                      <p>Mån - Tis : Stängt</p>
                      <p>Ons - Sön : 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="info-box bakery-box">
                  <div className="box-overlay"></div>
                  <div className="box-content">
                    <div className="husaren-items">
                    <p>Bygg din egen nudelskål. Välj nudlar, toppings och protein. Snabbt och gott</p>
                    </div>
                  </div>
                </div>

                <div className="info-box cafe-box">
                  <div className="box-overlay"></div>
                  <div className="box-content">
                    <div className="husaren-items">
                      <p>Paninis på riktigt. Pressad, varm och fulla av smak.</p>
                    </div>
                  </div>
                </div>

                <div className="info-box review-box">
                  <div className="box-overlay"></div>
                  <div className="box-content">
                    <h2>RECENSIONER</h2>
                    <blockquote className="testimonial">
                      "{reviews[currentReview].text}"
                      <footer>- {reviews[currentReview].author}</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'menu' && (
          <section className="menu-section">
            <div className="section-container">
              <h2>Vår Meny</h2>
              <div className="menu-boxes">
                <div className="menu-box">
                  <img src="/blueskycafe/images/StudentMeny.jpg" alt="Meny 1" className="menu-image" />
                </div>
                <div className="menu-box">
                  <img src="/blueskycafe/images/Meny.jpg" alt="Meny 2" className="menu-image" />
                </div>
              </div>
            </div>
          </section>
        )}
{activeSection === 'noodles' && (
<section id="noodles" className="noodles-section">
    <div className="section-container">
      <h2>Nudlar</h2>
      <h3 className="subtitle">Det asiatiska nudelkonceptet har kommit till Göteborg</h3>
      <p className="description">
        Bygg din egen skål med värmande och smakrika nudlar. Precis som i Bangkok, Tokyo eller Seoul.
        Hos oss kombinerar du själv dina favoritsmaker. Välj mellan ett brett sortiment av nudlar,
        fyll på med färska grönsaker, proteiner och såser. En snabb, mättande måltid. Helt på dina villkor.
      </p>

      <div className="steps">
        <details>
          <summary>Välj nudel</summary>
          <p>Välj från ett brett sortiment av nudlar efter egen smak och hunger. 
          Sugen på något starkt? Kör buldak. Sugen på något glutenfritt? Kör risnudlar. 
          Sugen på något mindre? Kör mamas eller yumyum.</p>
        </details>

        <details>
          <summary>Lägg till toppings och protein</summary>
          <p>Vi har färska och portionerade toppings att välja till nudelskålen. 
          Vitkål, morötter, majs, soja, räkor, ägg och mycket mer.</p>
        </details>

        <details>
        <summary>Betala</summary>
          <p>Skålen klar? Ta den till kassan och betala. Enkelt, snabbt och smidigt – precis som nudlar ska vara.</p>
        </details>


        <details>
          <summary>Laga</summary>
          <p>Lägg det du vill i skålen. Fyll upp med vatten. Tillaga på hällen.</p>
        </details>

        <details>
          <summary>Njut!</summary>
          <p>Smaklig måltid!</p>
        </details>
      </div>
    </div>
  </section>
)}


{activeSection === 'about' && (
  <section className="about-section">
    <div className="section-container">
      <div className="about-grid">
        {/* Box 1: ersätt "Vår Historia" med en bild */}
        <div className="about-box small-box">
          <img src="/blueskycafe/images/BlueskyÖver.jpg" alt="Vår historia" className="about-image" />
        </div>

        {/* Box 2: behåll personaltexten som den är */}
        <div className="about-box large-info">
          <div className="box-content">
            <h3>Om Blue Sky</h3>
            <p>
<p>Vi älskar nudlar och nu vill vi dela det med Göteborg. Vårt nudelkafé är inspirerat av de asiatiska snabbmatskoncepten där du själv bygger din skål. Snabbt, fräscht och precis som du vill ha det ska det vara</p>

<p>Hos oss hittar du smaker från öst men med ett enkelt och tydligt upplägg: välj nudlar, toppings och protein. Allt serveras i en lugn, avslappnad miljö där du själv bestämmer tempot.</p>

<p>Vi lagar våra paninis på plats, med råvaror vi själva tycker om. Vår mat är gjord för att vara god, mättande och lätt att ta med – men också värd att stanna för. </p>

<p>Välkommen till ett kafé där du får mat som smakar mycket! </p>
            </p>
          </div>
        </div>

        {/* Box 3: ersätt "Blue Sky – mer än ett café" med en bild */}
        <div className="about-box small-box">
          <img src="/blueskycafe/images/BlueskyUnder.jpg" alt="Blue Sky – mer än ett café" className="about-image" />
        </div>
      </div>
    </div>
  </section>
)}



        {activeSection === 'contact' && (
          <section className="contact-section">
            <div className="section-container">
              <h2>Kontakta oss</h2>
              <div className="contact-grid">
                <div className="contact-info">
                  <div className="contact-info-overlay">
                    <h3>Besök oss</h3>
                    <p>Ranängsgatan 12</p>
                    <p>416 64 Göteborg</p>
                    <p>Sverige</p>

                    <h3>Kontaktuppgifter</h3>
                    <p><strong>Telefon:</strong> 031 - 37 51 070</p>
                    <p><strong>Email:</strong> info@nudelicious.se</p>
                  </div>
                </div>

                <div className="contact-right">
                  <div className="contact-image-box">
                    <div className="contact-image-wrapper">
                      <img 
                        src="/blueskycafe/images/BlueSkyCafe.PNG" 
                        alt="Café interiör" 
                        className="contact-image"
                      />
                      <a 
                        href="https://maps.app.goo.gl/v1iFXDQi1zTDD2u89" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-map-button"
                      >
                        Hitta hit
                      </a>
                    </div>
                  </div>

                  <div className="contact-form">
                    <h3>Mejla oss</h3>
                    <form>
                      <input type="text" placeholder="Ditt namn" required />
                      <input type="email" placeholder="Din e-post" required />
                      <textarea placeholder="Ditt meddelande" required></textarea>
                      <button type="submit">Skicka</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Café Blue Sky. Alla rättigheter reserverade.</p>
        <p>Ranängsgatan 12, 416 64 Göteborg | Tel: 031 - 37 51 070</p>
      </footer>
    </div>
  );
}

export default App;
