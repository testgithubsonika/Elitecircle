
//in package.json type= "module"because we using export not require

import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
// app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});