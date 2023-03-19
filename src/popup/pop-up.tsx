import React from "react"
import Header from "../components/header/header"
import Button from "../components/buttons/button"

const Popup = () => {
  return (
    <div className="page-container bg-white w-full flex flex-col items-center">
      <Header />
      <div className="h-3/4 bg-white w-full">
        <p>Popup content</p>
        <p>it works now</p>
      </div>
      <Button platform="twitter" path="Twitter.svg" text="Login with" />
    </div>
  )
}

export default Popup
