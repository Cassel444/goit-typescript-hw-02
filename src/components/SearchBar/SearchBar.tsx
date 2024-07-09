import css from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SlMagnifier } from "react-icons/sl";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSearch(query);
    setQuery("");
  };
  return (
    <header className={css.box}>
      <h1 className={css.logo}>PhotoScout</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <SlMagnifier className={css.search} />
        </button>
        <Toaster />
      </form>
    </header>
  );
}
export default SearchBar;
