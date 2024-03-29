import { Component, OnInit } from '@angular/core';

declare const AmCharts: any;
declare var $: any;

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/pie.min.js';
import '../../../../assets/charts/amchart/ammap.min.js';
import '../../../../assets/charts/amchart/usaLow.js';
import '../../../../assets/charts/amchart/radar.js';
import '../../../../assets/charts/amchart/worldLow.js';

import '../../../../assets/charts/flot/jquery.flot.js';
import '../../../../assets/charts/flot/jquery.flot.categories.js';
import '../../../../assets/charts/flot/curvedLines.js';
import '../../../../assets/charts/flot/jquery.flot.tooltip.min.js';

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      AmCharts.makeChart('Stack-age', {
        type: 'serial',
        theme: 'light',
        dataProvider: [
          {
            age: '<20',
            visits: 40,
            color: ['#1de9b6', '#1dc4e9']
          },
          {
            age: '30',
            visits: 45,
            color: ['#899FD4', '#A389D4']
          },
          {
            age: '40',
            visits: 55,
            color: ['#1de9b6', '#1dc4e9']
          },
          {
            age: '50',
            visits: 45,
            color: ['#899FD4', '#A389D4']
          },
          {
            age: '60',
            visits: 50,
            color: ['#1de9b6', '#1dc4e9']
          },
          {
            age: '>70',
            visits: 55,
            color: ['#899FD4', '#A389D4']
          }
        ],
        valueAxes: [
          {
            gridAlpha: 0,
            axisAlpha: 0,
            lineAlpha: 0,
            fontSize: 0
          }
        ],
        startDuration: 1,
        graphs: [
          {
            balloonText: '<b>[[category]]: [[value]]</b>',
            fillColorsField: 'color',
            fillAlphas: 0.9,
            lineAlpha: 0.2,
            columnWidth: 0.3,
            type: 'column',
            valueField: 'visits'
          }
        ],
        chartCursor: {
          categoryBalloonEnabled: false,
          cursorAlpha: 0,
          zoomable: false
        },
        categoryField: 'age',
        categoryAxis: {
          gridPosition: 'start',
          gridAlpha: 0,
          axisAlpha: 0,
          lineAlpha: 0
        }
      });
      AmCharts.makeChart('bar-chart2', {
        type: 'serial',
        theme: 'light',
        marginTop: 10,
        marginRight: 0,
        valueAxes: [
          {
            id: 'v1',
            position: 'left',
            axisAlpha: 0,
            lineAlpha: 0,
            autoGridCount: false,
            labelFunction: function (value) {
              return +Math.round(value) + '00';
            }
          }
        ],
        graphs: [
          {
            id: 'g1',
            valueAxis: 'v1',
            lineColor: ['#1de9b6', '#1dc4e9'],
            fillColors: ['#1de9b6', '#1dc4e9'],
            fillAlphas: 1,
            type: 'column',
            title: 'Net Profit',
            valueField: 'sales',
            columnWidth: 0.3,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          },
          {
            id: 'g2',
            valueAxis: 'v1',
            lineColor: ['#a389d4', '#899ed4'],
            fillColors: ['#a389d4', '#899ed4'],
            fillAlphas: 1,
            type: 'column',
            title: 'Revenue ',
            valueField: 'visits',
            columnWidth: 0.3,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          },
          {
            id: 'g3',
            valueAxis: 'v1',
            lineColor: ['#04a9f5', '#049df5'],
            fillColors: ['#04a9f5', '#049df5'],
            fillAlphas: 1,
            type: 'column',
            title: 'Free Cash Flow',
            valueField: 'clicks',
            columnWidth: 0.3,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          }
        ],
        chartCursor: {
          pan: true,
          valueLineEnabled: true,
          valueLineBalloonEnabled: true,
          cursorAlpha: 0,
          valueLineAlpha: 0.2
        },
        categoryField: 'Year',
        categoryAxis: {
          dashLength: 1,
          gridAlpha: 0,
          axisAlpha: 0,
          lineAlpha: 0,
          minorGridEnabled: true
        },
        legend: {
          useGraphSettings: true,
          position: 'top'
        },
        balloon: {
          borderThickness: 1,
          shadowAlpha: 0
        },
        dataProvider: [
          {
            Year: '2014',
            sales: 2,
            visits: 4,
            clicks: 3
          },
          {
            Year: '2015',
            sales: 4,
            visits: 7,
            clicks: 5
          },
          {
            Year: '2016',
            sales: 2,
            visits: 3,
            clicks: 4
          },
          {
            Year: '2017',
            sales: 4.5,
            visits: 6,
            clicks: 4
          }
        ]
      });

      const chartData = [
        {
          year: '2019',
          bicycles: 45
        },
        {
          year: '2020',
          bicycles: 30
        },
        {
          year: '2021',
          bicycles: 55
        }
      ];
      AmCharts.makeChart('Statistics-sale', {
        type: 'serial',
        theme: 'light',
        autoMargins: false,
        addClassNames: true,
        zoomOutText: '',
        defs: {
          filter: [
            {
              id: 'shadow',
              width: '150%',
              height: '150%',
              feOffset: {
                result: 'offOut',
                in: 'SourceAlpha',
                dx: '2',
                dy: '2'
              },
              feGaussianBlur: {
                result: 'blurOut',
                in: 'offOut',
                stdDeviation: '10'
              },
              feColorMatrix: {
                result: 'blurOut',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0'
              },
              feBlend: {
                in: 'SourceGraphic',
                in2: 'blurOut',
                mode: 'normal'
              }
            }
          ]
        },
        fontSize: 15,
        pathToImages: '../amcharts/images/',
        dataProvider: chartData,
        dataDateFormat: 'YYYY',
        marginTop: 10,
        marginRight: 0,
        marginLeft: 0,
        autoMarginOffset: 5,
        categoryField: 'year',
        categoryAxis: {
          gridAlpha: 0,
          axisAlpha: 0,
          startOnAxis: true,
          tickLength: 0,
          color: '#fff',
          parseDates: true,
          minPeriod: 'YYYY',
          offset: 0,
          inside: true
        },
        valueAxes: [
          {
            fontSize: 0,
            gridAlpha: 0,
            axisAlpha: 0,
            minimum: 0,
            maximum: 100
          }
        ],
        graphs: [
          {
            id: 'g3',
            title: 'Bicycles',
            valueField: 'bicycles',
            lineAlpha: 1,
            lineColor: '#FFFFFF',
            lineThickness: 3,
            bullet: 'round',
            bulletBorderAlpha: 3,
            bulletAlpha: 1,
            bulletSize: 8,
            stackable: false,
            bulletColor: '#04A5F5',
            bulletBorderColor: '#fff',
            bulletBorderThickness: 3,
            balloonText:
              '<div style="margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:30px; color:#ffffff">[[value]]</div>'
          }
        ],
        chartCursor: {
          cursorAlpha: 1,
          fontSize: 0,
          zoomable: false,
          cursorColor: '#fff',
          categoryBalloonColor: '#04A5F5',
          fullWidth: true,
          categoryBalloonDateFormat: 'YYYY',
          balloonPointerOrientation: 'vertical'
        },
        balloon: {
          borderAlpha: 0,
          fillAlpha: 0,
          shadowAlpha: 0,
          offsetX: 40,
          offsetY: -50
        }
      });

      $.plot(
        $('#transactions'),
        [
          {
            data: [
              [0, 48],
              [1, 30],
              [2, 25],
              [3, 30],
              [4, 20],
              [5, 40],
              [6, 30]
            ],
            color: '#1dc4e9',
            bars: {
              show: true,
              lineWidth: 1,
              fill: true,
              fillColor: {
                colors: [
                  {
                    opacity: 1
                  },
                  {
                    opacity: 1
                  }
                ]
              },
              barWidth: 0.2,
              align: 'center',
              horizontal: false
            },
            points: {
              show: false,
              radius: 3,
              fill: true
            },
            curvedLines: {
              apply: false
            }
          }
        ],
        {
          series: {
            label: '',
            curvedLines: {
              active: true,
              nrSplinePoints: 0
            }
          },
          tooltip: {
            show: true,
            content: 'x : %x | y : %y'
          },
          grid: {
            hoverable: true,
            borderWidth: 0,
            labelMargin: 0,
            axisMargin: 0,
            minBorderMargin: 0
          },
          yaxis: {
            min: 0,
            max: 50,
            color: 'transparent',
            font: {
              size: 0
            }
          },
          xaxis: {
            color: 'transparent',
            font: {
              size: 0
            }
          }
        }
      );
      $.plot(
        $('#transactions1'),
        [
          {
            data: [
              [0, 48],
              [1, 30],
              [2, 25],
              [3, 30],
              [4, 20],
              [5, 40],
              [6, 30]
            ],
            color: '#a389d4',
            bars: {
              show: true,
              lineWidth: 1,
              fill: true,
              fillColor: {
                colors: [
                  {
                    opacity: 1
                  },
                  {
                    opacity: 1
                  }
                ]
              },
              barWidth: 0.2,
              align: 'center',
              horizontal: false
            },
            points: {
              show: false,
              radius: 3,
              fill: true
            },
            curvedLines: {
              apply: false
            }
          }
        ],
        {
          series: {
            label: '',
            curvedLines: {
              active: true,
              nrSplinePoints: 0
            }
          },
          tooltip: {
            show: true,
            content: 'x : %x | y : %y'
          },
          grid: {
            hoverable: true,
            borderWidth: 0,
            labelMargin: 0,
            axisMargin: 0,
            minBorderMargin: 0
          },
          yaxis: {
            min: 0,
            max: 50,
            color: 'transparent',
            font: {
              size: 0
            }
          },
          xaxis: {
            color: 'transparent',
            font: {
              size: 0
            }
          }
        }
      );
      $.plot(
        $('#transactions2'),
        [
          {
            data: [
              [0, 44],
              [1, 26],
              [2, 22],
              [3, 35],
              [4, 28],
              [5, 35],
              [6, 28]
            ],
            color: '#1dc4e9',
            bars: {
              show: true,
              lineWidth: 1,
              fill: true,
              fillColor: {
                colors: [
                  {
                    opacity: 1
                  },
                  {
                    opacity: 1
                  }
                ]
              },
              barWidth: 0.2,
              align: 'center',
              horizontal: false
            },
            points: {
              show: false,
              radius: 3,
              fill: true
            },
            curvedLines: {
              apply: false
            }
          }
        ],
        {
          series: {
            label: '',
            curvedLines: {
              active: true,
              nrSplinePoints: 0
            }
          },
          tooltip: {
            show: true,
            content: 'x : %x | y : %y'
          },
          grid: {
            hoverable: true,
            borderWidth: 0,
            labelMargin: 0,
            axisMargin: 0,
            minBorderMargin: 0
          },
          yaxis: {
            min: 0,
            max: 50,
            color: 'transparent',
            font: {
              size: 0
            }
          },
          xaxis: {
            color: 'transparent',
            font: {
              size: 0
            }
          }
        }
      );
      $.plot(
        $('#transactions3'),
        [
          {
            data: [
              [0, 40],
              [1, 30],
              [2, 25],
              [3, 38],
              [4, 30],
              [5, 38],
              [6, 30]
            ],
            color: '#1dc4e9',
            bars: {
              show: true,
              lineWidth: 1,
              fill: true,
              fillColor: {
                colors: [
                  {
                    opacity: 1
                  },
                  {
                    opacity: 1
                  }
                ]
              },
              barWidth: 0.2,
              align: 'center',
              horizontal: false
            },
            points: {
              show: false,
              radius: 3,
              fill: true
            },
            curvedLines: {
              apply: false
            }
          }
        ],
        {
          series: {
            label: '',
            curvedLines: {
              active: true,
              nrSplinePoints: 0
            }
          },
          tooltip: {
            show: true,
            content: 'x : %x | y : %y'
          },
          grid: {
            hoverable: true,
            borderWidth: 0,
            labelMargin: 0,
            axisMargin: 0,
            minBorderMargin: 0
          },
          yaxis: {
            min: 0,
            max: 50,
            color: 'transparent',
            font: {
              size: 0
            }
          },
          xaxis: {
            color: 'transparent',
            font: {
              size: 0
            }
          }
        }
      );
    }, 500);
  }
}
