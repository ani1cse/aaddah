import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { hello } from "@aaddah/shared";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/carts", (req, res) => {
  res.json({ id: "cart_" + Date.now() });
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});

app.use(cors({ origin: "http://localhost:3000" }));

console.log(hello()); // should log: Hello from @aaddah/shared




