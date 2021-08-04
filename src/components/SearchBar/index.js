import React , {useState , useEffect  , useRef }from "react" ; 

import {Wrapper , Content , Img } from "./SearchBar.styles" ; 

import searchImage from "../../images/search-svgrepo-com.svg" ; 

const SearchBar = ({  setHandle }) => {
    const [ state , setState] =useState("") ; 
    const isInitial = useRef(true) ; 
    useEffect( () => {
        if(isInitial.current){
            isInitial.current = false ; 
            return; 
        }
        const timer = setTimeout( () => {
            setHandle(state) ; 
        } , 1000 ) ; 

        return () => {
            clearTimeout(timer) ; 
        }
    }, [state , setHandle , isInitial ]) ; 
    return (
        <Wrapper>
         <Content>
            <Img src = {searchImage} />
            <input type="text" placeholder="Codeforces Handle" value={state} onChange={
                event => {
                setState(event.target.value) ;
            }
            }/>
         </Content>
        </Wrapper>
    ) ; 
}

export default SearchBar ; 