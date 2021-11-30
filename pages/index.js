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

/*
export async function getServerSideProps(context) {
  const { req, res } = context;

  return {
    props: {
      meetups: meetupsList,
    },
  };
}
*/

// this function can only be used on page (not on component)
//credentials can also be filled here (server side function)
export async function getStaticProps() {
  return {
    props: {
      meetups: meetupsList,
    },
    revalidate: 30,
    // if there are new requests, data will be pooled evert x secs.
    //this is optional and if not specified that it will be cached only after each build
  };
}
