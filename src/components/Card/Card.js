import Image from "react-bootstrap/Image";
import card from "./Card.module.scss";

const Card = ({ name, email, phone, position, photo }) => (
  <article className={card.card}>
    <Image src={photo} className={card.image} roundedCircle />

    <h3 className={`${card.text} ${card.name}`}>{name}</h3>
    <p className={`${card.text}`}>{position}</p>
    <p className={`${card.text}`}>{email}</p>
    <p className={`${card.text}`}>{phone}</p>
  </article>
);

export default Card;
