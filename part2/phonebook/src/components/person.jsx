import React from "react";

const Person = ({ personsToShow, deleteContact }) => {
  return personsToShow.map((p) => (
    <div>
      <p>
        {p.name} {p.number}
        <button onClick={() => deleteContact(p.id, p.name)}>Delete</button>
      </p>
      
    </div>
  ));
};

export default Person;
