import Layout from "components/Layout/Layout"
import { Layout2 } from "components/Layout/Layout2"
import { Layout3 } from "components/Layout/Layout3"
import { TopComponent } from "components/UI/TopComponent"
import MicroIcon from "public/icons/MicroIcon"
import HeadsetsIcon from "public/icons/HeadsetsIcon"
import ConfigIcon from "public/icons/ConfigIcon"
import { UserIcon } from "components/UI/UserIcon"
import { useRouter } from "next/router"
import ManWavingIcon from "public/icons/ManWavingIcon"
import PlusIcon from "public/icons/PlusIcon"
import HelpIcon from "public/icons/HelpIcon"
import NewMessageIcon from "public/icons/NewMessageIcon"
import InboxIcon from "public/icons/InboxIcon"
import { Button2 } from "components/UI/Button2"
import { useState } from "react"
import DotsIcon from "public/icons/DotsIcon"
import MessageIcon from "public/icons/MessageIcon"
import { ButtonRoundedIcon } from "components/UI/ButtonRoundedIcon"

const App = () => {
  const [step, setStep] = useState(1)
  const { asPath } = useRouter()

  return (
    <>
      <Layout title="Discord App">
        <Layout2>
          <TopComponent>
            <Button2 text="Busca o inicia una conversación" />
          </TopComponent>

          <div className="h-full m-2">
            <button
              className={`${
                asPath === "/app" && "bg-gray1"
              } rounded-md flex items-center space-x-3 p-2 w-full`}
            >
              <ManWavingIcon />
              <h2>Amigos</h2>
            </button>

            <div className="flex items-center justify-between mt-3">
              <h2 className="uppercase text-xs text-graylight">
                mensajes directos
              </h2>
              <PlusIcon className="w-4 text-graylight" />
            </div>
          </div>
          <div className="py-3 px-2 bg-black1 flex items-center justify-between">
            <UserIcon />
            <div className="flex space-x-3">
              <MicroIcon />
              <HeadsetsIcon />
              <ConfigIcon />
            </div>
          </div>
        </Layout2>
        <Layout3>
          <TopComponent>
            <section className="flex justify-between items-center w-full pr-5">
              <div className="flex items-center space-x-7 m-2 px-2">
                <div className="flex space-x-3 border-r border-gray5 pr-3">
                  <ManWavingIcon />
                  <h2>Amigos</h2>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className={`${step === 1 && "bg-gray5"} py-1 px-2 rounded-md`}
                >
                  Conectado
                </button>
                <button
                  onClick={() => setStep(2)}
                  className={`${step === 2 && "bg-gray5"} py-1 px-2 rounded-md`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setStep(3)}
                  className={`${step === 3 && "bg-gray5"} py-1 px-2 rounded-md`}
                >
                  Pendiente
                </button>
                <button
                  onClick={() => setStep(4)}
                  className={`${step === 4 && "bg-gray5"} py-1 px-2 rounded-md`}
                >
                  Sugerencias
                </button>
                <button
                  onClick={() => setStep(5)}
                  className={`${step === 5 && "bg-gray5"} py-1 px-2 rounded-md`}
                >
                  Bloqueado
                </button>
                <button className="py-[1px] px-2 rounded-md bg-green1">
                  Añadir amigo
                </button>
              </div>

              <div className="flex space-x-5">
                <NewMessageIcon />
                <InboxIcon />
                <HelpIcon />
              </div>
            </section>
          </TopComponent>

          <section className="flex h-full">
            <div className="w-full lg:w-8/12 px-10 pt-4 border-r border-gray5">
              <input placeholder="Buscar" className="rounded-md py-1" />

              <div className="mt-5">
                {step === 1 ? (
                  <>
                    <h2 className="uppercase text-xs">conectado</h2>

                    <div className="flex flex-col space-y-3 mt-3">
                      {new Array(10)
                        .fill({ name: "User", status: "Ausente" })
                        .map(({ name, status }, i) => (
                          <div
                            key={i}
                            className="flex justify-between pt-2 border-t border-gray5"
                          >
                            <div className="flex space-x-3 items-center">
                              <UserIcon />
                              <div className="flex flex-col leading-5">
                                <h2>{name}</h2>
                                <p className="text-sm">{status}</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <ButtonRoundedIcon Icon={<MessageIcon />} />
                              <ButtonRoundedIcon Icon={<DotsIcon />} />
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                ) : (
                  <h1>Nothing</h1>
                )}
              </div>
            </div>
            <div className="hidden lg:flex flex-col w-4/12 pt-4 px-2">
              <h1>Activo ahora</h1>

              <div className="mx-5 mt-5 mx-auto text-center">
                <h2 className="font-bold">Por ahora está todo tranquilo...</h2>
                <p>
                  Cuando un amigo empiece a realizar una actividad, como jugar o
                  hablar por voz, ¡te lo mostraremos aquí!
                </p>
              </div>
            </div>
          </section>
        </Layout3>
      </Layout>
    </>
  )
}
export default App
