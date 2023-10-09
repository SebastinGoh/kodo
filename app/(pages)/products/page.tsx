import Catalogue from "@/app/components/products/catalogue";
import PageTitle from "@/app/components/page-title";

export default function Product() {
  const showWhere = "home";
  return (
    <main className=''>
      <div className="bg-orange w-full flex flex-col items-center justify-center text-center py-8">
        <PageTitle title="All Products"/>
        <hr className="w-48 h-1 mx-auto bg-slate-900 border-0 rounded my-4" /> 
      </div>
      <Catalogue 
        showGrid={true}
        exclude={[]}
      />
    </main>
  )
}
