const ListDisplayHeader = ({ title, number }) => {
  return (
    <>
      {" "}
      <header className="workHeader">
        <h1>{title}</h1>
        <h2>{number}</h2>
      </header>
    </>
  );
};

export default ListDisplayHeader;
