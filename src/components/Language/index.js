import React from "react" ; 
import {Wrapper} from "./Language.styles" ; 
import {Bar } from "react-chartjs-2" ; 
import {Chart} from "react-google-charts" ; 
// import zoomPlugin from 'chartjs-plugin-zoom';
// Chart.register(zoomPlugin);
const Language = ({data , handle }) => {
//     return <Wrapper>
//     <Bar
//         data = {{
//         labels : Object.keys(data) , 
//         datasets : [
//             {
//                 axis: 'y' , 
//                 label : "Languages" , 
//                 data : Object.values(data) , 
//                 backgroundColor : [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//                 ] , 
//                 borderColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//                  ],
//                 borderWidth : 1
//             }
//         ]

//     }}
//     options = { {
//     responsive: true,
//     maintainAspectRatio: false,
//     indexAxis: 'y',
//     plugins : {
//         zoom : {
//             pan :{
//                 enabled : true , 
//                 mode : "y" , 
//                 speed : 10 
//             } , 
//             zoom: {
//             wheel: {
//                 enabled: true,
//             },
//             pinch: {
//                 enabled: true
//             },
//             mode: 'y',
//         }
//       }
//     }
//   } } 
//     />
//     </Wrapper>
return <Wrapper>
       <Chart
         width={'100%'}
         height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                title: 'Languages of '+ handle,
                // Just add this option
                legend : "none" , 
                colors :[
                    '#d22d77',
                    '#cdd22d',
                    '#2dd0d2',
                    '#d22d2d' , 
                    '#f4c725' , 
                    '#2dd23d',
                    '#990033' , 
                    '#c203fc' , 
                    '#03bafc'
                ] , 
                chartArea : {
                    height : "90%" ,
                    width : "90%"
                } , 
                is3D: true,
            }}
       />
</Wrapper>
}

export default Language ; 