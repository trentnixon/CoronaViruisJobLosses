import React, { Component } from 'react';

// Full List
//import CasesByDayFullList from "./js/Sections/LIVE/LIVE_CasesPerDayFullList";
//import DaysPast100FUll from "./js/Sections/LIVE/LIVE_DaysPast100FullList";
//import DeathandRecovery from "./js/Sections/LIVE/LIVE_DeathAndRecoveredFullList";

 import BigNumbers from "./js/Sections/NumbersContainer";
import Title from "./js/Sections/SectionTitle"
import List from "./js/Sections/JobLostList";
import BarChart from "./js/Sections/BarCharts";
export default  class Default extends Component {
  componentWillMount(){}
  render() {
    //console.log(this.props)
    return(
  
        <div id="JobLosses" className="GlabsContainer">
          <Title Copy="Job loss tracker: latest figures"/>
          <BigNumbers {... this.props}/>
          <Title Copy="Job losses by industry"/>
          <BarChart {... this.props}/>
          <Title Copy="Job loss announcements by company or group"/>
          <List {... this.props}/>
           <div className="row notes">
          
            {this.props.UI.About}
          </div>
        </div>
    )
  } 
}


// <CasesByDayFullList {... this.props}/> 