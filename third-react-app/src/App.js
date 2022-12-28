import React from "react"
import Navbar from "./components/Navbar"

export default function App() {
  const result = React.useState("Hi")
  console.log(result)
  return (
    <>
    <h1>{result[0]}</h1>
    <Navbar />
    </>
    
  )
}



