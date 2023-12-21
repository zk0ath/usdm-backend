import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/mint', async (req: Request, res: Response) => {
  const { method, params } = req.body;

  if (!method) {
    return res.status(400).json({ error: "Method not specified" });
  }

  try {
    const result = { success: true, data: `Method ${method} called with params ${JSON.stringify(params)}` }; 
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
