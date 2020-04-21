import axios from 'axios';
import store from "../store/store";

const FixInt = (int)=>{
    let FixedNum = parseFloat(int.replace(/,/g, ''));
    if(isNaN(FixedNum)){ return Number(0)}
    else{ return FixedNum}
}

const cleanUpdateData=(data)=>{

    data.map((d,i)=>{
        let DatStr = d["Date"].split('/')
        d.JLInt =FixInt(d["Jobs lost"])
        d.SDInt = FixInt(d["Stood down"]);
       // d.WFInt = FixInt(d["workforce total"]);
        d.SWInt = FixInt(d["Still working"]);
        d.DateStr = new Date(DatStr[2]+'.'+DatStr[1]+'.'+DatStr[0]).getTime() / 1000
    })
    return data;
} 

const cleanCategories = (data)=>{
    data.map((d,i)=>{
        d.JLInt =FixInt(d["Jobs lost"])
    })

    return data;
}
export function FetchData(){

    /** Set Properties */
  
    /** Set Methods */ 
    this.start = ($ImgPath, GLABSJSON, AppType) => {
 
        // Set G-Docs Path
        this.Gsheet ='https://interactive.guim.co.uk/docsdata/'+GLABSJSON+'.json';
        this.Cleaned=[]
        // Create Json Array 
       // this.init=[this.Gsheet] 
        this.init=[   
              'https://interactive.guim.co.uk/docsdata/1xeXIa0VLAW_9K768uJ3uTU06h6LoAKlKFL9sfMDDFDA.json'
        ]

        // Fetch Json Data for build and load into Reducers    
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {
              
                let Sheets = res[0].data.sheets;
                store.dispatch({ type:"STORE_TOTALS", payload:Sheets.about[0].about });
                store.dispatch({ type:"STORE_CATS", payload:cleanCategories(Sheets["latest totals - category"]) });
                store.dispatch({ type:"STORE_UPDATES", payload:cleanUpdateData(Sheets["updates"])});
                store.dispatch({ type:"UI_SET", payload:true });
                store.dispatch({ type:"STORE_DATA", payload:res });
            })
        )
        .catch(function (error) { console.log(error); });
    }
}
