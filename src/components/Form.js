import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  function handleUpperCase() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }
  function handleLowerCase() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }

  function handleTextChange(event) {
    let addText = event.target.value;
    setText(addText);
  }
  function handleClearText() {
    setText("");
    props.showAlert("Text Box is Cleared!", "success");
  }
  function copyText() {
    // let textCopy = document.getElementById("text");
    // textCopy.select();

    // textCopy.setSelectionRange(0,9999)
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  }
  function removeExtraSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  }
  return (
    <>
      <div
        className="container"
      >
        <div className="mb-3">
          <h3 className="mb-3 mt-5">{props.heading}</h3>
          <textarea
            className="form-control border-yellow-500 border-warning shadow-transparent p-3 mb-5 bg-body-tertiary rounded"
            id="text"
            rows="10"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-success mx-2 mb-3"
            onClick={handleUpperCase}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-warning mx-2  mb-3"
            onClick={handleLowerCase}
          >
            Convert to LowerCase
          </button>

          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-2  mb-3"
            onClick={handleClearText}
          >
            Text Clear
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-danger mx-2  mb-3"
            onClick={copyText}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-info mx-2  mb-3"
            onClick={removeExtraSpace}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div className="container">
        <h3 className="">Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          {0.2 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          minutes to read
        </p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the text box to preview!"}
        </p>
      </div>
    </>
  );
}
