import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService, getProductService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProduct = catchedController(
  async (req: Request, res: Response) => {
    const {id} = req.params;
    const product = await getProductService(Number(id));
    res.json(product);
  }
);


