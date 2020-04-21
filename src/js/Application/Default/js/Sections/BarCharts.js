import React ,  { useState,useEffect }from 'react';
import BarChart from "../Charts/JobsLostChart";

let _ = require('lodash');

const JobsChart = (props)=>{
    const [Chart, setChart] = useState(false); 

    //const numberWithCommas = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}

    const Create = ()=>{
        let Arr1=[],Arr2=[], Series=[], Cats=[];
        
        Cats  = _.orderBy(props.UI.Categories, ["JLInt"],['desc']);
        //console.log(Cats);
        Cats.map((c,i)=>{
            if(c.Category !== "Total" && parseInt(c["Jobs lost"],10) !== 0  ){

                Arr1.push( parseInt(c['Jobs lost'],10))
                Arr2.push( parseInt(c['Stood down'],10))
                Series.push( c['Category'])
            }
        })

       setChart([ 
        [{
            data: Arr1,
            name:"Jobs Lost"
          }, {
            data: Arr2,
            name:"Stood Down"
          }],
          Series
       ])
       return true
    }
    useEffect(() => { 
            Create();
    },[]);
    if(Chart === false){ return(<div>Loading</div>)}
    else{
        return (
            <BarChart Data={Chart}  />
        )
    }
    
}

export default JobsChart;

//  