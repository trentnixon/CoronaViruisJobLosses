
import React ,  { useState,useEffect }from 'react';
let _ = require('lodash');

const TotalsContainer = (props)=>{
        const [Total, setTotal] = useState(_.find(props.UI.Categories, function(o) { return o.Category === "Total"; })); 
    
        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    // const FindTotal = ()=>{ setTotal(_.find(props.UI.Categories, function(o) { return o.Category === "Total"; }))}

    useEffect(() => { },[]);
    return(

            <div className="row bigNumbers">
                <div className="numWrapper" id="lost">
                    <p >Jobs Lost</p> 
                    <span>{ numberWithCommas(Total["Jobs lost"]) }</span>
                </div> 
                <div className="numWrapper" id="stoodDown">
                    <p>Stood down</p> 
                    <span>{numberWithCommas(Total["Stood down"])}</span>
                </div> 
              
            </div>
    )
}
export default TotalsContainer;