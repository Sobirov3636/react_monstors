import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandeler: (event: ChangeEvent<HTMLInputElement>) => void;
};

function SearchBox({ onChangeHandeler, placeholder, className }: SearchBoxProps) {
  return (
    <input className={`search-box ${className}`} type='search' placeholder={placeholder} onChange={onChangeHandeler} />
  );
}

export default SearchBox;
