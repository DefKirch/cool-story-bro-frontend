import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { selectMe } from "../../store/spaces/selectors";
import { fetchMySpace, deleteStory } from "../../store/spaces/thunks";
import StoryCard from "../../components/StoryCard";
import { useState, useEffect } from "react";
import SpaceHeader from "../../components/SpaceHeader";
const MySpacePage = () => {
  const [sortedStories, setSortedStories] = useState([]);
  const Me = useSelector(selectMe);
  const dispatch = useDispatch();

  const sortStoriesByDate = () => {
    const storiesToSort = [...Me.mySpace.stories];
    setSortedStories(storiesToSort.sort((a, b) => a.createdAt - b.createdAt));
  };

  const handleDeleteStory = (id) => {
    dispatch(deleteStory(id));
  };

  useEffect(() => {
    if (Me) {
      sortStoriesByDate();
    }
  }, [Me, dispatch]);

  console.log("Me:", Me);
  useEffect(() => {
    dispatch(fetchMySpace());
  }, [dispatch]);

  //   const mySpace = useSelector(selectMe());
  return (
    <div>
      {Me ? (
        <div>
          <div>
            <h2>My Space</h2>
            <SpaceHeader
              title={Me.mySpace.title}
              description={Me.mySpace.desccription}
              bgColor={Me.mySpace.backgroundColor}
              color={Me.mySpace.color}
            />
          </div>

          {sortedStories.map((story) => {
            return (
              <StoryCard
                id={story.id}
                key={story.id}
                name={story.name}
                content={story.content}
                image={story.imageUrl}
                bgColor={Me.mySpace.backgroundColor}
                color={Me.color}
                handleDeleteStory={handleDeleteStory}
                isMySpace={true}
              />
            );
          })}
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default MySpacePage;
