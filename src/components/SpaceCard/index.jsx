import "./styles.css";
import { Link } from "react-router-dom";

const SpaceCard = ({ id, title, description, backgroundColor, color }) => {
  return (
    <div className="SpaceCard-Container">
      {/* TODO: BackgroundColor is saved in the reduxState and the color too, use Selectors to get these */}
      <div className="SpaceCard" style={{ backgroundColor, color }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <Link className="SpaceCard-Link" to={`/spaces/${id}`}>
            Visit Space
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
