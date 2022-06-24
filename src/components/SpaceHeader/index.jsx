import "./styles.css";
import { CgAdd } from "react-icons/cg";
import { FiEdit2 } from "react-icons/fi";
const SpaceHeader = ({
  title,
  description,
  bgColor,
  color,
  displayNewPostComponent,
}) => {
  const editMySpace = () => {
    console.log("Editing my space");
  };

  const postNewStory = () => {
    displayNewPostComponent();
    console.log("Posting a new story");
  };
  return (
    <div
      className="Space-Header"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="Edit-Post-Container">
        <div className="EditSpace-Button-Container">
          <button className="No-Button-Style" onClick={() => editMySpace()}>
            <p>Edit my Space</p>
            <FiEdit2 />
          </button>
        </div>
        <div className="Post-Button-Container">
          <button className="No-Button-Style" onClick={() => postNewStory()}>
            <p>Post A Cool Story Bro</p>
            <CgAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaceHeader;
