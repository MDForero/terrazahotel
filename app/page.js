// Voy a crear un landing page para un hotel ubicado en monterrey casanare colombia
// el cual utilizara tailwindcss para el css, fontawesome para los iconos
// sera responsivo a partir de 768px
// tendra 4 secciones divididas asi: header, about, rooms, contact cada una identificada por un id respectivamente
// en el header encontraremos  cta que estara en el centro de la pantalla y tendra un boton de reserva y una imagen de fondo referente al hotel en el modulo Image de nextjs
// en la seccion about encontraremos la infromación acerca del hotel como su historia, ubicación, servicios, etc
// en la seccion rooms encontraremos las habitaciones disponibles para reservar, cada habitacion tendra dos imagen, un titulo, una descripcion, los cuales se leeran de un array, y un boton de reserva que al dar click se abrira un modal que contendra un formulario de reserva que tendra los siguientes campos: nombre, apellido, email, telefono, fecha de entrada, fecha de salida, numero de personas, numero de habitaciones, y un boton de enviar, al dar click en el boton de enviar se enviara un mensaje al hotel con los datos de la reserva y el hotel se pondra en contacto con el cliente para confirmar la reserva
// el ancho de las imagenes y el texto sera de w-2/5 y el ancho del texto sera w-2/5 estaran en un section en flex-row justify-center y item-center para los escritorios y en flex-col para los dispositivos moviles y tabletas 
// las imagenes las utilizaremos para la destacar el sitio las cuales estaran superpuestas una sobre la otra cubirendo un 25% una de la otra y que al pasar el mouse o el dedo se cambien
// el boton de reserva en las habitaciones: al dar click en el boton de reserva se abrira un modal que contendra un formulario de reserva que tendra los siguientes campos: nombre, apellido, email, telefono, fecha de entrada, fecha de salida, numero de personas, numero de habitaciones, y un boton de enviar, al dar click en el boton de enviar se enviara un mensaje al hotel con los datos de la reserva y el hotel se pondra en contacto con el cliente para confirmar la reserva
// todos los botones de reserva seran un link directo de comunicacion con el hotel por medio de whatsapp
// en la seccion contact encontraremos un formulario de contacto que tendra los siguientes campos: nombre, apellido, email, telefono, mensaje, y un boton de enviar, al dar click en el boton de enviar se enviara un mensaje al hotel con los datos de la reserva y el hotel se pondra en contacto con el cliente para confirmar la reserva
// el footer tendra los datos de contacto del hotel y un mapa de google maps con la ubicacion del hotel

import Image from "next/image";
import Banner from "./components/Banner";
import Map from "./components/Map";
import WhyUs from "./components/WhyUs";
import Card from "./components/Card";
import { cifras, contact, eligenos, gallery, habitaciones, services } from "./data/data";
import Room from "./components/Room";
import CardContact from "./components/CardContact";
import Script from "next/script";
import CardStat from "./components/CardStat";
import Gallery from "./components/Gallery";
import FadeIn from "./components/FadeIn";

export const metadata = {
  title: "Terraza Hotel",
  description: "Hotel en Monterrey Casanare",
  keywords: ['Hotel', 'Hotel en monterrey casanare', "Hoteles en monterrey casanare", 'Terraza', 'Monterrey', 'Casanare', 'Colombia'],
}

export default function Home() {
  return (<>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7N90LRXK5G" />
    <Script id="google-analytics">
      {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
   
     gtag('config', 'G-7N90LRXK5G');
    `}
    </Script>
    <Banner />
    <section className="max-w-screen-2xl md:px-0 px-2 mx-auto flex flex-col gap-32 pt-32 ">
      <WhyUs data={eligenos.data} title={eligenos.title} />
      <FadeIn>
        <section>
          <h2 className="mb-8 text-center md:text-5xl text-4xl font-mono uppercase">Nuestros servicios</h2>
          <div className='max-w-6xl w-full flex  flex-wrap justify-evenly items-center gap-8 mx-auto '>
            {services.map((item, index) => <Card key={index} data={item} />)}
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section>
          <h2 className="mb-8 text-center md:text-5xl text-4xl font-mono uppercase">Galería</h2>
          <Gallery images={gallery} />
        </section>
      </FadeIn>
      
      <section>
        <h2 className="mb-8 text-center md:text-5xl text-4xl font-mono uppercase">Nuestras Habitaciones</h2>
        {habitaciones.data.map((item, index) => <Room key={index} data={item} />)}
      </section>
    
      <FadeIn>
      <section>
        <h2 className="mb-8 text-center md:text-5xl text-4xl font-mono uppercase">Cifras</h2>
        <div className="flex flex-wrap gap-8 md:gap-0 max-w-7xl w-full justify-evenly mx-auto " >
          {cifras.map((item, index) => <CardStat key={index} data={item} />)}
        </div>
      </section>
      </FadeIn>
      <FadeIn>
      <section>
        <h2 className="mb-8 text-center md:text-5xl text-4xl font-mono uppercase">Contacto</h2>
        <div className="cards flex flex-wrap max-w-7xl w-full justify-evenly mx-auto px-4 md:px-0">
          {contact.map((item, index) => <CardContact data={item} key={index} />)}
        </div>
      </section>
      </FadeIn>
      <FadeIn>
      <section>
        <h2 className="mb-8 text-center md:text-5xl text-4xl font-mono uppercase">ubicación</h2>
        <Map />
      </section>
      </FadeIn>
    </section>
  </>
  )
}


