import 'dotenv/config'
import express from "express";
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = process.env.NODE_PORT;

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/about", (req,res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});
app.get("/contact-me", (req,res) => {
  res.sendFile(path.join(__dirname, 'contac~t-me.html'));
});
app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});


app.listen(port, (error) => {

  if (error){
    throw error;
  }
  console.log(`Server running at http://localhost:${port}`);
});

