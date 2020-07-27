import React,{useEffect,useState} from 'react';
import {fetchDailydata,fetchStateData} from '../../api/index';
import styles from './Chart.module.css';
import { Line, Bar } from 'react-chartjs-2';
import CardState from '../Card/CardState';
const Chart = ({mystate}) => {
    const [dailyData,setDailyData] = useState([]);
    const [stateData,setStateData] = useState([]);
    useEffect(() => {
        const fetchMyAPI = async () => {
          const initialDailyData = await fetchDailydata();
          setDailyData(initialDailyData);
        };
        fetchMyAPI();
      }, []);
      useEffect(() => {
        const fetchMyData = async () => {
          const initialDailyData = await fetchStateData();
          setStateData(initialDailyData);
        };
        fetchMyData();
      }, []);
     // console.log(dailyData[dailyData.length-1]);
      let datavalue='';
      let selectedvalue='';
        if(mystate)
        datavalue = stateData.map((dataItem)=>{
                if(dataItem.st===mystate){
                    selectedvalue=dataItem;
                    //console.log(selectedvalue);
                    return dataItem;
                }
        })
        const LineChart = (
          dailyData.length
          ?(
          <Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Confirmed',
                    borderColor:'#3333ff',
                    borderCapStyle: "butt",
                    fill:true,
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    borderCapStyle: "butt",
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    fill:true,
                },{
                    data:dailyData.map(({recovered})=>recovered),
                    label:'Recovered',
                    borderColor:'rgba(0, 255, 0, 0.5)',
                    borderCapStyle: "butt",
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    fill:true,
                },
                {
                    data:dailyData.map(({active})=>active),
                    label:'Active',
                    borderColor:'orange',
                    borderCapStyle: "butt",
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    fill:true,
                }
            ],
            }}
          />):null
      )
      
      const barChart = (
        selectedvalue ? (
          <Bar
            data={{
              labels: ['Confirmed', 'Active','Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'orange', 'rgba(0, 255, 0, 0.5)','rgba(255, 0, 0)'],
                  data: [selectedvalue.confirmed, selectedvalue.active,selectedvalue.recovered,selectedvalue.deaths],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state is ${mystate}` },
            }}
          />
        ) : LineChart
      );
    return(
      <React.Fragment>
          <div>
            {mystate ? <CardState selectedvalue={selectedvalue}/> : null}
          </div>
          <div className={styles.container}>
            {mystate ? barChart : LineChart}
          </div>
      </React.Fragment>
    )
}
export default Chart;