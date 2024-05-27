import React from 'react'
import banner from '../../public/Banner.jpg'
function Banner() {
return (
<>
    <div className='container max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-8 md:mt-32 order-2 md:order-1'>
            <div className='space-y-10'>
                <h1 className='text-2xl font-bold w-23'>Hello everyone,welcome to <span
                        className='text-red-900 font-bold text-4xl hover:text-yellow-200'>Book
                        Shoppee</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti at dignissimos magni odit
                    delectus maiores cumque reprehenderit doloremque, porro, amet rerum doloribus totam quidem tenetur
                    perspiciatis atque ipsum blanditiis.
                </p>
                <label className="input input-bordered flex items-center gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                        className="w-4 h-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>

            </div>
            <button className="btn btn-secondary mt-3">Secondary</button>

        </div>
        <div className='w-full order-1 md:w-1/2'>
            <img src={banner} className="md:w-[550px] md:h-[460px] md:ml-12" alt="booksImg" />
        </div>
    </div>
</>

)
}

export default Banner