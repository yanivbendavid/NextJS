import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const AddMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
}
