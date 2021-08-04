import styled from "styled-components" ; 


export const Wrapper = styled.div`
/* background-color : white ;  */
padding  : 20px ; 
display : flex ; 
align-items : center ; 
justify-content : center ; 

` ; 

export const Content = styled.div`
color  : black ; 
font-size : 60px; 
margin-right : 20px ; 
@media screen and (max-width : 935px ){
    font-size : 40px ; 
}
@media screen and (max-width : 400px ){
    font-size : 25px ; 
}
` ; 
export const LogoImg = styled.img`
width : 80px ; 
@media screen and (max-width : 500px ){
    width : 60px ; 
}
` ; 
