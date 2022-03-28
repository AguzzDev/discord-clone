import { Navbar } from "components/Landing/Navbar"
import type { NextPage } from "next"
import { motion } from "framer-motion"

import Landing1 from "public/svg/Landing/Landing1"
import Landing2 from "public/svg/Landing/Landing2"
import Landing3 from "public/svg/Landing/Landing3"
import Landing4 from "public/svg/Landing/Landing4"
import Landing5 from "public/svg/Landing/Landing5"
import Landing6 from "public/svg/Landing/Landing6"
import Landing7 from "public/svg/Landing/Landing7"
import { useEffect } from "react"
import { useRouter } from "next/router"

type SectionValues = {
  title: string
  desc: string
  image: JSX.Element
  reverse: boolean
  id?: string
}

const Home: NextPage = () => {
  const router = useRouter()
  const logged = false

  useEffect(() => {
    if (logged) {
      router.push("/app")
    }
  }, [logged])

  const Section = ({ title, desc, image, reverse, id }: SectionValues) => {
    return (
      <section className="w-9/12 py-14 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${
            reverse && "flex-row-reverse"
          } flex justify-between w-full py-20 ${
            id === "lastItem" && "w-full flex-col-reverse"
          }`}
        >
          {image}

          <div
            className={`flex flex-col pt-9 ${
              id === "lastItem" ? "w-10/12 mx-auto text-center mb-16" : "w-5/12"
            }`}
          >
            <h1
              className={`${
                id === "lastItem" && "w-5/6 mx-auto"
              } text-black text-5xl font-bold leading-[3.5rem]`}
            >
              {title}
            </h1>
            <p className="text-black mt-5 leading-8">{desc}</p>
          </div>
        </motion.div>
      </section>
    )
  }
  return (
    <>
      <section className="relative bg-bluedark flex flex-col justify-center items-center h-[80vh] overflow-hidden">
        <Navbar />
        <div className="absolute z-50 w-3/6 text-center">
          <h1 className="text-[4.5rem] font-bold mb-10">IMAGINA UN LUGAR...</h1>
          <p>
            ... en el que puedas formar parte de un club escolar, un grupo de
            jugadores o una comunidad mundial de arte. En el que puedas pasar
            tiempo con unos cuantos amigos. Un lugar que haga que hablar a
            diario y divertirte más a menudo sea fácil.
          </p>
        </div>
        <div className="flex justify-between absolute bottom-0 w-screen">
          <Landing2 className="relative -left-[15vw] -bottom-2 z-10" />
          <Landing3 className="absolute bottom-0 -left-[30vw]" />
          <Landing1 className="relative -right-[10vw] z-10" />
        </div>
      </section>

      <Section
        title="Crea un lugar solo para miembros en el que encajes"
        desc=" Los servidores de Discord se organizan en canales ordenados por
          temas donde puedes colaborar, compartir o simplemente hablar de tu
          día sin monopolizar un chat de grupo."
        image={<Landing4 />}
        reverse={false}
      />
      <div className="bg-gray-200">
        <Section
          title="Donde es fácil pasar el rato"
          desc="Entra en un canal de voz cuando estés libre. Los amigos que tengas en tu servidor podrán ver que estás conectado y unirse al instante para hablar sin necesidad de llamar."
          image={<Landing5 />}
          reverse={true}
        />
      </div>
      <Section
        title="De unos pocos fans a un montón"
        desc="Establece cualquier comunidad con las herramientas de moderación y el acceso personalizado de miembros. Concédeles poderes especiales, crea canales privados y mucho más."
        image={<Landing6 />}
        reverse={false}
      />
      <div className="bg-gray-200">
        <Section
          title="UNA TECNOLOGÍA FIABLE PARA MANTENERSE EN CONTACTO"
          desc="Gracias a la voz y el vídeo de baja latencia, parece que estáis en la misma habitación. Saluda a la cámara, accede a las transmisiones de los juegos de tus amigos o reuníos y disfrutad de una sesión de dibujo compartiendo la pantalla."
          image={
            <Landing7 className="transform translate-x-32 scale-125 mt-5" />
          }
          reverse={false}
          id="lastItem"
        />
      </div>
    </>
  )
}

export default Home
