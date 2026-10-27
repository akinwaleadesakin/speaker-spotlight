
import SpeakerCard from "./SpeakerCard";
import "./App.css";

const speakers = [
  {
    name: "Akinwale Adesakin",
    role: "Data Informatics Student",
    company: "Circle City Tech",
    talkTitle: "Turning Data Into Decisions",
    summary:
      "Discover how raw data can become useful insights through thoughtful analysis and visualization. This talk explores practical ways to make data easier to understand and use when solving real-world problems.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHHl7oSEhZS6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720938010141?e=1794441600&v=beta&t=muyKH-Y9KF4aXM8bGp0DSlUptCHRfdQ5Np7u2cSJTMM",
    imageAlt: "Portrait of a man with short hair wearing a dark shirt",
    topics: [
      "Understanding the data analysis process",
      "Choosing the right data visualization",
      "Turning findings into actionable insights",
    ],
  },
  {
    name: "Jordan Mitchell",
    role: "Frontend Developer",
    company: "Indy Digital Labs",
    talkTitle: "Building Better React Experiences",
    summary:
      "Explore how reusable components help developers create consistent, maintainable interfaces. Learn how thoughtful component design can simplify updates and improve the user experience.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85",
    imageAlt: "Portrait of a man with short hair and a friendly smile",
    topics: [
      "Breaking interfaces into components",
      "Passing data with props",
      "Creating reusable UI patterns",
    ],
  },
  {
    name: "Taylor Brooks",
    role: "UX Engineer",
    company: "NextWave Studio",
    talkTitle: "Designing for Everyone",
    summary:
      "Learn why accessibility belongs at the center of modern web development. This session covers practical design choices that help create inclusive and user-friendly digital experiences.",
    image:
      "https://unsplash.com/photos/woman-smiling-wearing-denim-jacket-TSZo17r3m0s",
    imageAlt: "Portrait of a woman with long dark hair",
    topics: [
      "Writing meaningful image alt text",
      "Improving color contrast and readability",
      "Making interfaces easier to navigate",
    ],
  },
];

function App() {
  return (
    <div className="page">
      <header className="event-header">
        <a className="brand" href="#top">
          <span className="brand-icon">&lt;/&gt;</span>
          CIRCLE CITY <span className="brand-light">DEV NIGHT</span>
        </a>

        <p className="event-tag">INDIANAPOLIS • TECH COMMUNITY</p>

        <div className="hero" id="top">
          <p className="eyebrow">MEET THE MINDS BEHIND THE CODE</p>
          <h1>
            Speaker <span>Spotlight.</span>
          </h1>
          <p className="hero-description">
            Fresh ideas, real-world experience, and conversations
            shaping the future of tech in Circle City.
          </p>

          <div className="event-details">
            <div>
              <span className="detail-label">DATE</span>
              <strong>November 12, 2026</strong>
            </div>
            <div>
              <span className="detail-label">VENUE</span>
              <strong>Downtown Indianapolis</strong>
            </div>
            <div>
              <span className="detail-label">TIME</span>
              <strong>6:00 PM – 8:00 PM</strong>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="section-heading">
          <p className="eyebrow">THIS MONTH'S LINEUP</p>
          <h2>Meet our speakers</h2>
          <p>Three perspectives. Three talks. One connected community.</p>
        </div>

        <div className="speaker-grid">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>

        <section className="closing-banner">
          <p className="eyebrow">LEARN • CONNECT • BUILD</p>
          <h2>Good ideas are better shared.</h2>
          <p>
            Come curious, meet your community, and leave inspired
            to build something great.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        
        <p>© 2026 Circle City Dev Night · Made in Indianapolis</p>
      </footer>
    </div>
  );
}

export default App;
