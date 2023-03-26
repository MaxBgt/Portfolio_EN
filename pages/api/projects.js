import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "data.json");
export default function handler(req, res) {
  if (req.method === "GET") {
    const jsonData = fs.readFileSync(dataFilePath, "utf-8");
    const data = JSON.parse(jsonData);
    res.status(200).json(data.projects);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
