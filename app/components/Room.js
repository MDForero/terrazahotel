import Image from 'next/image'
import React from 'react'
import { contacto } from '../data/data'
import FadeIn from './FadeIn'

const Products = ({ data }) => {
  return (<FadeIn>
    <article className="max-w-7xl mx-auto mt-16">
      <div className="relative flex flex-col gap-3 md:flex-row md:justify-stretch md:items-center border-[3px] p-2 border-solid">
        <section className="w-full h-[366px]  "><a className="" href="#"><Image src={data.img} alt="" width={600} height={366} className='h-full object-cover' /></a></section>
        <section>
          <div className="flex flex-col gap-3">
            <div>
              <a href="#">
                <h5 className="text-2xl text-center font-bold font-mono uppercase hover:text-red-500">{data.title}</h5></a>
            </div>

            <p className="product-big-text">{data.text}</p>

            <div className="absolute top-1 right-1 outline-orange-300 outline-8   hover:outline-double ease-in-linear duration-150  outline-offset-4  border-4 border-orange-300 rounded-xl bg-[#FFCE40]   p-4 "><span className="product-big-price">$45.000</span><br /><span>Persona</span></div>
            <section className='flex w-full justify-between px-3 font-bold'>
              <div className='overflow-hidden flex w-fit h-14 items-center'> <a className="button-book overflow-hidden" href="#">Ver más</a></div>
              <div className='overflow-hidden flex w-fit h-14 items-center'> <a target='_blank' className="button-book-2  overflow-hidden" href={`https://api.whatsapp.com/send?phone=${contacto.phone}&text=Hola estaba revisando tu página web y me gustaría reservar una ${data.title}`}>Reservar</a></div>
            </section>
          </div>
        </section>
      </div>
    </article>
  </FadeIn>
  )
}

export default Products