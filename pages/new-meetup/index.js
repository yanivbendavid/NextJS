import NewMeetupForm from "../../components/meetups/NewMeetupForm";
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
    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
}
