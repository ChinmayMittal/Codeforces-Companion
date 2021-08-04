import styled from "styled-components" ; 

export const Wrapper = styled.div `
display : flex ; 
align-items : center ; 
height : 100px ; 
padding : 0 20px ;
/* background-color : white ;  */
 
` ; 

export const Content = styled.div`
background : white ; 
margin : 0 auto ; 
border-radius : 40px ; 
border : 3px solid black ; 
display : relative ;
height : 55px ; 
width : 70% ; 
position : relative ; 
box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
-webkit-box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
-moz-box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
input{
    height : 40px ; 
    color : var(--medGrey ) ;  
    font-size : 28px ; 
    width : 100% ;
    border : 0 ; 
    padding-left : 60px ; 
    padding-top : 5px ;   
    background : transparent ; 
    /* background-color : white ;  */
    :focus{
        outline : none ; 
    }
    @media screen and ( max-width : 480px ){
        font-size : 16px ; 
    }
}
@media screen and (max-width:500px){
    width : 100% ; 
}

` ; 

export const Img = styled.img`
position : absolute ; 
left : 15px; 
top : 10px ; 
width : 30px ; 
` ; 