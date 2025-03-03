import { getProductById } from "@/services/products";
import ProductDetail from "@/views/ProductDetail";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  try {
    const product = await getProductById(id);
    return (
      <div>
        <ProductDetail {...product} />
      </div>
    )
  } catch (error) {
    console.warn(error)
    return <div className="border-none m-auto rounded-xl w-1/2 mt-4 p-4 bg-gradient-to-b from-custom-primary-2 to-custom-primary-3
    text-center text-gray-900">
        <p>No se encontro el producto</p>
      </div>
  }
}

export default Page