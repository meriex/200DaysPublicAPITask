import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

// API Endpoint
app.get('/', (req, res) => {
  res.json({
      email: "Chiemeriennamoko7@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/meriex/200DaysPublicAPITask.git"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});