import Link from "next/link"

export default function Logo() { return (
    <Link href="/" className='flex gap-2 max-h-10'>
        <img alt="logo" src="/logo-bare.png" className=''/>
        <img alt="logo" src="/logo-word.png" className=''/>
    </Link>
)};