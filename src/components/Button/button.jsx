import "../Button/button.css";
export const Button = (props) => {
  const { children, type, onClick } = props;
  return (
    <div>
      <button className={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
