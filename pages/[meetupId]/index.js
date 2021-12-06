import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function DetailsPage(props) {
  return (
    <>
      <Head>
        <title>React Meetups - {props.meetup.description}</title>
        <meta
          name="description"
          content={`Amazing meetups all around the world - ${props.meetup.description}`}
        />
      </Head>
      <MeetupDetail meetup={props.meetup} />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://yaniv:yaniv1981@reactdemoproject.sge8j.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = await client.db();
  const collection = db.collection("meetup");
  const ids = await collection.find({}, { projection: { _id: 1 } }).toArray();
  client.close();

  return {
    fallback: "blocking", //false=all paths are described. true- server will try to generate the rest dynamically
    paths: ids.map((id) => ({
      params: {
        meetupId: id._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://yaniv:yaniv1981@reactdemoproject.sge8j.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = await client.db();
  const collection = db.collection("meetup");
  const meetup = await collection.findOne({
    _id: ObjectId(context.params.meetupId),
  });
  client.close();
  meetup.id = meetup._id.toString();
  delete meetup._id;

  return {
    props: { meetup },
  };
}
