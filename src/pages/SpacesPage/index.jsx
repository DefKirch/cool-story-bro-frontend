import { useEffect } from "react";
import { fetchSpaces } from "../../store/spaces/thunks";
import { useDispatch, useSelector } from "react-redux";
import SpaceCard from "../../components/SpaceCard";
import { selectSpaces } from "../../store/spaces/selectors";

const SpacesPage = () => {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  console.log("SpacePage", spaces);
  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <div>
      {spaces
        ? spaces.map((space) => {
            return (
              <SpaceCard
                key={space.id}
                id={space.id}
                title={space.title}
                description={space.description}
                backgroundColor={space.backgroundColor}
                color={space.color}
              />
            );
          })
        : "Loading"}
    </div>
  );
};

export default SpacesPage;
