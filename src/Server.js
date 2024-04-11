import express from "express";
import { connect} from "mongoose";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors"

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;
connect(URI_DB);

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json())
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server: is running on port ${PORT}`);
});
