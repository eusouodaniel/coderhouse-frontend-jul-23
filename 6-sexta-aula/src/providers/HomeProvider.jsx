import { useState } from "react"
import HomeContext from "../contexts/HomeContext";

export default function HomeProvider({ children }) {
  const [message, setMessage] = useState('Utilizando custom provider');
  function getMessage() {
    return message;
  }
  return <HomeContext.Provider value={{ getMessage, message }}>{children}</HomeContext.Provider>
}