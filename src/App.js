import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React ?",
    content: "React is a JavaScript library for UI",
  },
  {
    title: "Why we use React?",
    content: "React is a famous JavaScript library",
  },
  {
    title: "How do you use React?",
    content: "We use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
    key: "fev",
  },
  {
    label: "The Color Blue",
    value: "blue",
    key: "rvtb",
  },
  {
    label: "The Color Green",
    value: "green",
    key: "fvh45h",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  //const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* {showAccordion()}
         {showList()} */}
      {/* <Search/> */}
      {/* <Accordion items={items}/> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown? <Dropdown  
      selected={selected} 
      onSelectedChange={setSelected} 
      options={options}  
      label={"Select a Color:"} textToShow={"Lets color the text"}/> : null} */}
      {/* {showDropDown()}
       {showTranslate()} */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          label={"Select a Color:"}
          textToShow={"Lets color the text"}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
