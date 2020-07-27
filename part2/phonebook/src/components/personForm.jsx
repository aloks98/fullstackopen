import React from "react";

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addContact}>
      <div>
        name: <input value={props.newName} onChange={props.handlePhonebookChange} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;