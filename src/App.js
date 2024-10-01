import "./App.css";
import Form from "./components/Form";
import React, { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const [mode, setMode] = useState("light");

  function changeMode() {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      <div className={`bg-${mode} text-${mode === "light" ? "dark" : "light"}`}>
        <div
          className={`d-lg-flex d-md-flex d-sm-block text-center justify-content-around align-items-center px-5 py-3 bg-${
            mode === "light" ? "warning" : "danger"
          }`}
        >
          <h1 className="text-center mb-4">Text Utilities</h1>

          <div className="form-check form-switch d-flex justify-content-center gap-3">
            <input
              onClick={changeMode}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
        <Alert setalert={alert} />

        <Form
          heading="Utilities - Word Counter, Character Counter, Copy Text, Remove Extra Space"
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
