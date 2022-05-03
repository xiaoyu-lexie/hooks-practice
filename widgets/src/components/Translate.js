import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

const Translate = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSlectedChange={setLanguage}
        label="Select a Language"/>

      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;