import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: "Q1",
    content: "content about Q1"
  },
  {
    title: "Q2",
    content: "content about Q2"
  },
  {
    title: "Q3",
    content: "content about Q3"
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },

  {
    label: 'The Color Blue',
    value: 'blue'
  },

  {
    label: 'The Color Green',
    value: 'green'
  }
];

const App =  () => {
  // // we introduce this toggle is to illustrate line 20-22 in Dropdown.js
  // const [toggleDropdown, setToggleDropdown] = useState(true)

  // return (
  //   <div>
  //     <button onClick={() => setToggleDropdown(!toggleDropdown)}>Toggle Dropdown</button>
  //     {toggleDropdown ? <Dropdown
  //       options={options}
  //     />: null}
  //   </div>
  // )

  return (
    <div>
      <Translate />
    </div>
  )
};

export default App;

