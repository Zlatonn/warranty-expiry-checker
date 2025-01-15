import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

// use cors to allow all domain
app.use(cors());

// use cors to allow specfic domain
// app.use(
//   cors({
//     origin: "http://localhost:5173", // อนุญาตให้โดเมนนี้เข้าถึง
//   })
// );

const items = [
  {
    id: 1,
    itemName: "mouse",
    serialNumber: "xxx-xxx-xx1",
    startDate: "2024-01-01",
    endDate: "2025-01-01",
    notes: "Wireless mouse",
  },
  {
    id: 2,
    itemName: "keyboard",
    serialNumber: "xxx-xxx-xx2",
    startDate: "2023-06-15",
    endDate: "2024-06-15",
    notes: "Mechanical keyboard with RGB",
  },
  {
    id: 3,
    itemName: "monitor",
    serialNumber: "xxx-xxx-xx3",
    startDate: "2022-11-01",
    endDate: "2025-11-01",
    notes: "Curved 27-inch monitor",
  },
  {
    id: 4,
    itemName: "headphones",
    serialNumber: "xxx-xxx-xx4",
    startDate: "2023-07-10",
    endDate: "2024-07-10",
    notes: "Noise-canceling over-ear headphones",
  },
  {
    id: 5,
    itemName: "laptop",
    serialNumber: "xxx-xxx-xx5",
    startDate: "2024-01-10",
    endDate: "2025-01-10",
    notes: "Gaming laptop with high refresh rate",
  },
  {
    id: 6,
    itemName: "printer",
    serialNumber: "xxx-xxx-xx6",
    startDate: "2021-04-05",
    endDate: "2024-04-05",
    notes: "All-in-one color printer",
  },
  {
    id: 7,
    itemName: "router",
    serialNumber: "xxx-xxx-xx7",
    startDate: "2023-09-20",
    endDate: "2024-09-20",
    notes: "Wi-Fi 6 router",
  },
  {
    id: 8,
    itemName: "external hard drive",
    serialNumber: "xxx-xxx-xx8",
    startDate: "2023-02-25",
    endDate: "2025-02-25",
    notes: "1TB external hard drive",
  },
  {
    id: 9,
    itemName: "webcam",
    serialNumber: "xxx-xxx-xx9",
    startDate: "2023-12-01",
    endDate: "2025-12-01",
    notes: "HD webcam",
  },
  {
    id: 10,
    itemName: "tablet",
    serialNumber: "xxx-xxx-xx10",
    startDate: "2024-03-01",
    endDate: "2025-03-01",
    notes: "10-inch tablet for drawing",
  },
  {
    id: 11,
    itemName: "smartwatch",
    serialNumber: "xxx-xxx-xx11",
    startDate: "2024-05-01",
    endDate: "2025-05-01",
    notes: "Fitness smartwatch with heart rate monitor",
  },
  {
    id: 12,
    itemName: "digital camera",
    serialNumber: "xxx-xxx-xx12",
    startDate: "2023-08-15",
    endDate: "2024-08-15",
    notes: "Compact digital camera for photography",
  },
];

// path for get all items
app.get("/items", (req: Request, res: Response) => {
  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
