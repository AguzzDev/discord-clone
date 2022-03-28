import { NavbarApp } from "components/Navbar/NavbarApp"
import Head from "next/head"

type Props = {
  children: JSX.Element | JSX.Element[]
  title?: string
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="flex w-screen min-h-screen">
        <div className="w-[4.8vw] bg-gray3">
          <NavbarApp />
        </div>
        {children}
      </section>
    </>
  )
}
export default Layout
