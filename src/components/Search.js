import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedterm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  useEffect(() => {
    if (!debouncedterm) return; // guard clause to protect initial rendering
    //Method 1 to declare async function inside useEffect
    //  const serach=async () =>{
    //    await axios.get('f3rvg3r');
    //  }
    //  search();

    //Method 2 use Iffie
    const timer = setTimeout(() => {
      (async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: debouncedterm,
          },
        });
        setResults(data.query.search);
      })();
    }, 1000);

    //Method 3  promises
    //axios.get('f3rvg3r').then( response => console.log(response))

    //Cleaning up the timer
    return () => {
      clearTimeout(timer);
    };
  }, [debouncedterm]);

  const inputTermHandler = (term) => {
    setTerm(term);
  };

  const RenderedResults = results.map((e) => {
    return (
      <div className="item" key={e.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${e.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{e.title}</div>
          <span dangerouslySetInnerHTML={{ __html: e.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search Term</label>
          <input
            value={term}
            onChange={(e) => inputTermHandler(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{RenderedResults}</div>
    </div>
  );
};

export default Search;
