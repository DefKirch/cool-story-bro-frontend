import "./styles.css";
const StoryCard = ({ name, content, image, bgColor, color }) => {
  return (
    <div style={{ backgroundColor: bgColor, color }}>
      <div className="StoryCard">
        <h3>{name}</h3>
        <div className="StoryCard-Content">
          <p>{content}</p>
          <img className="StoryCard-Image" src={image} alt={`${name}`} />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
