$(function() {
	$('#awards_amount').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Unique award categories'
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
			data: [11, 15, 15, 15, 16, 17, 19, 20, 23, 30, 32, 28, 30, 29, 31],
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
			categories: ["New York Times","Slate","CNN","Washington Post","NPR","CBC News","Salon","ProPublica","MSNBC","Los Angeles Times","Las Vegas Sun","BBC News","WNYC","University of North Carolina","ESPN","CNET","WebMD","New West","National Film Board of Canada","Gotham Gazette","Center for Public Integrity","Associated Press"],
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
			data: [18,7,7,6,6,6,5,5,5,5,5,5,4,4,4,4,3,3,3,3,3,3]
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
			categories: ["New York Times","Slate","CNN","Washington Post","NPR","CBC News","Salon","ProPublica","MSNBC","Los Angeles Times","Las Vegas Sun","BBC News","WNYC","University of North Carolina","ESPN","CNET","WebMD","New West","National Film Board of Canada","Gotham Gazette","Center for Public Integrity","Associated Press"],
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
			data: [44,14,14,26,19,6,13,20,10,24,11,5,2,5,10,10,3,3,1],
			color: '#a6bddb'
		},{
			name: 'Winner',
			data: [18,7,7,6,6,6,5,5,5,5,5,5,4,4,4,4,3,3,3,3,3,3],
			color: '#2b8cbe'
		}]
	});
$('#errors').highcharts({
		chart: {
			type: 'line'
		},
		title: {
			text: 'Percent of project links that no longer work, by year'
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
			data: [18.18,27.27,30.30,10.91,44.44,30.99,12.16,19.32,9.30,11.22,11.43,6.67,5.94,11.11,3.67],
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
        "paging":         false
    } );
} );
});