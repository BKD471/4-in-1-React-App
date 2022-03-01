import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({
  options,
  selected,
  onSelectedChange,
  label,
  textToShow,
}) => {
  // const filtered=options.filter(e=> e.label!==selected.label);
  // console.log(filtered)
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBdyClick = (event) => {
      //Approach 1:  use classList
      //if(event.target.classList.contains('ui') || event.target.classList.contains('item')) return;

      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBdyClick, {
      capture: true,
    });

    return () => {
      document.body.removeEventListener("click", onBdyClick, { capture: true });
    };
  }, []);

  const renderedItems = options.map((item) => {
    if (selected.label === item.label) return null;
    return (
      <div
        key={item.key}
        className="item"
        onClick={() => onSelectedChange(item)}
      >
        {item.label}
      </div>
    );
  });

  const dropDownHandler = () => {
    setOpen(!open);
  };

  const isToggleForSelection = open ? "visible active" : "";
  const isToggleForMenu = open ? "visible transition" : "";

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={(e) => dropDownHandler()}
          className={`ui selection dropdown ${isToggleForSelection}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isToggleForMenu}`}>{renderedItems}</div>
        </div>
        <p style={{ color: `${selected.value}` }}>{textToShow}</p>
      </div>
    </div>
  );
};

export default Dropdown;
