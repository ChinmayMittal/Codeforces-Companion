import styled from "styled-components" ;

export const Wrapper = styled.div`
width : 70% ;  
height : 400px; 
margin : 20px auto ;
position : relative ;
background : white ; 
border :3px solid black ; 
box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
-webkit-box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
-moz-box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
 border-radius : 5px ; 
 @media screen and (max-width: 500px){
     height : 275px ; 
 }
.canvas{
    position : absolute ;
}
` ;  