
export const isAuth = () => {
    if (window !== 'undefined') {
        
        
            if (localStorage.getItem("login")) {
                return true;
            } 
                return false;
           
       
    }
    return false;
    
};
