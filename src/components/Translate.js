import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Hindi",
    value: "hi",
    key: "vervtb",
  },
  {
    label: "Polish",
    value: "pl",
    key: "fbyn6",
  },
  {
    label: "France",
    value: "fr",
    key: "rgtb5n6n",
  },
  {
    label: "Portugese",
    value: "pt",
    key: "wfge5h4",
  },
  {
    label: "Spanish",
    value: "es",
    key: "efebtbt",
  },
  {
    label: "Japanese",
    value: "ja",
    key: "wgebtbtb",
  },
  {
    label: "Chinese",
    value: "zh",
    key: "typmtojvw",
  },
  {
    label: "Russian",
    value: "ru",
    key: "ewetbrn",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text Here:</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label={"Please Select a Language:"}
        textToShow={"Languages"}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
