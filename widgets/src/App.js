import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
]

const App =  () => {
  return (
    <div>
      <Search />
    </div>
  )
};

export default App;

