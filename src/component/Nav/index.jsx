

const Nav = () => {
  return (
    <div className="pt-[var(--height-header)] flex justify-between items-center px-6 bg-white shadow-shadowNav">
      <a href="/" className="block  h-full md:py-4  py-5">
        <img src="https://themesflat.co/html/dreamhomehtml/assets/images/logo/logo@2x.png" alt="" className="w-[auto] h-[50px] object-cover" />
      </a>
      <div>
        <ul className="xl:flex hidden w-full ">
          <li className="flex items-center px-2 cursor-pointer text-xl  hover:text-[var(--hover-text)] font-bold transition-colors duration-300 ease-in-out">
            <span>Home</span>
            <box-icon name='chevron-down'></box-icon>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-xl  hover:text-[var(--hover-text)] font-bold transition-colors duration-300 ease-in-out">
            <span>Property</span>
            <box-icon name='chevron-down'></box-icon>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-xl  hover:text-[var(--hover-text)] font-bold transition-colors duration-300 ease-in-out">
            <span>Page</span>
            <box-icon name='chevron-down'></box-icon>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-xl  hover:text-[var(--hover-text)] font-bold transition-colors duration-300 ease-in-out">
            <span>Blog</span>
            <box-icon name='chevron-down'></box-icon>
          </li>
          <li className="flex items-center px-2 cursor-pointer text-xl  hover:text-[var(--hover-text)] font-bold transition-colors duration-300 ease-in-out">
            <span>Contact</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <span className="flex"><box-icon name='user-check' ></box-icon></span>
        <div className="text-base font-medium cursor-pointer pl-2  hover:text-[var(--hover-text)]  transition-colors duration-300 ease-in-out ">Register</div>
        <span className=" text-base px-2">/</span>
        <div className="text-base font-medium cursor-pointer pr-2  hover:text-[var(--hover-text)] transition-colors duration-300 ease-in-out">Login</div>
        <div className=" items-center bg-[var(--hover-text)] p-4 rounded-md cursor-pointer md:flex hidden transition-all duration-300 ease-in-out hover:bg-orange-500" >
          <span className="flex">
            <box-icon name='home' color='#fff9f9' ></box-icon>
          </span>
          <span className="block h-[20px] w-[1px] bg-orange-400 mx-4"></span>
          <span className="text-base font-medium text-white">Sell Property</span>
        </div>
        <span className=" flex scale-150 ml-2 md:hidden cursor-pointer">
          <box-icon name='menu' color='#fff206' ></box-icon>
        </span>
      </div>
    </div>
  )
}

export default Nav