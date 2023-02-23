import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./home.scss";
import Banner from "components/banner/index";
import IMG from "assets/image/IMG.png";
import Card from "components/card";

function Home() {
  const bannerTxt = "Chez vous partout et ailleurs";

  const [data, setData] = useState([]);
  const getData = () => {
    fetch("./logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Banner img={IMG} txt={bannerTxt} />

      <div className="Card_groupe">
        {data.map((appart, id) => (
          <Link
            className="link_card_logement"
            to={`/logement/${appart.id}`}
            key={id}
          >
            <Card cover={appart.cover} title={appart.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
