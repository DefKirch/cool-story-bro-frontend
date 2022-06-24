import "./styles.css";
import { RiDeleteBinLine } from "react-icons/ri";
const StoryCard = ({
  id,
  name,
  content,
  image,
  bgColor,
  color,
  handleDeleteStory,
  isMySpace,
}) => {
  return (
    <div style={{ backgroundColor: bgColor, color }}>
      <div className="StoryCard">
        <h3>{name}</h3>
        <div className="StoryCard-Content">
          <p>{content}</p>
          <img className="StoryCard-Image" src={image} alt={`${name}`} />
          {isMySpace ? (
            <div className="Delete-Button-Container">
              <button
                className="Delete-Button"
                onClick={() => handleDeleteStory(id)}
              >
                <RiDeleteBinLine className="Delete-Button-Icon" />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
