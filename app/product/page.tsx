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
      <div className="bg-orange w-full flex justify-center mx-auto pb-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
