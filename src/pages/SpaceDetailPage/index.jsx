import StoryCard from "../../components/StoryCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceWithStories } from "../../store/spaces/thunks";
import { useParams } from "react-router-dom";
import { selectSpaceWithStories } from "../../store/spaces/selectors";
import "./styles.css";

const SpaceDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const oneSpace = useSelector(selectSpaceWithStories);
  const [sortedStories, setSortedStories] = useState([]);

  const sortStoriesByDate = () => {
    const storiesToSort = [...oneSpace.stories];
    setSortedStories(storiesToSort.sort((a, b) => a.createdAt - b.createdAt));
  };

  useEffect(() => {
    if (oneSpace) {
      sortStoriesByDate();
    }
  }, [oneSpace, dispatch]);

  useEffect(() => {
    dispatch(fetchSpaceWithStories(id));
  }, [dispatch, id]);
  // console.log(oneSpace);
  return (
    <div>
      {oneSpace ? (
        <div>
          <div
            className="Space-Header"
            style={{
              backgroundColor: oneSpace.backgroundColor,
              color: oneSpace.color,
            }}
          >
            <h1>{oneSpace.title}</h1>
            <p>{oneSpace.description}</p>
          </div>
          {sortedStories.map((story) => {
            return (
              <StoryCard
                key={story.id}
                name={story.name}
                content={story.content}
                image={story.imageUrl}
                bgColor={oneSpace.backgroundColor}
                color={oneSpace.color}
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

export default SpaceDetailPage;
