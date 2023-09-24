import ProductCard from "./product-card";

export default function Catalogue() {
    return (
        <div className="bg-orange overflow-x-auto w-full flex justify-center md:justify-start">
            <div className="flex flex-col gap-10 py-14 md:flex-nowrap md:justify-start md:flex-row md:px-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}