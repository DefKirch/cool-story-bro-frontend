import "./styles.css";
import { CgAdd, CgClose } from "react-icons/cg";
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";
const SpaceHeader = ({
  title,
  description,
  bgColor,
  color,
  displayNewPostComponent,
  displayEditingSpaceComponent,
}) => {
  const [creatingNewStory, setCreatingNewStory] = useState(false);
  const [editingMySpace, setEditingMySpace] = useState(false);

  const editMySpace = () => {
    displayEditingSpaceComponent();
    setEditingMySpace(!editingMySpace);
  };

  const postNewStory = () => {
    displayNewPostComponent();
    setCreatingNewStory(!creatingNewStory);
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
          <button
            className="No-Button-Style"
            style={{ color }}
            onClick={() => editMySpace()}
          >
            {editingMySpace ? (
              <>
                <p>Discard Changes</p>
                <CgClose />
              </>
            ) : (
              <>
                <p>Edit my Space</p>
                <FiEdit2 />
              </>
            )}
          </button>
        </div>
        <div className="Post-Button-Container">
          <button
            className="No-Button-Style"
            style={{ color }}
            onClick={() => postNewStory()}
          >
            {creatingNewStory ? (
              <>
                <p>Close</p>
                <CgClose />
              </>
            ) : (
              <>
                <p>Post A Cool Story Bro</p>
                <CgAdd />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaceHeader;
