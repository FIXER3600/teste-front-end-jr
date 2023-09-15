import React, { ReactNode, createContext, useEffect, useState } from "react"
import { httpClient, url } from "../constants"

export interface Product {
  name: string;
  description:string;
  photo:string;
  price: number;
}
interface GlobalProviderProps {
  children: ReactNode;
}
interface GlobalContextType {
  products: Product[];
  isLoading:Boolean;
}
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);


export const GlobalStorage: React.FC<GlobalProviderProps> = ({children})=> {
  const [products, setProducts] = useState<Product[]>([]);
 const [isLoading,setIsLoading]=useState(Boolean)

 useEffect(() => {
  setIsLoading(true)
  httpClient.get(`${url}`).then(({ data }) => {
    setProducts(data.products)
    setIsLoading(false)
  })
}, [])
  return (
    <GlobalContext.Provider
    value={{
    products,
    isLoading
    }}
  >
    {children}
  </GlobalContext.Provider>
  )
}

export default GlobalStorage