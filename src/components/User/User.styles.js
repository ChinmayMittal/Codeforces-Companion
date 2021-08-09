import styled from "styled-components" ;

export const Wrapper = styled.div`
border-radius : 40px ; 
border : 3px solid black ; 
background-color : white ; 
box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
-webkit-box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
-moz-box-shadow: 10px 10px 44px 0px rgba(0,0,0,0.62);
margin : 20px auto ; 
width : 70%;
padding : 5px ; 
color : var(--medGrey) ; 
@media screen and (max-width : 500px ){
    width : 90% ; 
}
` ; 

export const Content = styled.div`
display : flex ; 
justify-content : center ; 
padding : 20px ;
margin-right : 20px ; 
align-items : center ;
.info{
    h3{
        @media screen and (max-width :480px ){
            font-size : var(--fontMed) ; 
        }
    }
    h1{
        @media screen and (max-width : 480px  ){
            font-size : var(--fontBig) ; 
        }
    }
}
.profile-pic{
    img{
        width : 200px ;
        @media (max-width:400px){
            width : 100px ; 
        } 
    }
}

` ; 