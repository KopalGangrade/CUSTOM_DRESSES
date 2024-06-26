import {useState, useContext, createContext} from 'react';

import React from "react";

const ContextAPI = React.createContext();

const AppProvider = ({children}) => {
    const [count, setCount] = useState(0);    
  return <div>
    <ContextAPI.Provider value="Kopal">
        {children}
    </ContextAPI.Provider>
  </div>;
};

export default AppProvider;


