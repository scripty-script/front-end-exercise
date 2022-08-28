import Link from 'next/link'
import { useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

export default function Header() {
    const [y, setY] = useState(0);
    const [open, setOpen] = useState(false)

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
                    <ul className='flex items-center space-x-4'>
                        <li className='px-5 p-2'>
                            <Link href={"#home"}>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className='px-5 p-2'>
                            <Link href={"#discover"}>
                                <a>Discover</a>
                            </Link>
                        </li >
                        <li className='px-5 p-2'>
                            <Link href={"#about-us"}>
                                <a>About us</a>
                            </Link>
                        </li>
                        <li>
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
                <button className='md:hidden' onClick={() => { setOpen(!open) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <Sidebar open={open} setOpen={setOpen} />
            </div>
        </header>
    )
}

const Sidebar = ({ open, setOpen }) => (
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => { }}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed z-10 inset-0 top-16 overflow-y-auto">
                    <Dialog.Panel className="absolute inset-0 bg-white">
                        <div className='mx-auto w-72 pt-10'>
                            <ul className='flex flex-col divide-y'>
                                <li className='px-5 p-2'>
                                    <Link href={"#home"}>
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li className='px-5 p-2'>
                                    <Link href={"#discover"}>
                                        <a  >Discover</a>
                                    </Link>
                                </li >
                                <li className='px-5 p-2'>
                                    <Link href={"#about-us"}>
                                        <a>About us</a>
                                    </Link>
                                </li>
                                <li className='px-5 p-2'>
                                    <Link href={'#signup'}>
                                        <a>Sign Up</a>
                                    </Link>
                                </li>
                                <li className='px-5 p-2'>
                                    <Link href={'#login'}>
                                        <a>Log In</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Dialog.Panel>
                </div>
            </Transition.Child>
        </Dialog>
    </Transition.Root>
)