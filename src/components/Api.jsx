import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Api = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setMyData(res))
      .catch((er) => console.log(er));
  }, []);
  return (
    <>
      <Container>
        {myData.slice(0, 3).map((data) => {
          return (
            <div key={data.id}>
              <img src={data.image} alt="image" />
              <p>{data.title}</p>
              <p>{data.rating.rate}</p>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Api;
