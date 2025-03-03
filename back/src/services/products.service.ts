import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};
export const getProductService = async (id: number): Promise<Product> => {
  const product = await ProductRepository.findOneBy({id});
  if (!product) throw new Error('No se encontro el producto');
  return product;
};
