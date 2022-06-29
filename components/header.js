import Link from 'next/link'
export default function Header() {
    return (
        <header>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <h1 className='z-10 text-2xl font-bold'>AnimeBinge</h1>
                <nav className='z-10 hidden md:block'>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link href={"#home"}>
                                <a className='px-5 p-2'>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#discover"}>
                                <a className='px-5 p-2'>Discover</a>
                            </Link>
                        </li >
                        <li>
                            <Link href={"#about-us"}>
                                <a className='px-5 p-2'>About us</a>
                            </Link>
                        </li>
                        <li >
                            <Link href={'#signup'}>
                                <a className='px-5 p-2 rounded-md border border-white bg-transparent'>Sign Up</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'#login'}>
                                <a className='px-5 p-2 rounded-md bg-[#106580] border-transparent'>Log In</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}