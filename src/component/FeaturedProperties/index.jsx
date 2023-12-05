import { useState } from "react";
import Default from "../../layout/Default";
import "./index.scss"

const FeaturedProperties = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const menuTab = [
        {
            title: "House",
            des: "8 property",
        },
        {
            title: "Smart home",
            des: "6 property",
        },
        {
            title: "apartments",
            des: "2 property",
        },
        {
            title: "office",
            des: "1 property",
        },
        {
            title: "villa",
            des: "8 property",
        },
        {
            title: "bungalow",
            des: "8 property",
        },
    ];

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    const handleMouseEnter = (index) => {
        setSelectedProperty(index);
      };
    
      const handleMouseLeave = () => {
        setSelectedProperty(null);
      };

    return (
        <Default
            md
            title={"Featured properties"}
            des={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
            }
        >
            <ul className="flex flex-wrap justify-center  my-4">
                {menuTab.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleItemClick(index)}
                        onMouseEnter={()=>handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className={`feature_property_title capitalize relative mx-3 py-2 px-6 text-xl rounded-lg shadow-shadowTab font-medium hover:text-[var(--hover-text)] duration-200 cursor-pointer transition-all ${selectedItem === index && "text-[var(--hover-text)]"
                            }`}
                    >
                        {item.title}
                        {selectedProperty === index && <span className='feature_property_des absolute p-2 rounded-lg  whitespace-nowrap  text-base  left-[50%] translate-x-[-50%] text-black shadow-shadowTab bg-[var(--white-background)]'>
                            {item.des}
                        </span>}
                    </li>
                ))}
            </ul>
        </Default>
    );
};

export default FeaturedProperties;
