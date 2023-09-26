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

    const params = useParams();
    const URLname = params.URLname;
    const product = data.find(product => product.URLname == URLname);
    if (product) {
        const id:string = product.id;
        const mainImg:string = product.mainImg;
        const name:string = product.name;
        const price:number = product.price;
        const description:string = product.description;
        const otherImgsArray:Array<string> = product.otherImgs;
        const otherImgs = otherImgsArray.map(img => {
            return (
                <div className="grow-0 shrink-0 basis-full flex justify-center items-center">
                    <Image className="rounded-lg" src={`/product/${img}`} height={100} width={300} alt={img} />
                </div>
            )
        })
        return (
            <main className="bg-orange w-full">
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center p-6">
                    <Link className="self-start bg-beige rounded-full flex items-center gap-2 py-2 px-8 hover:bg-pink lg:text-lg" href="/products">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        All Products
                    </Link>
                </div>
                <div className="p-4">
                    <h5 className="text-2xl font-bold text-slate-900 text-center">{name}</h5>
                    <hr className="w-48 h-1 mx-auto bg-slate-900 border-0 rounded mt-4 mb-10" />
                    {/* Embla Carousel */}
                    <div>
                        <div className="overflow-hidden w-full" ref={emblaRef}>
                            <div className="flex">
                                <div className="grow-0 shrink-0 basis-full flex justify-center items-center">
                                    <Image className="rounded-lg" src={`/product/${mainImg}`} width={350} height={100} alt={name} />
                                </div>
                                {otherImgs}
                            </div>
                        </div>
                        <div className='text-3xl flex justify-center items-center gap-4 mt-4'>
                            <button className="" onClick={scrollPrev}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            {scrollSnaps.map((snap, index) => (
                                <button
                                    className={`rounded-full h-1 px-3 ${index === selectedIndex ? "bg-slate-900" : "bg-slate-500"}`}
                                    onClick={() => scrollTo(index)}
                                >
                                    {/* {index + 1}  */}
                                </button>
                            ))}
                            <button className="" onClick={scrollNext}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* End of Embla Carousel */}
                    <div className="p-5">
                        <p className="mb-2 text-slate-800">
                            - SGD ${price}
                        </p>
                        <p className="mb-8 text-slate-900">
                            {description}
                        </p>
                        <Link id={id} className="bg-beige rounded-full font-bold py-2 px-8 hover:bg-pink lg:text-lg" href="#">
                            ADD TO CART
                        </Link>
                    </div>
                </div>
                <div className="bg-orange w-full flex flex-col items-center justify-center text-center">
                    <div className="font-semibold text-2xl">
                        Related Products
                    </div>
                    <hr className="w-48 h-1 mx-auto bg-slate-900 border-0 rounded my-4" /> 
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