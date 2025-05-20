import ImageLogin from "./assets/images/ImageLogin.svg" 

function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full bg-linear-to-br from-orange-700 to-amber-400 flex items-center justify-center flex-col text-white" name="left">

      <img className="w-full h-3/4" src={ImageLogin} alt="Login Image" />
      <h1 className="text-3xl font-bold mb-4">Secure Login Portal</h1>
      <p className="text-center">Acess your dashboarad securely with our projected <br /> login  system. Your data is encryped and secure.</p>

      </div>
      
      <div className="flex justify-center items-center flex-col w-1/2 h-full text-center" name="right">
      
      <h1 className="font-bold text-2xl">Welcome back</h1>
      <p>Enter your details to sign in to your account</p>

      <form className="w-full flex flex-col items-center justify-center" name="LoginArea">
        <div className="flex flex-col w-2/5 gap-3">
          <div className="flex flex-col text-left gap-1">
            <label htmlFor="userEmail">Email</label>
            <i class="fa-regular fa-envelope"></i>
            <input className="border rounded h-" type="email" placeholder="examppe@gmail.com" id="userEmail" />  
          </div>
        
          <div className="flex flex-col text-left gap-1">
            <label htmlFor="userPassword">Password</label>
            <input className="border rounded" type="password" id="userPassword" />

          </div>
        

        </div>


      </form>

      
        
      </div>
    </div>
  )
}

export default App
