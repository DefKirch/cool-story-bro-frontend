import "./styles.css";
const SpaceHeader = ({ title, description, bgColor, color }) => {
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
    </div>
  );
};

export default SpaceHeader;
