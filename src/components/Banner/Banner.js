import Container from "react-bootstrap/Container";

import banner from "./Banner.module.scss";

const Banner = () => (
  <section className={banner.banner}>
    <Container className={banner.container} fluid="xl">
      <h1 className={banner.title}>Test assignment for front-end developer</h1>
      <p className={banner.text}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <a href="/" className={banner.link}>
        Sign up
      </a>
    </Container>
  </section>
);
export default Banner;
