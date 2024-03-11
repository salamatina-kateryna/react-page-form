import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import getData from "../../api/api";
import Card from "../Card/Card";

import list from "./List.module.scss";

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const data = await getData();
      setData(data?.users);
    };
    fetchDataFromApi();
  }, []);

  const loadMore = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);

    const nextPageData = await getData(nextPage);
    console.log(nextPageData);

    setData((data) => {
      return [...data, ...nextPageData?.users];
    });
  };

  return (
    <section className={list.list}>
      <Container className={list.container} fluid="xl">
        <h2 className={list.title}>Working with GET request</h2>
        <Row className={list.cards} xs={1} md={2} lg={3}>
          {data?.map((user) => {
            return <Card {...user} key={user.id} />;
          })}
        </Row>
        <button className={list.button} onClick={loadMore}>
          Show more
        </button>
      </Container>
    </section>
  );
};

export default List;
