import React from "react";

function Form() {
  return (
    <div>
      <p>Search an Artist to learn more about their lyrics below</p>
      <form>
        <input
          className="artistinput"
          type="text"
          placeholder="Enter the Artist's name here..."
        />
        <br />
        <input
          type="submit"
          onSubmit={e => {
            e.preventDefault();
          }}
        />
      </form>
    </div>
  );
}

export default Form;
