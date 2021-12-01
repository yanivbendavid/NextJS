import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://yaniv:yaniv1981@reactdemoproject.sge8j.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetup");
      const result = await meetupsCollection.insertOne(req.body);
      client.close();
      res.status(201).json({ message: "meetup inserted" });
    } catch (error) {
      console.log(error);
    }
  }
}

/*
export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    if (req.method === "POST") {
      try {
        MongoClient.connect(
          "mongodb+srv://yaniv:yaniv1981@reactdemoproject.sge8j.mongodb.net/meetups?retryWrites=true&w=majority"
        )
          .then((db) => db.collection("meetup"))
          .then((result) => result.insertOne(req.body));
        client.close();
        resolve();
      } catch (error) {
        console.log(error);
        reject("error connecting");
      }
    }
  });
}
*/
