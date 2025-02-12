import dentH from '../assets/images/dentH.png'

export default function OurServices() {
    return (
        <div className="bg-[#f7fafa] h-screen bg-cover bg-right flex flex-col">
            <p className='text-3xl text-center font-serif text-[#484849] mt-14 mb-6'>Our Services</p>

            <div className='flex flex-wrap gap-2 justify-center'>
                <div className="w-full max-w-sm bg-[#a3bbbb] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 bg-[#f7fafa] rounded-full shadow-lg" src={dentH} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium font-serif text-[#484849]">Cosmetic Dentisty</h5>
                            <span className="text-sm font-serif text-[#484849]">Enhance your smile with our expert cosmetic dentistry services. From teeth whitening to veneers and smile makeovers, we help you achieve a brighter, more confident smile. </span>

                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm bg-[#a3bbbb] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 bg-[#f7fafa] rounded-full shadow-lg" src={dentH} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium font-serif text-[#484849]">Cosmetic Dentisty</h5>
                            <span className="text-sm font-serif text-[#484849]">Enhance your smile with our expert cosmetic dentistry services. From teeth whitening to veneers and smile makeovers, we help you achieve a brighter, more confident smile. </span>

                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm bg-[#a3bbbb] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 bg-[#f7fafa] rounded-full shadow-lg" src={dentH} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium font-serif text-[#484849]">Cosmetic Dentisty</h5>
                            <span className="text-sm font-serif text-[#484849]">Enhance your smile with our expert cosmetic dentistry services. From teeth whitening to veneers and smile makeovers, we help you achieve a brighter, more confident smile. </span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
