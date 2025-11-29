import React from "react"

export const Button = ({ children }: { children: React.ReactNode }) => {

  const handleClick = () => {
    console.log("workig")
    alert('working')
  }

  return (
    <button
      className="cursor-pointer"
      onClick={handleClick}>{children}</button>
  )
}
