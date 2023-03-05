import React from "react"
import Header from "../components/header/header"
import Button from "../components/buttons/button"

const Popup = () => {
  return (
    <div className="bg-orange-300 w-full flex flex-col justify-center items-center">
      <Header />
      <p>Popup content</p>
      <p>it works now</p>
      <Button platform="twitter" path="Twitter.svg" text="Login with" />
    </div>
  )
}

export default Popup
