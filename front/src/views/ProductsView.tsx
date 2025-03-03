import CategoryFilter from "@/components/CategoryFilter"
import AllProducts from "@/components/AllProducts"
import { getCategories } from "@/services/categories"
import { getProducts } from "@/services/products"
import { Suspense } from "react"


const ProductsView: React.FC = async () => {
  try {
    const categories = await getCategories()
    const products = await getProducts();
    
    return ( <div>
      <Suspense>
        <CategoryFilter categories={categories} />
        <AllProducts products={products} />
      </Suspense>
    </div>)
  } catch (error) {
    console.warn(error)
    return (<span>No se pudo obtener nada</span>)
  }
 

}

export default ProductsView