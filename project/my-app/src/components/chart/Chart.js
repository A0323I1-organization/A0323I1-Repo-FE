import Chart from 'react-apexcharts'
export default function ChartNew() {
    const series = 
        [
            {
                name: 'com1',
                data: [100,200,300,400,500],
            },
            {
                name: 'com2',
                data: [12,123,521,400,500],
            }
        ]
    
    return (
        <Chart type='bar' series={series} options={{colors: ['red']}}></Chart>
    );
}