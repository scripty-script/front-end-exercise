import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Trending({ data }) {
    const [isOpen, setOpen] = useState(false);
    const preview = data[0];
    return (
        <>
            <Transition
                as={Fragment}
                show={isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className='relative h-max'>
                    <button className='absolute top-2 right-4 xl:top-0 xl:right-0  z-10 ' onClick={() => setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <div className='xl:grid xl:grid-flow-col xl:gap-4 mt-4'>
                        <div className='xl:w-[32rem]'>
                            <div className="relative xl:h-[38rem] rounded-2xl overflow-hidden">
                                <img src={preview.img} alt={preview.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 w-full px-4 pt-10 pb-2 bg-gradient-to-t from-black to-transparent">
                                    <h3 className="text-2xl font-semibold">{preview.title}</h3>
                                    <dl className="text-xs flex items-center">
                                        <dt className="sr-only">Category</dt>
                                        <dd>Category: {preview.category}</dd>
                                        <dt className="sr-only">Reviews</dt>
                                        <dd className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span>{preview.rating}</span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <p className='text-xl text-[#747474]'>{preview.description}</p>
                        </div>
                        <div>
                            <span className='text-2xl block'>Episodes</span>
                            <span className='mt-3 text-2xl block'>Season 1</span>

                            <div className='space-y-4'>
                                <Episodes episodes={preview.episodes} />
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>

            <Transition
                as={Fragment}
                show={!isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
                <div className='mt-4 flex items-center space-x-4 overflow-auto'>
                    {
                        data?.map(({ title, category, rating, img }, i) =>
                            <Item key={`${title}_${i}`}
                                title={title}
                                category={category}
                                rating={rating}
                                href={img}
                                setOpen={setOpen}
                            />
                        )
                    }
                </div>
            </Transition>
        </>
    )
}




function Episodes({ episodes }) {

    return (
        episodes.map(({ description, thumbnail, no }) =>
            <div className='grid lg:grid-cols-2 gap-2' key={no}>
                <img src={thumbnail} alt="thumbnail" className='object-cover aspect-video w-full rounded-2xl' />
                <div className='my-auto'>
                    <span className='text-xl'>Episode {no}</span>
                    <p className='text-[#747474] text-xl'>{description}</p>
                </div>
            </div>
        )
    )
}

function Item({ title, category, rating, href, setOpen }) {

    return (
        <div className="relative min-w-max max-w-[32rem] w-full h-72 rounded-2xl overflow-hidden group">
            <img src={href} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 w-full px-4 pt-10 pb-2 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <dl className="text-xs flex items-center">
                    <dt className="sr-only">Category</dt>
                    <dd>Category: {category}</dd>

                    <dt className="sr-only">Reviews</dt>
                    <dd className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{rating}</span>
                    </dd>
                </dl>
            </div>
            <button className='absolute inset-0' onClick={() => setOpen(true)}></button>
        </div>
    )
}

