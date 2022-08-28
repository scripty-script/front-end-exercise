import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Header() {
    const [y, setY] = useState(0);

    useEffect(() => {
        document.onscroll = (e) => {
            setY(window.scrollY);
        };
    }, [])

    return (
        <header className={`z-10 fixed inset-x-0 top-0 ${y > 0 ? 'bg-[#1A1A1A]' : 'backdrop-blur-sm bg-transparent'}  transition-colors duration-500`}>
            <div className='container flex justify-between items-center py-4'>
                <h1 className='text-2xl font-bold'>AnimeBinge</h1>
                <nav className='hidden md:block'>
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