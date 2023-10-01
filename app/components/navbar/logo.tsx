import Link from "next/link";

export default function Logo() { return (
    <Link href="/" className='flex'>
        <img alt="logo" src="/logo-bare.png" className='max-h-8 md:max-h-10'/>
        <img alt="logo" src="/logo-word.png" className='max-h-8 md:max-h-10'/>
    </Link>
)};