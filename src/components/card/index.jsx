import "./card.scss";

function Card({ cover, title }) {
  return (
    <article className="card">
      {<img src={cover} alt="location" className="card_pic" />}

      <div className="card_txt"> {title} </div>
    </article>
  );
}

export default Card;
