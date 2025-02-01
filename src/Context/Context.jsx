import { createContext,useState,useEffect} from "react";

export const Appcontext = createContext();

const Appcontextprovider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('email')||'');
  const value = {
     token,setToken
  };

  useEffect(() => {
    setToken(localStorage.getItem('email'))
  }, [token])
  


  return (
    <Appcontext.Provider value={value}>
      {props.children}
    </Appcontext.Provider>
  );
};

export default Appcontextprovider;
