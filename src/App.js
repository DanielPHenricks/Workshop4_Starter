import { useState } from "react";
// Component Imports

// Just a simple component to show the power of React.
import ExampleComponent from './components/ExampleComponent.js';

const App = () => {

  const name = "(your name)";



  // A helper method we will use later.
  const getFormattedDate = () => {
    const curr = new Date(Date.now());
    // note: the month is zero-indexed.
    return `${curr.getMonth() + 1}/${curr.getDate()} at ${curr.getHours() % 12}:${curr.getMinutes()}: `
  }


  // This is the structure of our app.
  return (
    <div className="container">
      <ExampleComponent name={name} />
    </div>
  );
};

export default App;
