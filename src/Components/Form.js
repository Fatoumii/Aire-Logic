import React from "react";

function Form() {
  return (
    <div>
      <p>Search an Artist to learn more about their lyrics below</p>
      <form onSubmit={e => e.preventDefault()}>
        <input
          className="artistinput"
          type="text"
          placeholder="Enter the Artist's name here..."
        />
        <br />
        <button type="submit">Get Results</button>
      </form>
    </div>
  );
}

export default Form;
