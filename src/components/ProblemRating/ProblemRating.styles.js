import styled from "styled-components" ;

export const Wrapper = styled.div`
width : 70% ;  
height : 400px; 
margin : 20px auto ;
position : relative ;
background : white ; 
border :3px solid black ; 
box-shadow: 0px 0px 18px 20px rgba(0,0,0,0.13);
-webkit-box-shadow: 0px 0px 18px 20px rgba(0,0,0,0.13);
-moz-box-shadow: 0px 0px 18px 20px rgba(0,0,0,0.13);
 border-radius : 5px ; 
 @media screen and (max-width: 500px){
     height : 275px ; 
     width : 90% ; 
 }
.canvas{
    position : absolute ;
}
` ;  