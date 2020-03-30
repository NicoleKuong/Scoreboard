import React, { useState } from "react";
export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");
  const handleChange = event => {
    console.log("new input .value:", event.target.value, name);
    return set_name(event.target.value);
  };

  const onClickAddPlayer = () => {
    console.log("name", name);
    props.addPlayer(name);
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={props.name}
          onChange={handleChange}
        />{" "}
        <button onClick={onClickAddPlayer}>Add</button>
      </p>
    </div>
  );
}
