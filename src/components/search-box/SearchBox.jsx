import "./search-box.styles.css";

function SearchBox({ onChangeHandeler, placeholder, className }) {
  return (
    <input className={`search-box ${className}`} type='search' placeholder={placeholder} onChange={onChangeHandeler} />
  );
}

export default SearchBox;
