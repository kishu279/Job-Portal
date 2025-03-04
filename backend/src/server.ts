import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

// CORS
app.use((req: Request, res: Response, next: NextFunction): any => {
  // console.log(req.headers.origin);

  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Frontend URL
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTION") {
    return res.status(200).end();
  }

  next();
});

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
