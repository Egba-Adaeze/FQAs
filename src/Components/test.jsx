import React, {useState,createContext} from 'react';

const AppContext = createContext(null);

export const test = () => {
    const [userName, setUserName] = useState("PeroTech")
  return (
    <div>test</div>
  )
}
