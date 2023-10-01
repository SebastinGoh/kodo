import Image from 'next/image';

type PropType = {
    selected: boolean
    imgSrc: string
    index: number
    onClick: () => void
}

export const Thumbnail: React.FC<PropType> = (props) => {
    const { selected, imgSrc, index, onClick } = props
  
    return (
      <div
        className={'min-w-0 relative'.concat(
          selected ? ' opacity-100' : ''
        )}
      >
        <button
            onClick={onClick}
            className="bg-transparent border-0 p-0 m-0 block w-full decoration-none cursor-pointer opacity-20 transition-opacity duration-150 ease-in-out hover:opacity-100 focus:opacity-100 active:opacity-100"
            type="button"
        >
        <Image
            className="block w-full h-full object-cover"
            src={imgSrc}
            alt="Your alt text"
            width={100}
            height={100}
        />
        </button>
      </div>
    )
  }