import "./styles.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createNewStory } from "../../store/spaces/thunks";
import { selectMe } from "../../store/spaces/selectors";
import { useSelector } from "react-redux";
const NewStoryForm = ({ toggleForm }) => {
  const dispatch = useDispatch();
  const Me = useSelector(selectMe);
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const handleNewPost = () => {
    dispatch(createNewStory(name, content, imageUrl, Me.mySpace.id));
    toggleForm();
  };
  return (
    <div
      className="New-Story-Container"
      style={{
        backgroundColor: Me.mySpace.backgroundColor,
        color: Me.mySpace.color,
      }}
    >
      <h2>Post a cool story bro</h2>
      <div className="Forms-Container">
        <div className="Form-Row">
          <p>name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              opacity: "55%",
            }}
          ></input>
        </div>
        <div className="Form-Row">
          <p>Content</p>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              opacity: "55%",
            }}
          ></input>
        </div>
        <div className="Form-Row">
          <p>Image url</p>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={{
              opacity: "55%",
            }}
          ></input>
        </div>
        <div className="Image-Preview-Container">
          {imageUrl.length ? (
            <img className="Preview-Image" src={imageUrl} alt="image preview" />
          ) : (
            <div className="Image-Preview-Placeholder">
              <p>preview image</p>
            </div>
          )}
        </div>
      </div>
      <div className="Post-Button-Container">
        <button onClick={() => handleNewPost()}>Post!</button>
      </div>
    </div>
  );
};

export default NewStoryForm;
