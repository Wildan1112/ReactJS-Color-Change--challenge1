/* eslint-disable react/prop-types */
import colorNames from "colornames";

const Input = ({ warna, setWarna, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color">Add Color Name</label>
      <input
        type="text"
        autoFocus
        placeholder="Add Color Name"
        value={warna}
        onChange={(e) => {
          setWarna(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
