import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();
// useGlobalContext needs access to the context you created and want to use
export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = (props) => {
  const [name, setName] = useState("Wale");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
