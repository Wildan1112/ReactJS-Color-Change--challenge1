/* eslint-disable react/prop-types */
const Square = ({ warna, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{ backgroundColor: warna, color: isDarkText ? "#000" : "#fff" }}
    >
      <p>{warna ? warna : "No Color Value"}</p>
      <p>{hexValue ? hexValue : ""}</p>
    </section>
  );
};

Square.defaultProps = {
  warna: "Empty Color Value",
};

export default Square;
