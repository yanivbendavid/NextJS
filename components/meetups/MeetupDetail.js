import styles from "./MeetupDetail.module.css";

export default function MeetupDetail(props) {
  return (
    <section className={styles.detail}>
      <img alt={props.meetup.title} src={props.meetup.image} />
      <h1>{props.meetup.title}</h1>
      <address>{props.meetup.address}</address>
      <p>{props.meetup.description}</p>
    </section>
  );
}
