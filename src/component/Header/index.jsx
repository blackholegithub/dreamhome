

const Header = () => {
  return (
    <div className="fixed h-[var(--height-header)] w-screen bg-black flex justify-between items-center px-6">
      <a href="/" className="block  h-full md:py-4  py-5">
        <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg" alt="" className="w-full h-full object-cover" />
      </a>


      <a href="/" className="inline-block bg-[#82b440] text-base rounded-sm text-white px-3 py-1 transition-colors duration-100 ease-in-out hover:bg-green-600 hover:text-gray-100 shadow-md">
        <button>Buy Now</button>
      </a>

    </div>
  )
}

export default Header