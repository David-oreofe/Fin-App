import React, {useContext} from 'react';
import sublinks from '/src/components/Data';
import { useState } from 'react';
import { createContext } from 'react';


export const AppContext = createContext();
export const useGlobalContext = () =>{
    return useContext(AppContext);
};

 
    export const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page,setPage] = useState({page:'',links:[]});
     
    const openSidebar = ()=>{
        setIsSidebarOpen(true);
    } 

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    
    const openSubmenu = (text,coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page);   
        setLocation(coordinates);
        setIsSubmenuOpen(true);    
    };
    

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
  
    return (
        <AppContext.Provider value={{
            isSubmenuOpen,
            isSidebarOpen,
            openSubmenu,
            openSidebar,
            closeSubmenu,
            closeSidebar,
            page,
            location,
            }}>
                {children}
            </AppContext.Provider>
        )  
    }

    
   
     