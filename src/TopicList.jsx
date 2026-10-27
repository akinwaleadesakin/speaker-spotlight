
function TopicList({ topics }) {
  return (
    <div className="topic-list">
      <h3>What you'll learn</h3>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
