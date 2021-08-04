export const fetchUserInfo =async ( handle ) => {
    const response = await fetch('https://codeforces.com/api/user.info?handles=' + handle )
    if(response.ok){
        const data = await response.json() ; 
        return data ;    
    } else{
        return { result : "not found"} ; 
    }
   
}


export const fetchContestInfo = async ( handle) => {
    const response = await fetch( "https://codeforces.com/api/user.status?handle=" + handle ) ; 
    if( response.ok ){
        const data = await response.json() ; 
        return data ; 
    }else{
        return { result : "not found"} ; 
    }

} 