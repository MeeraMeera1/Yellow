import Palette from "./components/Palette";
import { NavLink, Route, Switch, useParams } from "react-router-dom";

const palettes = {
  cool: {
    title: "A Cool Palette",
    colors: ["131,59,36", "120,104,44", "53,68,65", "123,129,118", "96,104,99"],
  },
  dalmond: {
    title: "Essence of Dalmond",
    colors: ["255,235,205", "179,169,144", "255,252,243", "255,248,230"],
  },
  joe: {
    title: "Joe's Room during EOD",
    colors: ["0,0,0", "70,70,125"],
  },
};

const PaletteContainer = () => {
  const paletteCodeInURL = useParams().paletteCode;
  const paletteToUse = palettes[paletteCodeInURL];
  if (!paletteToUse) {
    return (
      <h4>
        Uhhhhhhhhhh ... how'd you get here? I don't know about{" "}
        {paletteCodeInURL}
      </h4>
    );
  }
  return (
    <div className="palette-wrapper">
      <h1>{paletteToUse.title}</h1>
      <Palette colors={paletteToUse.colors} dimensionPerSquare={150} />
    </div>
  );
};

function App() {
  return (
    <div id="top-level-app">
      <ul>
        <li>
          <NavLink to="/palettes/cool">A Cool Palette</NavLink>
        </li>
        <li>
          <NavLink to="/palettes/dalmond">Essence of Dalmond</NavLink>
        </li>
        <li>
          <NavLink to="/palettes/joe">Joe's Room During EOD</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/palettes/:paletteCode">
          <PaletteContainer />
        </Route>
        <Route>
          <h4>Hey you! Select a fancy palette you wanna see!</h4>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
