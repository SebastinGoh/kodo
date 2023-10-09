'use client'
 
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from "next/link";
import data from "@/app/data/products";
import Image from 'next/image';
import Catalogue from '@/app/components/products/catalogue';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { useCartStore } from "@/app/store/useCartStore";
import PageTitle from '@/app/components/page-title';

export default function Product() {
    // Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API

        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        emblaApi && emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        emblaApi && emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback((index: number) => {
        emblaApi && emblaApi.scrollTo(index)
    },[emblaApi])

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      }, [])
    
    useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    // End of Embla Carousel

    // Quantity selector
    const [quantity, setQuantity] = useState(1);
    
    function minusQuantity() {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }
    
    function addQuantity() {
        if (quantity < 10) {
            setQuantity(quantity+1)
        }
    }
    // End of Quantity selector

    const addToCart = useCartStore(state => state.addToCart)

    // Display product details
    const params = useParams();
    const URLname = params.URLname;
    const product = data.find(product => product.URLname == URLname);

    if (product) {
        const id:string = product.id;
        const mainImg:string = product.images[0];
        const name:string = product.name;
        const price:number = product.price;
        const description:string = product.description;
        const otherImgsArray:Array<string> = product.images.slice(1);
        const otherImgs = otherImgsArray.map(img => {
            return (
                <div key={img} className="grow-0 shrink-0 basis-full flex justify-center items-center">
                    <Image key={img} className="" src={`/product/${img}`} height={100} width={400} alt={img} />
                </div>
            )
        })
        const includedArray:Array<string> = product.included;
        const included = includedArray.map(item => {
            return (
                <li key={item}>
                    {item}
                </li>
            )
        })
        return (
            <main className="bg-orange w-full text-slate-900">
                <div className="bg-white rounded-b-lg pb-4 shadow-lg">
                    {/* Embla Carousel */}
                    <div className='w-full relative'>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                <div className="grow-0 shrink-0 basis-full flex justify-center items-center">
                                    <Image key={mainImg} className="" src={`/product/${mainImg}`} width={400} height={100} alt={name} />
                                </div>
                                {otherImgs}
                            </div>
                        </div>
                        <button className="absolute inset-y-0 left-0" onClick={scrollPrev}>
                            <svg fill="currentColor" viewBox="0 0 16 16" className="w-12 h-8">
                                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z"/>
                            </svg>
                        </button>
                            
                        <button className="absolute inset-y-0 right-0" onClick={scrollNext}>
                            <svg fill="currentColor" viewBox="0 0 16 16" className="w-12 h-8">
                                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        {scrollSnaps.map((snap, index) => (
                            <button
                                key={index}
                                className={`rounded-full h-1 px-3 ${index === selectedIndex ? "bg-slate-900" : "bg-slate-500"}`}
                                onClick={() => scrollTo(index)}
                            >
                            </button>
                        ))}
                    </div>
                    {/* End of Embla Carousel */}
                    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 text-center p-6">
                        <PageTitle title={name}/>
                        <p className="text-lg">
                            SGD${price} per set
                        </p>
                        <hr className="w-48 h-1 mx-auto bg-slate-900 border-0 rounded" />
                        <div className='flex items-center gap-4'>
                            <span>
                                Quantity
                            </span>
                            <div className="text-2xl rounded-full flex h-12 bg-gray-300">
                                <button onClick={minusQuantity} className="w-12 rounded-l-full border cursor-pointer">
                                    −
                                </button>
                                <span className="font-semibold border w-16 flex items-center justify-center">
                                    {quantity}
                                </span>
                                <button onClick={addQuantity} className="w-12 rounded-r-full border cursor-pointer">
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <button onClick={() => addToCart(product, quantity, true)} className="border-2 border-slate-900 rounded-full font-bold w-full h-12 flex items-center justify-center py-2 px-8 hover:bg-pink lg:text-lg">
                                ADD TO CART
                            </button>
                            <button onClick={() => addToCart(product, quantity, false, true)} className="bg-beige rounded-full font-bold w-full h-12 flex items-center justify-center py-2 px-8 hover:bg-pink lg:text-lg">
                                BUY NOW
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 text-start">
                            <div className="">
                                {description}
                            </div>
                            <p className="underline font-semibold">
                                What's included:
                            </p>
                            <div className="">
                                <ul className="list-disc list-inside">
                                    {included}
                                </ul>
                            </div>
                            <span className="self-center">
                                *
                            </span>
                            <div className="italic">
                                For tips on how to care for your water beads, please read our <Link className="underline" href="/faq">FAQ</Link>
                                <p className='mt-4'>
                                    Adult supervision required. 
                                    Contains small pieces that may be a choking hazard to smaller children. 
                                    Not intended for consumption. 
                                    When not in use, please keep beads in jar away from direct sunlight. 
                                    Wash hands before and after playing. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-orange w-full flex flex-col items-center justify-center text-center mt-10">
                    <div className="font-semibold text-2xl">
                        Related Products
                    </div>
                    <hr className="w-48 h-1 mx-auto bg-slate-900 border-0 rounded mt-4" /> 
                </div>
                <Catalogue
                    showGrid={false}
                    exclude={[id]}
                />
            </main>
        )
    } else {
    // If product not found
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