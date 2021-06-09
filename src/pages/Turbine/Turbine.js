import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {generateDetails, generateAlarms} from '../../store/turbineActions';
import Alarms from '../../components/Alarms/Alarms';
import DetailsTable from '../../components/DetailsTable/DetailsTable';

const Turbine = (props) => {
    const dispatch = useDispatch();
    const details = useSelector((state)=> state.turbine.details);
    const alarms = useSelector((state)=>state.turbine.alarms);

    const isData = details !== null;
    
    // Runs only in the begining
    useEffect(()=>{
        dispatch(generateDetails());
        dispatch(generateAlarms());
    },[]);
    
    // Generates alarms every x seconds
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(generateAlarms());
            console.log('This will run every second!');
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // When loading or no data available
    if (!isData) return <div>Please wait, loading.</div>;
   
    return (
        <div className="turbine">
            <h2>{details.name}</h2>
            <DetailsTable details={details}/>
            <Alarms alarms={alarms} />
        </div>
    )
}

export default Turbine;