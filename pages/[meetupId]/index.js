import { useRouter } from "next/router";
import { useEffect } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

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

export default function DetailsPage(props) {
  // const router = useRouter();
  // const {
  //   query: { meetupId },
  // } = router;

  // const meetupDetail = meetupId
  //   ? meetupsList.find((m) => m.id === parseInt(router.query.meetupId))
  //   : {};

  return <MeetupDetail meetup={props.meetupDetail} />;
}

export async function getStaticPaths() {
  return {
    fallback: false, //false=all paths are described. true- server will try to generate the rest dynamically
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      meetupDetail: meetupsList.find(
        (m) => m.id === parseInt(context.params.meetupId)
      ),
    },
  };
}
