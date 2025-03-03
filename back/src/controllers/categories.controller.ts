import { Request, Response } from "express";
import { getCategoriesService } from "../services/categories.service";
import { catchedController } from "../utils/catchedController";

export const getCategories = catchedController(
  async (req: Request, res: Response) => {
    const categories = await getCategoriesService();
    res.json(categories);
  }
);