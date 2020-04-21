import React ,  { useState,useEffect }from 'react';
let _ = require('lodash');
const List = (props)=>{
    const [Filter, setFilter] = useState("JLInt"); 
    const [asc, setAsc] = useState("desc"); 
    const [List, setList] = useState(false); 
    const numberWithCommas = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
  
    const CreateList = ()=>{
 
        let Arr=[];
        props.UI.UPdates.map((c,i)=>{ 
            //&& isNaN(parseInt(c["Jobs lost"],10)) === false
            if(c.Category !== "Total"){ Arr.push(c);} 
        }) 
        //console.log(Arr, Filter, asc)
        Arr  = _.orderBy(Arr, [Filter],[asc])
        setList(Arr)    
    }
    
    useEffect(() => { CreateList() },[Filter,asc]);

    if(List === false){
        return(
            <div> Creating List </div>
        )
    }
    else{ 
        return(
                <div className="TableofContent">
                        <div className="TableHeader display">
                                <div className="title"></div> 
                                <div className="Date" onClick={()=>{setFilter("DateStr"); setAsc((asc === 'asc')? 'desc':'asc')}}>Date</div>
                                <div className="Category" onClick={()=>{setFilter("Category"); setAsc((asc === 'asc')? 'desc':'asc')}}>Category</div>  
                                <div className="lost" onClick={()=>{setFilter("JLInt"); setAsc((asc === 'asc')? 'desc':'asc')}}>Jobs Lost </div>  
                                <div className="stoodDown" onClick={()=>{setFilter("SDInt"); setAsc((asc === 'asc')? 'desc':'asc')}}>Stood Down</div>  
                        </div>
                        <div className="scroll">
                    {
                        List.map((j,i)=>{
                            return(
                                <div key={i} className="display">
                                    <div className="title"> {j["Company name"]}</div>   
                                    <div className="Date"><span>{j.Date}</span></div> 
                                    <div className="Category">    {j.Category}</div>   
                                    <div className="lost">     {numberWithCommas(j["Jobs lost"])}</div>   
                                    <div className="stoodDown">{numberWithCommas(j["Stood down"])}</div>   
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            )
    }
}

export default List;
//           <div className="Workforce" onClick={()=>{setFilter("WFInt"); setAsc((asc === 'asc')? 'desc':'asc')}}>Total Workforce</div>                            
                      
//<div className="Workforce">{numberWithCommas(j["workforce total"])}</div>   