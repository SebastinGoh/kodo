import Image from 'next/image'

export default function navbar() {
    return (
      <>
        <header className="bg-beige">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2">
                <div className='flex items-center'>
                    <Image alt="logo" src="/logo-bare.png" width="100" height="100" />
                    <Image alt="logo-word" src="/logo-word.png" width="150" height="50" />
                </div>
                <div>
                    <ul className='flex text-slate-900'>
                        <li>About</li>
                        <li>Product</li>
                        <li>Hello</li>
                    </ul>
                </div>
            </nav>
        </header>
      </>
    )
  }