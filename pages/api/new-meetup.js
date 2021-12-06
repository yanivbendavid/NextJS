import { MongoClient } from "mongodb";

/*
//simpler approach
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://yaniv:yaniv1981@reactdemoproject.sge8j.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetup");
      const result = await meetupsCollection.insertOne(req.body);
      // res.status(201).json({ message: "meetup inserted" });
      return result.acknowledged
        ? res.status(201).json({ message: "meetup inserted" })
        : res.status(400).json({ message: "bad request" });
      client.close();
    } catch (error) {
      console.error(error.message);
      client.close();
    }
  }
}
*/

export default async function (req, res) {
  return new Promise((resolve, reject) => {
    if (req.method === "POST") {
      MongoClient.connect(
        "mongodb+srv://yaniv:yaniv1981@reactdemoproject.sge8j.mongodb.net/meetups?retryWrites=true&w=majority"
      )
        .then((client) =>
          client
            .db()
            .collection("meetup")
            .insertOne(req.body)
            .then(() =>
              resolve(res.status(201).json({ message: "meetup inserted" }))
            )
        )
        .catch((err) => {
          console.error(err.message);
          reject("error connecting");
        });
    }
  });
}
