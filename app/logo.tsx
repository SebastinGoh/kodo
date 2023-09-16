import Image from 'next/image'
import Link from "next/link"

export default function Logo() { return (
    <Link href="/" className='flex items-center gap-2'>
        <Image alt="logo" src="/logo-bare.png" width="50" height="50" />
        <Image alt="logo-word" src="/logo-word.png" width="75" height="25" />
    </Link>
)};