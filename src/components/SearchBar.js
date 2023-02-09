import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSbmt }) {
  const [term, setTerm] = useState('');

  // const handleClick = () => {
  //   onSbmt('cars');
  // }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSbmt(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <label>Enter Search Term</label>
      <input value={term} onChange={handleChange} />
    </form>
    {/* <button onClick={handleClick}>search</button> */}
  </div>;
}

export default SearchBar;
