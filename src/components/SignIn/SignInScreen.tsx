import React from 'react';

const SignInScreen = () => {

  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen bg-yellow-100">
        <h1 className="mb-10 text-2xl font-bold uppercase">Bienvenido a RAEP</h1>

        <div className="flex-col items-start max-w-xs w-full">
          <p className="pb-2">Username</p>
          <input id="123" name="username" disabled={false} type="text" className="border-black border h-10 p-2 w-full"/>
        </div>

        <div className="flex-col items-start max-w-xs w-full mt-8">
          <p className="pb-2">Password</p>
          <input id="124" name="password" disabled={false} type="text" className="border-black border h-10 p-2 w-full"/>
          <p className="text-right text-xs">Has olvidado la contraseña?</p>
        </div>

        <div className="flex-col items-center max-w-xs w-full mt-8">
          <button className="border bg-blue-400 rounded min-w-max w-full p-3 my-8">Ingresar</button>
          <p>No tienes una cuenta?<span className="ml-2 font-bold">Crea una.</span></p>
        </div>
    </div>
  );
}

export default SignInScreen;