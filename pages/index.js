import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// this function can only be used on page (not on component)
//credentials can also be filled here (server side function)
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://yaniv:yaniv1981@reactdemoproject.sge8j.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collection = await db.collection("meetup");
  const list = await collection.find().toArray();
  client.close();

  // const meetups = list.map((l) => {
  //   const o = Object.assign(l, { id: l._id.toString() });
  //   delete o._id;
  //   return o;
  // });

  // const meetups = list.map((l) =>
  //   Object.assign(l, { id: l._id.toString(), _id: "" })
  // );

  const meetups = list.map((l) =>
    Object.assign(
      { id: l._id.toString() },
      Object.fromEntries(
        Object.keys(l)
          .filter((key) => key !== "_id")
          .map((key) => [key, l[key]])
      )
    )
  );

  return {
    props: {
      meetups,
    },
    revalidate: 30,
    // if there are new requests, data will be pooled evert x secs.
    //this is optional and if not specified that it will be cached only after each build
  };
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
