import { useEffect, useRef } from 'react';
import anime from 'animejs';

const greetings = [
  'Stay safe from cyber',
  'साइबर से सुरक्षित रहें',
  'সাইবার থেকে নিরাপদ থাকুন',
  'サイバーから安全に過ごしてください',
  'Restez en sécurité contre le cyber',
  'Mantente seguro del ciber',
  '保持网络安全',
  'Bleib sicher vor Cybergefahren',
  'சைபர் ஆபத்திலிருந்து பாதுகாப்பாக இருங்கள்',
  'Fanacht sábháilte ón gcibear',
  'Manténgase seguro del ciber',
  'Bleiben Sie sicher vor Cyber',
  'Stai al sicuro dal cyber',
  'שמור על עצמך בטוח מפני סייבר',
  'Оставайтесь в безопасности от киберугроз',
  'ابق آمناً من الخطر السيبراني',
  'Hãy an toàn khỏi mối đe dọa mạng',
];

function Hero() {
  const greetRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    function animateGreeting(text) {
      const el = greetRef.current;
      if (!el) return;
      el.innerHTML = '';
      const words = text.split(' ');
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'greet-word';
        span.textContent = word;
        el.appendChild(span);
        if (i < words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
      });
      anime({
        targets: el.querySelectorAll('span'),
        opacity: [0, 1],
        translateX: (_, i) => (i % 2 === 0 ? ['-2.5em', '0em'] : ['2.5em', '0em']),
        duration: 800,
        delay: (_, i) => i * 100,
        easing: 'easeOutExpo',
        complete: () => {
          indexRef.current = (indexRef.current + 1) % greetings.length;
          setTimeout(() => animateGreeting(greetings[indexRef.current]), 2000);
        },
      });
    }
    animateGreeting(greetings[0]);
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/krushnacjadhav0807' });
    }
  };

  return (
    <section id="content-body">
      <div className="body-part-1">
        <h2><span id="greetingText" ref={greetRef}>Stay safe from cyber</span></h2>
        <div className="body-title">
          <h1>Cybersecurity Guardian<br />Front-End Maestro</h1>
          <p>Crafting a Secure and User-Centric Digital Tomorrow</p>
          <a href="#" onClick={openCalendly}>LET'S Connect!</a>
        </div>
        <div className="body-tail"></div>
      </div>
      <div className="body-part-2">
        <div className="container">
          <div className="svg-animation">
            <img src="/assets/data-privacy-img.svg" alt="Cyber SVG" className="responsive-svg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
