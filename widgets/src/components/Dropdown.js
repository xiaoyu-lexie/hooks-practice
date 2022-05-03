import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options}) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    }
    document.body.addEventListener('click', onBodyClick, { capture: true });

    // this return function is automatically invoked when we return null in line 44-46 in App.js
    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };
  }, []);

  const onSlectedChange = (option) => {
    setSelected(option)
  }

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.label}
        className="item"
        onClick={() => onSlectedChange(option)}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`} >
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dropdown;