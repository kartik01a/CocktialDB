import React,{useState,useEffect ,useContext} from 'react'

const url = ' https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();


function AppProvider({children}) {

  const [loading,setLoading] = useState(true);
  const [searchTerm,setSearchTerm] = useState("a");
  const [cocktailList,setCocktailList] = useState([]);

    const fetchData = async ()=>{
      setLoading(true);
      try{
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        const {drinks} = data;
        if(drinks){
          const newList  = drinks.map((item)=>{
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass}= item;
            return{
              id:idDrink, name:strDrink, image:strDrinkThumb, info:strAlcoholic,glass:strGlass
            }
        });
          setCocktailList(newList);
        }
        else{
          setCocktailList([]);
        }
        setLoading(false);
      }
      catch(error){
        setLoading(false);
      }
    }

    useEffect(()=>{
      fetchData();
    },[searchTerm]);

  return (
    <AppContext.Provider value={{loading,setSearchTerm,cocktailList}}>
        {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider}