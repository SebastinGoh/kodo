import Link from "next/link";
import data from "../../products.js";

export async function generateStaticParams() {
    const products = data;
    return products.map((product) => ({
      params: {
        id: product.id.toString(),
        mainImg: product.mainImg,
        name: product.name,
        price: product.price,
        description: product.description,
      },
    }));
}

export default function Product({ 
    id 
} : { 
    id: number
}) {
    const product = data.find(product => product.id == id);
    if (product) {
        const mainImg:string = product.mainImg;
        const name:string = product.name;
        const price:number = product.price;
        const description:string = product.description;
        return (
            <div className="max-w-xs border bg-white rounded-lg flex-none">
                <div className="w-full h-80 overflow-hidden">
                    <img className="rounded-t-lg" src={`./product/${mainImg}`} alt={name} />
                </div>
                <div className="p-5">
                    <a href="#" className="hover:underline">
                        <h5 className="text-2xl font-bold text-slate-900">{name}</h5>
                    </a>
                    <p className="mb-2 text-slate-800">
                        - SGD ${price}
                    </p>
                    <p className="mb-8 text-slate-900">
                        {description}
                    </p>
                    <Link className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                        BUY NOW
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="bg-orange w-full h-1/2 flex flex-col items-center justify-center text-center py-8">
                <div className="font-semibold text-2xl">
                    Product not found
                </div>
                <hr className="w-48 h-1 mx-auto bg-slate-900 border-0 rounded my-4" /> 
                <Link className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg" href="/products">
                    VIEW ALL PRODUCTS
                </Link>
            </div>
        )
    }
}