import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('initial value');
  const [results, setResults] = useState([]);

  // add debounceTerm to eliminate results.length warning, and also to make sure we won't make double request in the initial render
  const [debounceTerm, setDebounceTerm] = useState(term);

  // use the following 2 useEffect functions to instead of Method 1 useEffect function, still, the purpose is to eliminate results.length warning, and also to make sure we won't make double request in the initial render

  // 1st useEffect func
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(term)
    }, 1000);

    return () => {
      clearTimeout(timerId)
    };
  }, [term]);

  // 2nd useEffect func
  useEffect(() => {
    const search = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debounceTerm
        }
      });


      setResults(response.data.query.search);
    };

    if (debounceTerm) {
      search();
    }



  }, [debounceTerm])



 // The most import thing is we cannot put async awit in the useEffect like this:
 // useEffect( async () => { }, [term])
 // There are 3 methods that we could make async await request in useEffect function

 // Method 1: most recommended
  // useEffect(()=> {
  //   const search = async () => {
  //     const response = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term
  //       }
  //     });


  //     setResults(response.data.query.search);
  //   };

  //   // we want to request search on initial render without waiting
  //   if (term && !results.length) {
  //     search();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeoutId)
  //     };
  //   }
  // }, [term])

  // Method 2: NOT recommend
  // useEffect(()=> {

  //   (async () => {
  //     axios.get('abfjksdfkjds')
  //   })();

  // }, [term])

  // Method 3: use promise
  // useEffect(()=> {

    // axios.get('abfjksdfkjds')
    //   .then((response) => {
    //     console.log(response.data);
    //   });

  // }, [term])

  const renderedResults = results.map((result) => {
    const regex = /(<([^>]+)>)/gi;
    const cleanSnippet = result.snippet.replace(regex, "");

    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </ div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          {cleanSnippet}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            onChange={e => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
};

export default Search;