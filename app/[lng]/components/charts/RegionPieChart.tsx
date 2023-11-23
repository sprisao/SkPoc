// components/RegionPieChart.tsx

import React from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const pieData = {
    labels: ['서울', '경기', '강원', '충북', '충남', '경북', '경남', '전북', '전남', '제주'],
    datasets: [
        {
            data: [657, 512, 460, 391, 488, 400, 300, 241, 402, 320],
            backgroundColor: [
                /*좀 더 연하지만 밝은 톤으로 변경*/
                '#FFC0CB', // 변경된 핑크
                '#B0E0E6', // 변경된 파우더 블루
                '#FFD700', // 변경된 골드
                '#FFA07A', // 변경된 라이트 코랄
                '#FFB6C1', // 변경된 라이트 핑크
                '#87CEFA', // 변경된 라이트 스카이 블루
                '#90EE90', // 변경된 라이트 그린
                '#FFDEAD', // 변경된 네모아홉
                '#FFA500', // 변경된 오렌지
                '#D2B48C', // 변경된 탄
            ],
        },
    ],
};

const pieOptions : ChartOptions = {
    plugins: {
        datalabels: {
            color: '#fff',
            textAlign: 'right',
            font: {
                weight: 'bold',
            },
            formatter: (value, context) => {
                return context.chart.data.labels[context.dataIndex];
            },
        },
        legend: {
            display: false, // 라벨이 차트에 포함되므로 범례를 숨깁니다.
        },
        title: {
            display: true,
            text: '지역별 가입자 수',
        },
    },
};

const RegionPieChart = () => {
    // @ts-ignore
    return <Pie data={pieData} options={pieOptions}/>;
};

export default RegionPieChart;
