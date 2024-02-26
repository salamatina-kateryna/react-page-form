import Image from "react-bootstrap/Image";
import card from "./Card.module.scss";

const Card = () => (
  <article className={card.card}>
    <Image src="/assets/img/avatar.png" className={card.image} roundedCircle />

    <h3 className={`${card.text} ${card.name}`}>
      Salvador Stewart Flynn Thomas McGregor Taylor
    </h3>
    <p className={`${card.text} ${card.position}`}>
      Frontend Developer Frontend Developer Frontend Developer
    </p>
    <p className={`${card.text} ${card.position}`}>
      frontend_develop@gmail.com
    </p>
    <p className={`${card.text} ${card.position}`}>+38 (098) 278 44 24</p>
  </article>
);

export default Card;
