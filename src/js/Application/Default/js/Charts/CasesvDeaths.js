import React from "react";
import update from 'react-addons-update'
import Chart from "react-apexcharts";

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series:this.props.Data[0],
        options: {
          chart: {
            height: 500,
            type: 'bar',
            toolbar: { show: false, }
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top', // top, center, bottom
              },
          
              horizontal: false,
                endingShape: 'flat',
                columnWidth: '80%',
                distributed: false,
                colors: {}
            }
          },
          colors: ['#c70000','#0084c6'],
          dataLabels: {
           // enabled: this.props.dataLabels,
            formatter: function (val) {
              return val ;
            },
            offsetY: -10,
            style: {
              fontSize: '10px',
              colors: ["#000000"]
            }
          },
          xaxis: {
            categories: this.props.Data[1],
            type: 'category',
            position: 'bottom',
            axisBorder: {
              show: true
            },
            axisTicks: { show: true  },
            labels: {
              show: true,},
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          
          yaxis: {
            axisBorder: { show: true },
            axisTicks: { show: true, },
            labels: {
              show: true,
              formatter: function (val) {
                return val;
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
              horizontal: 0,
              vertical: 0
            },
          }
          
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