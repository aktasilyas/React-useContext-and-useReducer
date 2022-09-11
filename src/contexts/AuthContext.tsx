import {createContext, useState,useContext,useReducer} from 'react'
import {AuthReducer} from '../reducers/indexreducer';
type AuthContextProviderProps={
  children:React.ReactNode
}

const AuthContext=createContext('' as any);

 const AuthContextProvider=({children}:AuthContextProviderProps)=>{

  const [state,dispatch]=useReducer(AuthReducer,{
    user:localStorage.getItem('user')?JSON.parse(localStorage.getItem("user")as string):false
  });
  const data={
    ...state,
    dispatch
    }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export const useAuth=()=>useContext(AuthContext)
export default AuthContextProvider;