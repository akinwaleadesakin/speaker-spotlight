
import TopicList from "./TopicList";
import "./SpeakerCard.css";

function SpeakerCard({
  name,
  role,
  company,
  talkTitle,
  summary,
  image,
  imageAlt,
  topics,
}) {
  return (
    <article className="speaker-card">
      <div className="speaker-image-wrapper">
        <img
          className="speaker-image"
          src={image}
          alt={imageAlt}
        />
        <span className="speaker-badge">FEATURED SPEAKER</span>
      </div>

      <div className="speaker-content">
        <p className="speaker-role">
          {role} <span>@</span> {company}
        </p>

        <h2 className="speaker-name">{name}</h2>

        <div className="talk-section">
          <p className="section-label">THE TALK</p>
          <h3 className="talk-title">{talkTitle}</h3>
          <p className="talk-summary">{summary}</p>
        </div>

        <TopicList topics={topics} />
      </div>
    </article>
  );
}

export default SpeakerCard;
