import axios from 'axios';
const url='https://covid19.mathdro.id/api/';
const urlIN='https://covid19.mathdro.id/api/countries/INDIA'
const urldaily='https://api.rootnet.in/covid19-in/stats/history';
const urlState='https://api.covidindiatracker.com/state_data.json';
const statedaily='https://api.covid19india.org/v4/timeseries.json';


export const fetchDataIN = async() =>{
    try{

        //const { data : {confirmed,recovered,deaths,lastUpdate} }= await axios.get(urlIN);
        //const modifiedData ={confirmed,recovered,deaths,lastUpdate};
        //return modifiedData;
        const { data : {data}} = await axios.get(urldaily);
        const modifiedData = data.map((dataItem)=>({
            date:dataItem.day,
            confirmed:dataItem.summary.total,
            deaths:dataItem.summary.deaths,
            recovered:dataItem.summary.discharged,
            active:dataItem.summary.total-dataItem.summary.discharged-dataItem.summary.deaths
            }));
            
            return modifiedData[modifiedData.length-1];
    }
    catch(error){
        
    }
}

export const fetchDailydata = async() =>{
    try{
        const { data : {data}} = await axios.get(urldaily);
        const modifiedData = data.map((dataItem)=>({
            date:dataItem.day,
            confirmed:dataItem.summary.total,
            deaths:dataItem.summary.deaths,
            recovered:dataItem.summary.discharged,
            active:dataItem.summary.total-dataItem.summary.discharged-dataItem.summary.deaths
            }));
            
            return modifiedData;
    }
    
    catch(error){   
        console.log(error);
    }
}

export const fetchStateName = async()=>{
    try{
        const data = await axios.get(urlState);
        const pd=data.data;
        const modifiedData = pd.map((pd)=>pd.state);
        modifiedData.sort();
        return modifiedData;
    }
    catch(error){
    console.log(error)
    }
}

export const fetchStateData = async()=>{
    try{
        const data = await axios.get(urlState);
        const pd=data.data;
        const modifiedData = pd.map((dataItem)=>({
            st:dataItem.state,
            active:dataItem.active,
            deaths:dataItem.deaths,
            recovered:dataItem.recovered,
            confirmed:dataItem.confirmed
            }));
        //console.log(modifiedData);
        return modifiedData;
    }
    catch(error){
    console.log(error)
    }
}

export const testing = async()=>{
    try{
        const {data} = await axios.get(urldaily);
        const pd =data.data
        const modifiedData = pd.map((dataItem)=>({
            date:dataItem.day,
            reg:dataItem.regional.map((itr)=>({
                st:itr.loc,
                confirmed:itr.totalConfirmed,
                recovered:itr.discharged,
                deaths:itr.deaths,
                active:itr.totalConfirmed-itr.discharged-itr.deaths
            }))
            }));
        console.log(modifiedData);
        return modifiedData;
    }
    catch(error){
    console.log(error)
    }
}



