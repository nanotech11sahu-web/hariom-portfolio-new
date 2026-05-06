import express from "express";
import { MongoClient } from "mongodb";

const router = express.Router();

let _client = null;

async function getDb() {
  if (!_client) {
    _client = new MongoClient(process.env.MONGODB_URI);
    await _client.connect();
  }
  return _client.db();
}

// POST /api/contact
router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Name, email and message are required.",
    });
  }

  try {
    const db = await getDb();
    const result = await db.collection("contacts").insertOne({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || "",
      message: message.trim(),
      createdAt: new Date(),
    });

    return res.status(201).json({
      message: "Message saved!",
      id: result.insertedId,
    });
  } catch (err) {
    console.error("MongoDB error:", err);
    return res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
});

export default router;