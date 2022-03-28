import { Button1 } from "components/UI/Button1"
import DiscordLogo from "public/svg/DiscordLogo"
import { useRouter } from "next/router"

export const Navbar = () => {
  const router = useRouter()
  const nav: string[] = [
    "descargar",
    "nitro",
    "seguridad",
    "soporte tecnico",
    "blog",
    "empleos",
  ]

  return (
    <nav className="py-5 max-w-6xl absolute top-0 z-50 w-full">
      <div className="flex items-center justify-between">
        <div>
          <DiscordLogo className="text-white" />
        </div>
        <div className="flex space-x-10">
          {nav.map((item) => (
            <h1 className="capitalize">{item}</h1>
          ))}
        </div>

        <Button1 event={()=> router.push("/login")} text="Iniciar sesión" />
      </div>
    </nav>
  )
}
