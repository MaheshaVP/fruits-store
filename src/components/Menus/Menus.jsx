import React from 'react'
import Fruit1 from "../../assets/fruits/apple.png"
import Fruit2 from "../../assets/fruits/orange.png"
import Fruit3 from "../../assets/fruits/avocado.png"
import Fruit4 from "../../assets/fruits/cherry.png"
import { motion } from 'framer-motion'

const MenuData =  [
    {
        id: 1,
        title: "Apple",
        link: '/',
        price: "RS.200",
        image: Fruit1,
    },
    {
        id: 2,
        title: "Orange",
        link: '/',
        price: "RS.150",
        image: Fruit2,
    },
    {
        id: 3,
        title: "Avocado",
        link: '/',
        price: "RS.120",
        image: Fruit3,
    },
    {
        id: 4,
        title: "Cherries",
        link: '/',
        price: "RS.400",
        image: Fruit4,
    },
];

const Menus = () => {
  return (
    <section>
        <div className="container pt-12 pb-20">
            <h1 className='text-2xl font-bold text-left pb-10 uppercase'>
                Our Menu</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {MenuData.map((menu) => (
                    <div className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
                        <img src={menu.image} alt="img" className='w-[60px] mb-4 scale-110  transform -translate-y-6'/>
                        <div className=''>
                            <h1 className='text-lg font-semibold'>{menu.title}</h1>
                            <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Menus