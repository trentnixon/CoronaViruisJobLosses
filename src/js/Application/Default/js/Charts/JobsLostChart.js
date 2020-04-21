import React from "react";
import update from 'react-addons-update'
import Chart from "react-apexcharts";

const numberWithCommas = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series:this.props.Data[0],
        options: {
          chart: {
            type: 'bar',
            toolbar: { show: false, }
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top', // top, center, bottom
              },
               horizontal: true,
                endingShape: 'flat',
                columnWidth: '80%',
                distributed: false,
            }
          },
          colors: ['#c70000','#0084c6'],
          dataLabels: {
           // enabled: this.props.dataLabels,
            formatter: function (val) {
              return  numberWithCommas(val) ;
            },
            offsetY: 0,
            offsetX: 50,
            style: {
              fontSize: '10px',
              colors: ["#6b5840"]
            }
          },
          xaxis: {
            categories: this.props.Data[1],
            type: 'category',
            position: 'bottom',
            width:"100%",
            axisBorder: {  show: true, width: '100%',  },
            axisTicks: { show: false  },
            labels: {show: true,},
            tooltip: { enabled: true, }
          },
          
          yaxis: {
            show: true,
            axisBorder: { show: true },
            axisTicks: { show: true, },
            floating: false,
            labels: {
              show: true,
              formatter: function (val) {
                return numberWithCommas(val);
              }
            }
          },
          legend: {
            show: true,
            floating:false,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 0,
            fontSize: '12px',
            width:'100%',
            labels: {
              colors: '#767676',
              useSeriesColors: false
            },
            itemMargin: {
              horizontal: 10,
              vertical: 0
            },
          },
          responsive: [
            {
              breakpoint: 768,
              options: {
                plotOptions: {
                  bar: {
                  horizontal: false,
                }
                },
                yaxis: {
                  //show:false
                },
                dataLabels: {
                  offsetY: -20,
                  offsetX: 0,
                }
              }
            }
          ]
        },
      }
    }

    componentWillUpdate(){ return true;}
 //   componentDidUpdate(nextProps, nextState){ if(this.props.Country !== nextProps.Country){this.UpdateState() }}

    render() {
      //console.log("Bar Data", this.props.Data)
      return (
            <Chart
                options={this.state.options}
                series={this.props.Data[0]}
                type="bar"
                height={350}
            />
      );
    }
  }