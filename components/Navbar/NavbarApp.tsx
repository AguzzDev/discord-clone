import { motion } from "framer-motion"
import { useRouter } from "next/router"

import DiscordLogo2 from "public/svg/DiscordLogo2"
import PlusIcon from "public/icons/PlusIcon"

export const NavbarApp = () => {
  const { asPath } = useRouter()

  const Button = ({Icon}) => {
    return (
      <motion.button
        initial={{ borderRadius: "100%" }}
        whileHover={{ borderRadius: "30%" }}
        transition={{ duration: 0.3 }}
        className="bg-gray1 w-12 h-12 flex items-center justify-center rounded-full"
      >
        {Icon}
      </motion.button>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center py-5 px-3">
      <div className="flex relative">
        {asPath && <div className="absolute -left-[1.1rem] rounded-sm w-2 h-10 mt-1 bg-white mr-2"></div>}
        <button className="bg-blue2 px-[9px] py-[13px] rounded-xl">
          <DiscordLogo2 className="text-white" />
        </button>
      </div>

      <div className="flex flex-col space-y-2 mt-5">
        <Button Icon={<PlusIcon className="text-green1"/>}/>
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <Button></Button>
        ))}
      </div>
    </div>
  )
}
