import { useState } from "react";

// function App() {
//   let data = "simmi hye ";
//   return (
//     <div className="App">
//       <h2> {data}</h2>
//       <button> click me </button>
//     </div>
//   );
// }
// export default App;

function App() {
  const [data, setData] = useState(0);
  function updateData() {
    setData(data+1);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>update data</button>
    </div>
  );
}
export default App;
