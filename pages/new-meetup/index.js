import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();

  const AddMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meetupData),
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>React Meetups - add new meetup</title>
        <meta
          name="description"
          content="Add new meetup - the react meetups network"
        />
      </Head>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </>
  );
}
