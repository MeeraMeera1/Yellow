//react component is a function that outputs something visual

const ColorSquare = ({ color, dimensions }) => {
  return (
    <div
      style={{
        width: `${dimensions}px`,
        height: `${dimensions}px`,
        background: `rgb(${color})`,
      }}
    ></div>
  );
};

export default ColorSquare;
