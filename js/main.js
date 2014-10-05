$(function() {
	$('#awards_amount').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Awards Given, by year'
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'2000',
				'2001',
				'2002',
				'2003',
				'2004',
				'2005',
				'2006',
				'2007',
				'2008',
				'2009',
				'2010',
				'2011',
				'2012',
				'2013',
				'2014'
			],
			tickInterval: 2
		},
		yAxis: {
			min: 0,
			title: {
				text: ''
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true,
			enabled: false
		},
		plotOptions: {
			column: {
				pointPadding: 0,
				borderWidth: 0
			},
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y}'
				}
			}
		},
		series: [{
			name: 'Available awards',
			data: [11, 15, 15, 15, 16, 17, 19, 20, 23, 30, 32, 28, 30, 29, 34],
			color: "#1c9099"
		}
		// ,
		// {
		// 	name: 'Finalists and winners',
		// 	data: [44,66,66,55,63,71,74,88,86,98,105,105,101,99,109]
		// }
		],
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		}
	});

	$('#ranking1').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Total OJA Awards Won, by Organization, from 2000 to 2013'
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: ["New York Times","ProPublica","NPR","Slate","CNN","Washington Post","Los Angeles Times","CBC News","Salon","MSNBC","Las Vegas Sun","BBC News","WNYC","University of North Carolina","ESPN","CNET","Center for Public Integrity","WebMD","USA TODAY","University of Miami School of Communication","UC Berkeley Graduate School of Journalism","New West","National Film Board of Canada", "Mother Jones", "Gotham Gazette", "Associated Press", "Center for Investigative Reporting"],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
				align: 'First 20 news organisations'
			},
			labels: {
				overflow: 'justify'
			},
			tickInterval: 5
		},
		tooltip: {
			valueSuffix: ' awards won'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				},
				pointPadding: 0,
				borderWidth: 0
			},
			series: {
                color: '#2b8cbe'
            }
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [{
			name: '',
			data: [19,10,9,7,7,6,6,6,5,5,5,5,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3]
		}]
	});

	$('#ranking2').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Ratio Winner/Finalist'
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: ["New York Times","ProPublica","NPR","Slate","CNN","Washington Post","Los Angeles Times","CBC News","Salon","MSNBC","Las Vegas Sun","BBC News","WNYC","University of North Carolina","Texas Tribune","ESPN","CNET","Center for Public Integrity","WebMD","USA TODAY","University of Miami School of Communication","UC Berkeley Graduate School of Journalism","New West","National Film Board of Canada","Mother Jones","Gotham Gazette","Associated Press","Center for Investigative Reporting"],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
				align: 'First 20 news organisations'
			},
			labels: {
				overflow: 'justify'
			},
			plotLines: [{ //Initialisation des barres verticales
                color: 'red',
                dashStyle: 'line', //Pointillés
                width: 5,
                value: 33.3, // Position sur l'axe chronologique (Attention : les mois en javascript démarrent à zéro, donc mars = 2)
                label: {
                    rotation: 0,
                    text: '', //Nom affiché sur la barre verticale
                    textAlign: 'left',
                    align: 'left'
                }
            }],
			tickInterval: 20
		},
		tooltip: {
			valueSuffix: ' times'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: false
				},
				pointPadding: 0,
				borderWidth: 0
			},
			series: {
                stacking: 'percent'
            }
		},
		legend: {
			enabled: true,
			reversed: true
		},
		credits: {
			enabled: false
		},
		series: [
		{
			name: 'Finalist',
			data: [44,16,18,14,14,26,23,6,13,10,11,5,2,5,6,10,10,20,3,14,7,2,3,1,9,7,7,12],
			color: '#a6bddb'
		},{
			name: 'Winner',
			data: [19,10,9,7,7,6,6,6,5,5,5,5,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3],
			color: '#2b8cbe'
		}]
	});
$('#errors').highcharts({
		chart: {
			type: 'line'
		},
		title: {
			text: 'Percent of project links that are now broken, by year'
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'2000',
				'2001',
				'2002',
				'2003',
				'2004',
				'2005',
				'2006',
				'2007',
				'2008',
				'2009',
				'2010',
				'2011',
				'2012',
				'2013',
				'2014'
			],
			tickInterval: 2
		},
		yAxis: {
			min: 0,
			title: {
				text: ''
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y} %</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true,
			enabled: true
		},
		plotOptions: {
			column: {
				pointPadding: 0,
				borderWidth: 0
			},
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: false,
					format: '{point.y}'
				}
			}
		},
		series: [{
			name: 'Disabled links',
			data: [9.09,12.12,10.61,10.91,7.94,8.45,10.81,12.50,11.63,13.27,4.76,1.90,0.00,5.05,0.00],
			color: "#1c9099"
		}
		// ,
		// {
		// 	name: 'Finalists and winners',
		// 	data: [44,66,66,55,63,71,74,88,86,98,105,105,101,99,109]
		// }
		],
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		}
	});

	$(document).ready(function() {
    $('#explore').dataTable( {
        "ajax": 'js/explore.json',
        "order": [[ 3, "desc" ]],
        "scrollY":        "500px",
        "scrollCollapse": true,
        "paging":         false,
        "fnDrawCallback": function( oSettings ) { pymChild.sendHeight(); }
    } );
} );
});