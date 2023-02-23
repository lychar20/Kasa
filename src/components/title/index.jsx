import "./title.scss";

function Title({ name, city }) {
  return (
    <div className="title">
      <h1 className="title_apart"> {name} </h1>
      <div className="location"> {city} </div>
    </div>
  );
}

export default Title;
