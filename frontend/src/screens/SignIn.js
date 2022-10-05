
import React from 'react'
import { GoogleButton } from "react-google-button";


const SignIn = () => {
  return (
    <div>
      <h1 className="text-center py-5">Sign In</h1>
      <div className="w-100 mx-auto d-flex justify-content-center py-4">
        <GoogleButton />
      </div>
    </div>
  );
}

export default SignIn