import Card from "../ui/Card";
import Link from "next/link";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/${props.meetup.id}`}>Show Details</Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
