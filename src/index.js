import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
  cors({
    // origin: process.env.WHITELISTED_DOMAIN
    //   ? process.env.WHITELISTED_DOMAIN.split(" ")
    //   : undefined,
  })
);

import authRouter from './routes/authRouter';

// app.use("/", (req: Request, res: Response) => {
// 	res.status(200).send({data: "Hello World"});
// });

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
