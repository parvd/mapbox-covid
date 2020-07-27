import React,{useEffect,useState} from 'react';
import {fetchStateName} from '../../api/index';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Country.module.css';
const Country = ({handleStateChange}) => {
    const [StateSelecter,setStateSelctor] = useState([]);
    useEffect(()=>{
        const fetchMyAPI= async() => {
            setStateSelctor(await fetchStateName());
        }
        fetchMyAPI();
    },[setStateSelctor]);
    //console.log(StateSelecter);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleStateChange(e.target.value)}>
                <option value="ALL">India</option>
                {StateSelecter.map((state,i)=><option key={i} value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default Country;