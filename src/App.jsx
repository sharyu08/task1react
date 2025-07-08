import React from "react";
import contacts from "./contacts.js";
import Card from "./Card2.jsx";


function App() {
  return (
    <div>
    <h1 className="Heading">Contact Cards</h1>
    <div className="cardcontainer">
      <Card
        img={contacts[0].image}
        name={contacts[0].name}
        age={contacts[0].age}
        email={contacts[0].email}
      />
      <Card
        img={contacts[1].image}
        name={contacts[1].name}
        age={contacts[1].age}
        email={contacts[1].email}
      />
      <Card
        img={contacts[2].image}
        name={contacts[2].name}
        age={contacts[2].age}
        email={contacts[2].email}
      />
    </div>
    </div>
  );
}

export default App;
