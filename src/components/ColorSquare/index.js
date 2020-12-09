//react component is a function that outputs something visual

const ColorSquare = ({color="255,0,0", dimensions=200}) => {
   return (
     <div
       className="color-square"
       style={{
         width: `${dimensions}px`,
         height: `${dimensions}px`,
         background: `rgb(${color})`,
       }}
     ></div>
     >
       <span>{color}</span>
   );
 };

export default ColorSquare;
