import Link from "next/link"

export default function Logo() { return (
    <Link href="/" className='flex items-center gap-2 max-h-10'>
        <img alt="logo" src="/logo-bare.png" className='h-full'/>
        <img alt="logo" src="/logo-word.png" className='h-full'/>
    </Link>
)};