import ColorSquare from "../ColorSquare";

// React component - function that outputs something visual
const Palette = ({ colors, dimensionPerSquare }) => {
  return (
    <div className="palette">
      {colors.map((color) => (
        <ColorSquare color={color} dimensions={dimensionPerSquare} />
      ))}
    </div>
  );
};

export default Palette;
