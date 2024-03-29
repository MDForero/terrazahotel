'use client'
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Script from "next/script";

export default function Banner({ fondo }) {
    const usepathname = usePathname()
    return <>
        <div className="ftb-widget" data-id="47679" data-token="LgdwgKVjXzywDnfnnYmbwMNxSTWgdDn76QznK3g7LAtsErG6obLBC0QEl0KXr"></div><Script src="https://widget.freetobook.com/widget.js"></Script>
        <main className="min-h-[70vh] relative xl:h-[70vh] w-full">
            <Image src={`/images/${fondo ? fondo : "/banner.JPG"}`} alt='banner' width={0} height={0} className=' object-cover  w-full h-[70vh] lg:h-full' />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
                {usepathname === '/' ? <><h1 className="text-5xl text-white font-bold mb"> Terraza Hotel </h1>
                    <p className="text-white font-medium text-center text-2xl mb-5"> Donde la elegancia y el confort se juntan en un solo lugar</p></> :
                    <h1 className="text-5xl text-white font-bold mb uppercase">{usepathname.slice(1)}</h1>}
            </div>
        </main>
    </>
}