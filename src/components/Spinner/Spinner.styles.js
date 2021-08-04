import styled from "styled-components" ; 


export const Wrapper = styled.div`
height : 30px ; 
width : 30px ;
border: 5px solid var(--lightGrey); 
border-top: 5px solid var(--medGrey);
border-radius : 50% ; 
margin : 10px auto ; 
animation : spin 0.8s linear infinite ; 
@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
}
` ; 