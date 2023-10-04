import ProductCard from "@/app/components/products/product-card";
import data from "@/app/data/products";
import { Product } from "@/app/types.d"

interface Props {
	product: Product
}

export default function Catalogue({
    showGrid = false,
    exclude = []
}: {
    showGrid: boolean,
    exclude: string[]
}) {
    const products = data.map(product => {
        return <ProductCard 
            key={product.id}
            product={product}
        />
    })
    if (exclude.length > 0) {
        exclude.forEach(excluded => {
            const index = products.findIndex(product => product.key == excluded)
            products.splice(index, 1)
        })
    }
    if (showGrid) {
        return (
            <div className="bg-orange w-full flex justify-center mx-auto pb-14">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {products}
                </div>
            </div>
        )
    } else {
        return (
            <div className="bg-orange overflow-x-auto w-full flex justify-center md:justify-start">
                <div className="flex flex-col gap-10 py-14 md:flex-nowrap md:justify-start md:flex-row md:px-10">
                    {products}
                </div>
            </div>
        )
    }
}