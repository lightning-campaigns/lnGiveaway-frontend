import React from "react"

interface PropTypes {
  platform?: String
  path?: string
  text: string
}
const Button = (props: PropTypes) => {
  return (
    <>
      <button className="btn bg-blue-700 flex justify-center items-center space-x-4 text-2xl text-center px-3 py-1 w-4/5 rounded-2xl text-white">
        <span>
          <img className="mr-2" width={20} height={40} src={props.path} alt="" />
        </span>
        {props.text} {props.platform}
      </button>
    </>
  )
}

export default Button
