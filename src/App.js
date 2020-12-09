import ColorSquare from "./components/ColorSquare/index";
const colors = ["255,0,255", "0,0,76", "0,100,255", "8,0,7", "165,187,255"];


function App() {
  const colorComponents = colors.map((colorString) => {
    return <ColorSquare color={colorString} dimensions={30} />;
  });

  return (
    <div>
      <ColorSquare color={"0,0,255"} dimensions={200} />
      <ColorSquare color={"255,0,0"} dimensions={50} />
      <ColorSquare color={"0,255,0"} dimensions={400} />
      {colorComponents}
    </div>
  );
}

export default App;
