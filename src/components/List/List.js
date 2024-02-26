import { Container, Row, Col } from "react-bootstrap";

import Card from "../Card/Card";

import list from "./List.module.scss";

const List = () => (
  <section className={list.list}>
    <Container className={list.container} fluid="xl">
      <h2 className={list.title}>Working with GET request</h2>
      <Row className={list.cards} xs={1} md={2} lg={3}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Row>
      <button className={list.button}>Show more</button>
    </Container>
  </section>
);
export default List;
