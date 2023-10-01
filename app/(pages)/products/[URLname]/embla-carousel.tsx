// https://www.embla-carousel.com/examples/predefined/
'use client'
 
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Thumbnail } from '@/app/(pages)/products/[URLname]/thumbnail';

type PropType = {
    images: string[];
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { images } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index: number) => {
          if (!emblaMainApi || !emblaThumbsApi) return
          emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on('select', onSelect)
        emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <div className="p-1">
            <div className="overflow-hidden touch-pan-y" ref={emblaMainRef}>
                <div className="flex">
                {images.map((img) => (
                    <div className="min-w-0 relative grow-0 shrink-0 basis-full" key={img}>
                        <Image
                        className="block w-full h-full object-cover"
                        src={`/product/${img}`}
                        alt="Your alt text"
                        width={400}
                        height={100}
                        />
                    </div>
                ))}
                </div>
            </div>

            <div className="mt-1">
                <div className="overflow-hidden" ref={emblaThumbsRef}>
                    <div className="flex">
                        {images.map((img, index) => (
                            <Thumbnail
                            onClick={() => onThumbClick(index)}
                            selected={index === selectedIndex}
                            index={index}
                            imgSrc={`/product/${img}`}
                            key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel;