import ProductCard from "../product-card";

export default function Product() {
  const showWhere = "home";
  return (
    <main className=''>
      <div className="bg-orange w-full flex flex-col items-center justify-center text-center py-8">
        <div className="font-semibold text-2xl">
            All Products
        </div>
        <hr className="w-48 h-1 mx-auto bg-slate-900 border-0 rounded my-4" /> 
      </div>
      <div className="bg-orange w-full flex justify-center">
            <div className="flex flex-col gap-10 pb-14 md:flex-row md:flex-wrap md:justify-center md:align-start md:px-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </main>
  )
}
