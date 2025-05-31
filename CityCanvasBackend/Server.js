import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let ticketCount = 1;

app.get("/api/raffle-status", (req, res) => {
  const { userId } = req.query;
  console.log(userId);
	res.json({ tickets: ticketCount });
});

app.post("/api/raffle-entry", (req, res) => {
	ticketCount++;
	res.json({ success: true, tickets: ticketCount });
});

app.listen(PORT, () => {
	console.log(`✅ Server running on http://localhost:${PORT}`);
});
