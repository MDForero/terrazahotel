// voy a crear un menu de navegacion\
// el cual utilizara tailwindcss para el css, fontawesome para los iconos
// sera responsivo a partir de 768px
// en los dispositivo moviles tendra un menu hamburguesa que al dar click se abrira y mostrara los links de navegacion, tambien se cerrara cuando se haga click por fuera, el icono cambiara por una x cuando el menu se muestre y volvera a ser un menu hamburguesa cuando se cierre, tambien estara fijado a la parte superior de la pantalla de modo que cuando se haga scroll el menu se mantenga visible en los dispositivos moviles
// en los dispositivos de escritorio el menu se mostrara en la parte superior de la pantalla, los links de navegacion tendran un hover que cambiara el color de fondo y el color del texto, tambien tendra un efecto de transicion, estos seran leidos a partir de un array de objetos que contendra el nombre del link y la ruta a la que apunta cada uno
// los links de navegacion tendran un hover que cambiara el color de fondo y el color del texto, tambien tendra un efecto de transicion, estos seran leidos a partir de un array de objetos que contendra el nombre del link y la ruta a la que apunta cada uno
// el menu sera un ul de li que contendra los links de navegacion, estos seran leidos a partir de un array de objetos que contendra el nombre del link y la ruta a la que apunta cada uno, que en el caso de los dispositivos moviles se mostraran en un menu hamburguesa y estaran en disposicion de columna y estaran ubicados a la derecha, en los dispositivos de escritorio se mostraran en una fila que estara ubicada en el centro
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClock, faMapLocationDot, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'
import { contacto } from '../data/data'
import { usePathname } from 'next/navigation'


export default function Nav() {
    const [fixed, setFixed] = useState(false)
    const [show, setShow] = useState(false)
    const [checkIn, setCheckIn] = useState(false)

    const links = [
        { name: 'Inicio', href: '/' },
        { name: 'Habitaciones', href: '/habitaciones' },
        { name: 'Contacto', href: '/contacto' },
    ]

    const toggle = () => {
        setShow(!show)
    }

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (<header className='md:bg-amber-50'>
        <div className={` md:bg-amber-50 bg-gray-700 md:text-black text-terraza max-w-7xl mx-auto ${checkIn ? "fixed flex " : "hidden "} md:flex flex-col items-center md:flex-row text-xl font-light tracking-tighter z-50 top-12 right-0 gap-2 md:gap-10 justify-between py-3 px-2`} >
            <div>
                <a href={contacto.dotMap}><FontAwesomeIcon icon={faMapLocationDot} className='text-terraza' /> Calle 13a 1 - 05</a>
            </div>
            <div className='flex items-center gap-3 md:flex-row flex-col'>
                <p><FontAwesomeIcon icon={faClock} className='text-terraza' /> 3:00pm - 10:00pm</p>
                <a href={`tel:${contacto.phone}`} className='duration-150 hover:text-terraza '><FontAwesomeIcon icon={faPhone} className='text-terraza' /> {contacto.phone}</a>
                <a className='button-book'>Reservar</a>
            </div>
        </div>
        <div className={`w-full ${fixed? "fixed top-0 z-50" : ''} bg-gray-700`}>
            <nav className={'relative max-w-screen-2xl w-full  mx-auto  top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 bg-gray-700 shadow-md '}>


                <div className={`fixed top-0 left-0 right-0 z-40 md:flex  items-center justify-center w-full h-full px-4 py-2   md:static md:flex-row  gap-8  ${show ? 'flex bg-gray-800 md:bg-gray-700' : 'hidden'}`}>
                    <button className="md:hidden " onClick={toggle}>
                        <FontAwesomeIcon icon={faTimes} className="w-6 h-6 absolute top-4 left-4 text-yellow-600 md:hidden " />
                    </button>
                    <ul className='flex flex-col md:flex-row'>
                        {links.map((link, index) => (
                            <li key={index} className="w-full mb-2 md:mb-0 md:ml-4 md:w-auto">
                                <Link onClick={()=>setShow(!show)} className="block px-4 py-2 text-2xl  font-extrabold tracking-wider text-center text-amber-200 hover:text-amber-400 transition duration-500 ease-in-out transform   md:hover:bg-transparent  hover:scale-105 hover:border-t-4 hover:border-x-2 hover:border-amber-400" href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:flex flex-row absolute right-3 z-50 gap-3">
                    <a className="socialContainer containerOne" href="#">
                        <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                    </a>

                    <a className="socialContainer containerTwo" href="#">
                        <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="blue"></path> </svg>              </a>

                    <a className="socialContainer containerFour" href="#">
                        <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                    </a>
                </div>
                <div className='max-w-screen-2xl w-full md:hidden flex items-center justify-between'>

                    <button className="md:hidden block  " onClick={toggle}>
                        <FontAwesomeIcon icon={faBars} className="text-3xl text-terraza " />
                    </button>
                    <button onClick={() => setCheckIn(!checkIn)} className='md:hidden block  text-terraza select-none z-50  font-extrabold text-3xl rotate-90 '>...</button>
                </div>
            </nav>
        </div>
    </header>
    )
}