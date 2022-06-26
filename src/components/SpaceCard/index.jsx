import "./styles.css";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const SpaceCard = ({ id, title, description, backgroundColor, color }) => {
  const [route, setRoute] = useState(`/spaces/${id}`);
  const User = useSelector(selectUser);

  const checkIfMySpace = () => {
    if (User && id === User.id) {
      setRoute("/mySpace");
    }
  };

  useEffect(() => {
    checkIfMySpace();
  }, []);

  return (
    <div className="SpaceCard-Container">
      {/* TODO: BackgroundColor is saved in the reduxState and the color too, use Selectors to get these */}
      <div className="SpaceCard" style={{ backgroundColor, color }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <Link className="SpaceCard-Link" to={route}>
            Visit Space
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
