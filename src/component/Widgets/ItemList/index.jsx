import { useRef, useEffect, useState } from 'react';
import "./index.scss"

const ItemList = ({ array, des }) => {
  const myRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false)
  const [title, settitle] = useState(des)
  const [bungalowSelected, setSelected] = useState(null)

  const hanldeShowMenu = () => {
    setShowMenu(pre => !pre)
  }

  const hanldeSelected = (index) => {
    setSelected(index)
    settitle(array[index])

  }
  const handleClickOutside = (event) => {
    if (myRef.current && !myRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className="  flex-1 text-lg w-full mx-3 my-2 px-2 p-2 border cursor-pointer  border-gray-300 rounded-lg flex justify-between items-center relative " onClick={hanldeShowMenu} ref={myRef}>
      <span className="capitalize">{title}</span>
      <span className="flex">
        <box-icon name='chevron-down'></box-icon>
      </span>
      {showMenu && (
        <ul className="z-40 effectShow absolute left-0 mt-3 rounded-lg border-gray-300 border bg-white w-full  overflow-y-auto  ">
          {array.map((item, index) => (
            <li
              key={index}
              onClick={() => hanldeSelected(index)}
              className={`capitalize p-2 text-lg font-normal hover:bg-[#f6f6f6] transition-all duration-300 ease-in-out ${bungalowSelected === index ? ' text-[var(--hover-text)]' : ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default ItemList