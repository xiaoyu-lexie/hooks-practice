import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

// the following 4 is the basic component routing
// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />
//   }
// }

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />
//   }
// }

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />
//   }
// }

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />
//   }
// }

const App =  () => {
  // // we introduce this toggle is to illustrate removeEventListerner in useEffect return function in Dropdown.js
  // const [toggleDropdown, setToggleDropdown] = useState(true)

  // return (
  //   <div>
  //     <button onClick={() => setToggleDropdown(!toggleDropdown)}>Toggle Dropdown</button>
  //     {toggleDropdown ? <Dropdown
  //       options={options}
  //     />: null}
  //   </div>
  // )

  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}

      <Header />

      <Route path="/">
        <Accordion items={items}/>
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
};

export default App;

