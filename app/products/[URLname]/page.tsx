'use client'
 
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from "next/link";
import data from "@/app/products";
import Image from 'next/image';
import Catalogue from '@/app/catalogue';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';

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

    // Display product details
    const params = useParams();
    const URLname = params.URLname;
    const product = data.find(product => product.URLname == URLname);

    // Initialise quantity selector
    const [quantity, setQuantity] = useState(1);
    
    function minusQuantity() {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }
    
    function addQuantity() {
        setQuantity(quantity+1)
    }

    if (product) {
        const id:string = product.id;
        const mainImg:string = product.mainImg;
        const name:string = product.name;
        const price:number = product.price;
        const description:string = product.description;
        const otherImgsArray:Array<string> = product.otherImgs;
        const otherImgs = otherImgsArray.map(img => {
            return (
                <div key={img} className="grow-0 shrink-0 basis-full flex justify-center items-center">
                    <Image key={img} className="rounded-lg" src={`/product/${img}`} height={100} width={300} alt={img} />
                </div>
            )
        })
        return (
            <main className="bg-orange w-full text-slate-900">
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 text-center p-6">
                    {/* Embla Carousel */}
                    <div>
                        <div className="overflow-hidden w-full" ref={emblaRef}>
                            <div className="flex">
                                <div className="grow-0 shrink-0 basis-full flex justify-center items-center">
                                    <Image key={mainImg} className="rounded-lg" src={`/product/${mainImg}`} width={350} height={100} alt={name} />
                                </div>
                                {otherImgs}
                            </div>
                        </div>
                        <div className='text-3xl flex justify-center items-center gap-4 mt-4'>
                            <button className="" onClick={scrollPrev}>
                                <svg fill="currentColor" viewBox="0 0 1024 1024" className="w-8 h-8">
                                    <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
                                </svg>
                            </button>
                            {scrollSnaps.map((snap, index) => (
                                <button
                                    key={index}
                                    className={`rounded-full h-1 px-3 ${index === selectedIndex ? "bg-slate-900" : "bg-slate-500"}`}
                                    onClick={() => scrollTo(index)}
                                >
                                </button>
                            ))}
                            <button className="" onClick={scrollNext}>
                                <svg fill="currentColor" viewBox="0 0 1024 1024" className="w-8 h-8">
                                    <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* End of Embla Carousel */}
                    <h5 className="text-2xl font-bold">{name}</h5>
                    <p className="text-lg">
                        SGD${price}.00 per set
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
                        <Link id={id} className="bg-transparent border-2 text-white rounded-full font-bold w-full h-12 flex items-center justify-center py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                            ADD TO CART
                        </Link>
                        <Link id={id} className="bg-beige rounded-full font-bold w-full h-12 flex items-center justify-center py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                            BUY NOW
                        </Link>
                    </div>
                    <div className="flex flex-col gap-6 text-start">
                        <p className="">
                            {description}
                        </p>
                        <p className="underline font-semibold">
                            What's included:
                        </p>
                        <p className="">
                            <ul className="list-disc list-inside">
                                <li>1 kg glittery water beads</li>
                            </ul>
                        </p>
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
                <div className="bg-orange w-full flex flex-col items-center justify-center text-center pt-10">
                    <div className="font-semibold text-2xl">
                        Related Products
                    </div>
                    <hr className="w-48 h-1 mx-auto bg-slate-900 border-0 rounded mt-4" /> 
                </div>
                <Catalogue 
                    showHome={true}
                />
            </main>
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