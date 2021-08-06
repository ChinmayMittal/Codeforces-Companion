import React from 'react' ; 
import {Wrapper} from "./Tags.styles" ; 
import { Pie } from "react-chartjs-2" ; 
import {Chart} from "react-google-charts" ; 

const Tags = ({tagsData , handle}) => {
//     return <Wrapper><Pie
//                 data = {{
//             labels : Object.keys(tagsData) , 
//             datasets : [{
//                 label : "Tags" , 
//                 data : Object.values(tagsData) , 
//                 backgroundColor: [
//                 'rgb( 0 , 265, 0 )',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 0, 0 )' , 
//                 'rgb(255, 153, 0)' , 
//                 'rgb(255, 102, 0)' , 
//                 'rgb(204, 51, 0)' , 
//                  'rgb(153, 0, 51)' , 
//                  'rgb( 0 , 0 , 256)' , 
//                  'rgb(255, 204, 0)' , 
//                  'rgb( 0 , 0 , 0)'
//                 ],
//             }]
// }}   
//         options = {{
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins : {
//             legend : {
//             display : true , 
//             align : 'start' , 
//             position : 'right'
//             }
//         }
//         }}
//     /></Wrapper>
console.log(tagsData) ; 
return <Wrapper>
    <Chart
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          height={'100%'} 
          width={'100%'}
          data={tagsData}
          options={{
              title : "Tags of " + handle , 
            legend: {
            position: 'right',
            alignment: 'center',
            textStyle: {
            fontSize: 12,
            fontName: 'Roboto'
            }
            } , 
            pieHole: 0.4,
            chartArea : {
                    height : "70%" ,
                    width : "80%"
                } , 
          }}

    />
</Wrapper> ; 
} ; 


export default Tags ; 