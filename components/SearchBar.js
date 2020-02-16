import { useState } from "react";
import Router from 'next/Router';

const SearchBar = () => {
  const [value, setValue] = useState(''); 

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    Router.push({
      pathname: "/search",
      query: { query: value }
    });
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SearchBar;