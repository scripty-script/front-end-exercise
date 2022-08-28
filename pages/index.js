import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Throwback from '../components/throwback'
import Trending from '../components/trending'

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/anime`);
    const data = await res.json();

    return {
        props: { overview: data.overview, trending: data.trending },
    }
}


export default function Home({ overview, trending }) {

    return (
        <>
            <Head>
                <title>AnimeBinge</title>
                <meta name="description" content="Watch hd anime series, anytime, anywhere." />
            </Head>
            <main>
                <div id='hero' className='relative h-screen text-white'>
                    <div className='absolute inset-0 bg-cover object-none object-center' style={{ backgroundImage: `url("./1008472.png")` }}></div>
                    <div className='absolute h-full bg-gradient-to-r from-black to-transparent w-2/5'></div>
                    <div className='absolute right-0 h-full bg-gradient-to-l from-black to-transparent w-2/5'></div>
                    <Header />
                    <section className='container pt-32'>
                        <div className='transform lg:w-1/2'>
                            <h1 className='lg:text-[5rem] text-5xl font-bold'>{overview.title}</h1>
                            <dl className="text-xs flex items-center row-start-2">
                                <dt className="sr-only">Reviews</dt>
                                <dd className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span>{overview.rating}</span>
                                </dd>
                                <dt className="sr-only">Category</dt>
                                <dd className='ml-4'>Category: {overview.category}</dd>
                            </dl>
                            <p className='mt-4'>{overview.description}</p>
                            <div className='mt-4 flex justify-start items-center space-x-2'>
                                <Link href={'#watch-now'}>
                                    <a className='rounded-md border-transparent bg-[#106580] px-4 py-2'>Watch Now!</a>
                                </Link>
                                <Link href={'#like'}>
                                    <a className='border border-white rounded-md text-white px-4 py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='absolute bottom-10 w-fit text-sm flex space-x-4'>
                            <Link href='#overview'>
                                <a className='underline underline-offset-4 decoration-[#106580] decoration-2'>
                                    Overview
                                </a>
                            </Link>
                            <Link href='#episodes'>
                                <a>
                                    Episodes
                                </a>
                            </Link>
                            <Link href='#details'>
                                <a>
                                    Details
                                </a>
                            </Link>
                        </div>
                    </section>
                </div>
                <div className='bg-[#1A1A1A] py-10 space-y-20'>
                    <section>
                        <div className='container mx-auto text-white'>
                            <h2 className='text-4xl font-bold'>Trending <span className='text-[#FBC94A]'>this week</span></h2>
                            <div className='h-max relative'>
                                <Trending data={trending} />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='container mx-auto text-white'>
                            <h2 className='text-4xl font-bold'>Throwback Anime!</h2>
                            <div className='mt-4 grid xl:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center'>
                                <Throwback
                                    title={'Eugen'}
                                    href={'http://localhost:3000/th-1.png'}
                                />
                                <Throwback
                                    title={'Slam dunk'}
                                    href={'http://localhost:3000/th-2.png'}
                                />
                                <Throwback
                                    title={'dunno'}
                                    href={'http://localhost:3000/th-3.png'}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className='bg-[#1A1A1A] py-2'>
                <p className='container text-xs text-white'>By Nathaniel Naduaran</p>
            </footer>
        </>
    )
}
