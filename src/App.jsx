import { EnvelopeSimple, EyeSlash, FacebookLogo, GoogleChromeLogo, LockSimple } from "phosphor-react"
import ImageLogin from "./assets/images/ImageLogin.svg"

function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full bg-linear-to-br from-orange-700 to-amber-400 flex items-center justify-center flex-col text-white" name="left">
        <img className="w-full h-3/4" src={ImageLogin} alt="Login Image" />
        <h1 className="text-3xl font-bold mb-4">Secure Login Portal</h1>
        <p className="text-center">Acess your dashboarad securely with our projected <br /> login  system. Your data is encryped and secure.</p>
      </div>

      <div className="flex justify-center items-center flex-col w-1/2 h-full text-center gap-y-4" name="right">
        <div className="">
          <h1 className="font-bold text-2xl">Welcome back</h1>
          <p>Enter your details to sign in to your account</p>
        </div>


        <form className="w-full flex flex-col items-center justify-center" name="LoginArea">
          <div className="flex flex-col w-1/2 gap-3">
            <div className="flex flex-col text-left text-sm gap-1">
              <label className=" w-fit" htmlFor="userEmail">E-mail</label>
              <label className="border-2 rounded-md text-zinc-700 border-zinc-700 flex px-2 py-1 gap-1 items-center focus-within:border-amber-600" htmlFor="userEmail">
                <EnvelopeSimple size={24} />
                <input className="w-full outline-none" type="email" placeholder="example@gmail.com" id="userEmail" name="email" />
              </label>
            </div>

            <div className="flex flex-col text-left gap-1">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="userPassword">Password</label>
                <a className="outline-none text-amber-600 font-bold focus-visible:text-blue-950" href="">Forgot Password?</a>
              </div>
              <label className="border-2 text-zinc-700 border-zinc-700 rounded flex px-2 py-1 gap-1 items-center focus-within:border-amber-600" htmlFor="userPassword">
                <LockSimple size={24} />
                <input className="w-full outline-none" type="password" id="userPassword" placeholder="*********" />
                <EyeSlash size={24} />
              </label>
            </div>

            <button className="w-full h-8 mt-2 border rounded-md bg-linear-to-br from-amber-700 to-amber-400 text-sm text-white cursor-pointer transition duration-300 hover:transform hover:scale-105  "> Sign In</button>
          </div>
        </form>

        <div className="flex flex-col w-1/2 gap-y-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="w-1/3 border-b-2 border-s-zinc-500 flex h-2"></span>
            <p>or continue with</p>
            <span className="w-1/3 border-b-2 border-s-zinc-500 flex h-2"></span>
          </div>
          <div className="flex gap-5">
            <button className="w-1/2 h-8 text-sm font-bold border border-zinc-600 flex justify-center items-center rounded-md gap-1 cursor-pointer transition duration-300 hover:transform hover:scale-105 hover:bg-gray-100 hover:text-slate-400 ">
              <GoogleChromeLogo size={24} />
              Google
            </button>
            <button className="w-1/2 h-8 text-sm font-bold border border-zinc-600 flex justify-center items-center rounded-md gap-1 cursor-pointer transition duration-300 hover:transform hover:scale-105 hover:bg-gray-100 hover:text-blue-700 ">
              <FacebookLogo size={24} />
              Facebook
            </button>
          </div>
        </div>

        <div className="flex gap-2 text-sm">
          <label className="cursor-pointer" htmlFor="register">Don't have an account? </label>
          <a id="signUp" className="outline-none text-blue-800 font-bold focus-visible:text-blue-950" href="">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default App
