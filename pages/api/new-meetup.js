import {MongoClient} from "mongodb";

const handler = async (req, res) => {

  if(req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://admin:cZA4gldCSqDP6EFT@max-react.33ucdz2.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({message:'Meetup added!'});

  }
}

export default handler;