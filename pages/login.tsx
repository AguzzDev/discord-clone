import type { NextPage } from "next"

import LoginBackground from "public/svg/LoginBackground"
import { AuthForm } from "components/Form/AuthForm"

const Login: NextPage = () => {
  return (
    <section className="relative overflow-hidden h-screen bg-blue2">
      <LoginBackground className="fixed inset-0 h-screen w-screen" />

      <section className="absolute inset-0 z-50 grid place-content-center min-h-screen">
        <div className="flex flex-col items-center p-5 bg-gray1 w-[80vw] lg:w-[48vw] rounded-md">
          <div className="text-center">
            <h1>¡Hola de nuevo!</h1>
            <p>¡Nos alegramos mucho de volver a verte!</p>
          </div>

          {/* <AuthForm /> */}
        </div>
      </section>
    </section>
  )
}

export default Login
