'use client'
import React, { useEffect, useRef, useState } from 'react'

const CardStat = ({ data }) => {
    const [stats, setStats] = useState(0)
    const [play, setPlay] = useState(false)
    
    const elementRef = useRef(null)

    const handlePlay = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !play) {
                setPlay(true)
            }
        })
    }

    
    useEffect(() => {
        const observer = new IntersectionObserver(handlePlay)
        if (elementRef.current) {
            observer.observe(elementRef.current)
        }
        if (play) {
            const interval = setInterval(() => {
                setStats((prev) => {
                    const newValue = prev + 1;
                    if (newValue >= data.number) {
                        clearInterval(interval); // Detener el intervalo cuando se alcanza el valor deseado
                        return data.number; // Establecer el valor en data.number
                    }
                    return newValue;
                });
            }, 50);

            return () => clearInterval(interval);
        }
        return () =>observer.disconnect()
    }, [play, data.number]);
   
    return (
        <div ref={elementRef} className='md:h-[275px] md:w-[275px] h-[240px] w-[275px] flex justify-center items-center bg-gray-200'>
            <div className=' md:h-[250px] md:w-[250px] h-[220px] w-[250px]  font-bold flex flex-col  justify-center  items-center transition hover:scale-[1.05] md:hover:divide-y-[3px] md:hover:divide-yellow-500 ease-in duration-200   bg-orange-100  divide-solid divide-y-[6px] md:divide-y-0 
divide-yellow-500  '>
                <p className='text-8xl tracking-[-0.10em] font-serif font-normal'>{stats}</p>
                <p className='text-3xl tracking-[-0.05em] font-serif font-normal'>{data.title}</p>
            </div>
        </div>
    )
}

export default CardStat