import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rate from "components/rate/index";
import Carousel from "components/carousel/index";
import { useNavigate } from "react-router-dom";
import Title from "components/title";
import Tag from "components/tags";
import Host from "components/host";
import "./housing.scss";
import Collapse from "components/collapse";

function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("/logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const apart = data.find((item) => item.id === id);

        if (!apart) navigate("components/Error/index");
        setData(apart);
      })

      .catch(function (err) {});
  };
  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="Page_entiere">
      <main className="main">
        {" "}
        {data.pictures ? <Carousel photo={data.pictures} /> : ""}{" "}
      </main>

      <section className="section">
        <div className="bloc_one">
          <Title name={data.title} city={data.location} />
          <Tag des={data.tags} />
        </div>

        <div className="bloc_two">
          {data.pictures ? (
            <Host nickname={data.host.name} avatar={data.host.picture} />
          ) : (
            ""
          )}
          <Rate rate={data.rating} className="rate" />
        </div>
      </section>

      <article className="article">
        <div className="bloc_three">
          <Collapse
            key={id}
            aboutTitle={"Description"}
            aboutText={data.description}
          />
        </div>

        <div className="bloc_four">
          <Collapse
            aboutTitle={"Equipements"}
            aboutText={data.equipments?.map((equip, furn) => (
              <p key={furn}> {equip} </p>
            ))}
          />
        </div>
      </article>
    </div> //fin de div page entiere
  );
}

export default Housing;





