import React from 'react' ; 
import {Wrapper} from "./Tags.styles" ; 
import { Pie } from "react-chartjs-2" ; 


const Tags = ({tagsData}) => {
    return <Wrapper><Pie
                data = {{
            labels : Object.keys(tagsData) , 
            datasets : [{
                label : "Tags" , 
                data : Object.values(tagsData) , 
                backgroundColor: [
                'rgb( 0 , 265, 0 )',
                'rgb(54, 162, 235)',
                'rgb(255, 0, 0 )' , 
                'rgb(255, 153, 0)' , 
                'rgb(255, 102, 0)' , 
                'rgb(204, 51, 0)' , 
                 'rgb(153, 0, 51)' , 
                 'rgb( 0 , 0 , 256)' , 
                 'rgb(255, 204, 0)' , 
                 'rgb( 0 , 0 , 0)'
                ],
            }]
}}   
        options = {{
            responsive: true,
            maintainAspectRatio: false,
            plugins : {
            legend : {
            display : true , 
            align : 'center' , 
            position : 'right'
            }
        }
        }}
    /></Wrapper>
} ; 


export default Tags ; 