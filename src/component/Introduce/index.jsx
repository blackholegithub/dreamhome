import ItemList from "../Widgets/ItemList"
import { useState } from "react"

const Introduce = () => {
    const [typeSelected, setTypeSelected] = useState('rent')

    const bungalowArray = [
        'option 1',
        'option 2',
        'option 3',
        'option 4',
        'option 5',
        'option 6',

    ]
    const locationArray = [
        'location 1',
        'location 2',
        'location 3',
        'location 4',
        'location 5',
        'location 6',

    ]

    const hanldeTypeSelected = (index)=>{
        setTypeSelected(index)
    }

    return (
        <div className="my-[60px] lg:mt-[160px] xl:mb-[220px]  flex relative">
            <div className="flex-1 lg:pl-10 lg:px-0 px-2 ">
                <h1 className="font-bold text-6xl lg:w-1/2 md:pr-2 pr-0">We will find a perfect home for you</h1>
                <p className="font-normal text-xl py-4 md:pr-2 pr-0 lg:w-1/2">Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you</p>
                <div>
                    <div className=" rounded-t-lg  inline-flex overflow-hidden">
                        <span className={` py-1 w-[90px] text-center bg-[#FFF5E0] text-lg font-normal text-black cursor-pointer transition-all duration-300 ease-in-out hover:bg-[var(--hover-text)] hover:text-white ${typeSelected === 'rent' && ' text-white bg-[var(--hover-text)]'}`} onClick={()=>hanldeTypeSelected('rent')}>Rent</span>
                        <span className={` py-1 w-[90px] text-center bg-[#FFF5E0] text-lg font-normal text-black cursor-pointer transition-all duration-300 ease-in-out hover:bg-[var(--hover-text)] hover:text-white ${typeSelected === 'buy' && ' text-white bg-[var(--hover-text)]'}`} onClick={()=>hanldeTypeSelected('buy')}>Buy</span>
                    </div>
                    <div className="flex items-center lg:flex-row flex-col w-full lg:w-5/6 bg-white p-4 rounded-r-lg rounded-b-lg ">
                        <input
                            type="text"
                            placeholder="Type keyword..."
                            className=" flex-1 text-lg mx-3 p-2 w-full  border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--hover-text)]"
                        />

                        <ItemList array={bungalowArray} des={'bungalow'}/>
                        <ItemList array={locationArray} des={'location'}/>

                        <div className="flex-1 w-full flex justify-between xl:justify-center items-center">
                            <span className="flex p-3 rounded-lg bg-[#FFF5E0] cursor-pointer  ">
                                <box-icon name='menu' rotate='90' color='var(--hover-text)' ></box-icon>
                            </span>

                            <button className=" ml-3 lg:flex-1  flex justify-center items-center text-lg font-semibold px-3 py-3 bg-[var(--hover-text)] text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-500">
                                Search
                                <span className='flex ml-2'>
                                    <box-icon name='search-alt-2' color='#ffffff' ></box-icon>
                                </span>
                            </button>
                        </div>

                    </div>
                   


                </div>
                <div className='flex lg:justify-start justify-between py-3 '>
                    <div className="mr-10">
                        <h2 className="text-4xl font-bold">1500+</h2>
                        <p className="text-xl font-medium"> Property ready</p>
                    </div>
                    <div >
                        <h2 className="text-4xl font-bold">700+</h2>
                        <p className="text-xl font-medium"> Happy customer</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 lg:block hidden absolute right-0 z-[-1] xl:w-5/12 w-1/2 xl:top-[-20%] top-[-10%]">
                <img src="https://themesflat.co/html/dreamhomehtml/assets/images/slider/slider-1.png" alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default Introduce