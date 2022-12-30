import "../Paper/styles.css";

export const Paper = (props) => {
  const { width, height, children } = props;
  return (
    <div className="paper" style={{ width: width, height: height }}>
      {children}
    </div>
  );
};
