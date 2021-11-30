import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    /*const {body: { title, image, address, description },} = req;*/

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://yaniv:yaniv1981@reactdemoproject.sge8j.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetup");
      const result = await meetupsCollection.insertOne(req.body);
      console.log(result);
      client.close();
      res.status(201).json({ message: "meetup inserted" });
    } catch (error) {
      console.log(error);
    }
  }
}
