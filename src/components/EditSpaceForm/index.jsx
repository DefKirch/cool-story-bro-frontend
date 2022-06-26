import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { selectMe } from "../../store/spaces/selectors";
import { useState } from "react";
import { editMySpace } from "../../store/spaces/thunks";

const EditSpaceForm = () => {
  const Me = useSelector(selectMe);
  const [title, setTitle] = useState(Me.mySpace.title);
  const [description, setDescription] = useState(Me.mySpace.description);
  const [bgColor, setbgColor] = useState(Me.mySpace.backgroundColor);
  const [color, setColor] = useState(Me.mySpace.color);

  const dispatch = useDispatch();
  const handleEditSpace = () => {
    dispatch(editMySpace(title, description, bgColor, color, Me.mySpace.id));
  };
  return (
    <div
      className="Edit-Space-Container"
      // style={{ backgroundColor: Me.mySpace.backgroundColor }}
    >
      <h2>Edit your space</h2>
      <div className="Forms-Container">
        <div className="Form-Row">
          <p>Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              opacity: "55%",
            }}
          ></input>
        </div>
        <div className="Form-Row">
          <p>Description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              opacity: "55%",
            }}
          ></input>
        </div>
        <div className="Form-Row">
          <p>Background</p>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setbgColor(e.target.value)}
            style={{
              opacity: "95%",
            }}
          ></input>
        </div>
        <div className="Form-Row">
          <p>Text color</p>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{
              opacity: "95%",
            }}
          ></input>
        </div>
      </div>
      <div className="Post-Button-Container">
        <button onClick={() => handleEditSpace()}>Save changes</button>
      </div>
    </div>
  );
};

export default EditSpaceForm;
