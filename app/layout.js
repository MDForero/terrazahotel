"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { contacto } from './data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Nav/>
        <a className='fixed bottom-3 right-3 z-50' href={`https://wa.me/${contacto.phone}?text=Hola!%20Quiero%20hacer%20una%20reserva%20en%20el%20hotel%20`} target="_blank"><FontAwesomeIcon icon={faWhatsapp} size='3x' className='bg-green-700 rounded-full text-white hover:bg-transparent hover:text-green-700 ease-in duration-100  '/></a>
        <div className='bg-orange-50/80 z-0 text-gray-800 mx-auto '>
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
