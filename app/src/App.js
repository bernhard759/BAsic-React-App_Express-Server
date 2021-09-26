import React from "react";

function App() {

  // useState hook
  const [data, setData] = React.useState(null);

  // useEffect hook
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.name));
  }, []);


  return (
    <div>
      <p>The random name from express is {data}</p>
    </div>
  );

}

export default App;
