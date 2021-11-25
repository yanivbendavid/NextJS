import MeetupList from "../components/meetups/MeetupList";

const meetupsList = [
  {
    id: 1,
    image: "https://i.ytimg.com/vi/sXHtKlMxY5c/maxresdefault.jpg",
    title: "Eifel Tower",
    address: "France",
    description: "A new meetup below the tower",
  },
  {
    id: 2,
    image:
      "https://i.insider.com/5d38ca7d36e03c5dfa2ed4e3?width=1000&format=jpeg&auto=webp",
    title: "Pisa Tower",
    address: "Italy",
    description: "Meetup at pisa",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: meetupsList,
    },
    revalidate: 10, // if there are new requests, data will be pooled evert 10 secs
  };
}
