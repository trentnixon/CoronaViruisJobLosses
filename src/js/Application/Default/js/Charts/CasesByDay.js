import React from "react";
import update from 'react-addons-update'
import Chart from "react-apexcharts";

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series:this.props.Series,
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
                colors: {
                    ranges: [{
                        from: 0,
                        to: 100,
                        color: "#4575b4"
                    },{
                        from: 100,
                        to: 500,
                        color: "#91bfdb"
                    },{
                        from: 500,
                        to: 1000,
                        color: "#e0f3f8"
                    },{
                        from: 1000,
                        to: 10000,
                        color: "#fee090"
                    },{
                        from: 10000,
                        to: 1000000,
                        color: "#fc8d59"
                    },{
                      from: 10000,
                        to: 10000000,
                        color: "#d73027"
                      
                    }],
                }
            }
          },
          
          dataLabels: {
            enabled: this.props.dataLabels,
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
            categories: this.props.Categories,
            type: 'datetime',
            position: 'bottom',
            tickAmount: 5,

            forceNiceScale: true,
            axisBorder: {
              show: true
            },
            axisTicks: {
              show: true
            },
            labels: {
              show: true,
              rotate: -45,
            },
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
            tickAmount: 5,
            axisBorder: {
              show: true
            },

            axisTicks: {
              show: true,
            },
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
      };
    }

  UpdateState(){
    this.setState({ 
      series: update( this.state.series,{$set:this.props.Series } ),
      options:update(
          this.state.options,{
            xaxis: {
              categories:{$set:this.props.Categories}
            },
          }
      )
  })
  }

    componentWillUpdate(){ return true;}
    componentDidUpdate(nextProps, nextState){ if(this.props.Country !== nextProps.Country){this.UpdateState() }}

    render() {
      //console.log("Bar Data", this.state.series)
      return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
            />
      );
    }
  }