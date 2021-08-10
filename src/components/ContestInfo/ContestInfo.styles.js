import styled from "styled-components" ; 


export const Wrapper = styled.div`
    /* display: block; */
    /* display: flex ; 
    justify-content : center ;  */
    overflow-x: auto;
    white-space: nowrap;
    margin : 10px auto ; 
 table{
    /* tbody {
    display: table;
    width: 100%;
    }
    thead{
        display: table;
        width : 100% ; 
    } */
    border : 1px solid black ; 
     th{
         background-color:var(--darkGrey) ; 
         color : white ; 
         padding : 20px ;
         font-size : 16px ;  
     }
     td{
         padding : 10px ; 
     }
     

        
     tr:nth-child(even){background-color: #f2f2f2;}
     tr:hover {background-color: #ddd;}
     background-color:white; 
     width : 400px; 
 }


` ; 