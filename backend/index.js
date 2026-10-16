import express from "express";

 
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 2,
      title: "Another joke",
      content: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 3,
      title: "Another joke",
      content: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 4,
      title: "Another joke",
      content: "Why don't scientists trust atoms? Because they make up everything!"
    }
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}) 