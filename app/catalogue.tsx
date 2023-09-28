import ProductCard from "./product-card";
import data from "./products";

export default function Catalogue({
    showHome = false
}: {
    showHome: boolean
}) {
    const products = data.map(product => {
        return <ProductCard 
            key={product.id}
            id = {product.id}
            name={product.name}
            URLname={product.URLname}
            description={product.description}
            price={product.price}
            mainImg={product.mainImg}
            otherImgsArray={product.otherImgs}
        />
    })
    if (showHome) {
        return (
            <div className="bg-orange overflow-x-auto w-full flex justify-center md:justify-start">
                <div className="flex flex-col gap-10 py-14 md:flex-nowrap md:justify-start md:flex-row md:px-10">
                    {products}
                </div>
            </div>
        )
    } else {
        return (
            <div className="bg-orange w-full flex justify-center mx-auto pb-14">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {products}
                </div>
            </div>
        )
    }
}