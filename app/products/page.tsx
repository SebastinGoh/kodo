import Catalogue from "../catalogue";

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
      <Catalogue 
        showGrid={true}
        exclude={[]}
      />
    </main>
  )
}
