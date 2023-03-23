import React from "react";
import "./Class.css";


class Class extends React.Component {
  render() {
    return (
     <>
      <div className="div-c">
        <div className="div-c-i">
          <h1>This Is Created Using class Component</h1>
          <p>This is done using external CSS</p>
          <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
      </div>
    </>
  );
  }
}
 
// export default App;

// const Class = () => {
//   return (
//     <>
//       <div className="div-c">
//         <div className="div-c-i">
//           <h1>This Is Created Using class Component</h1>
//           <p>This is done using external CSS</p>
//           <p style={{color:"blue"}}>This is done using inline CSS</p>
//         </div>
//       </div>
//     </>
//   );
// };

export default Class;
