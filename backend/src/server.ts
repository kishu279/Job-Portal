import express, { Request, Response } from "express";
import "dotenv/config";
import prisma from "./db/prisma";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

function main() {
  app.listen(3000, () => {
    console.log("server is listening");
  });
}

// routes
app.get("/", async (req: Request, res: Response) => {
  res.send("Hii this side server");
});

app.use("/user", userRoutes);

// main
main();
