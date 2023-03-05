import React from "react"

const Header = () => {
  return (
    <>
      <header className="flex justify-center items-center text-base h-2/4 bg-white w-full py-4 border-b-2 border-t-0">
        <span>
          <img src="app-logo.svg" width={40} height={80} alt="" />
        </span>
        <h1 className="font-bold text-2xl">LNGiveAway</h1>
      </header>
    </>
  )
}

export default Header
