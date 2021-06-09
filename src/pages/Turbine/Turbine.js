import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {generateDetails, generateAlarms} from '../../store/turbineActions';
import Alarms from '../../components/Alarms/Alarms';
import DetailsTable from '../../components/DetailsTable/DetailsTable';
import CustomIcon from '../../components/CustomIcon/CustomIcon';

import './Turbine.scss';

const Turbine = (props) => {
    const dispatch = useDispatch();
    const loading = useSelector((state)=>state.turbine.loading);
    const details = useSelector((state)=> state.turbine.details);
    const alarms = useSelector((state)=>state.turbine.alarms);

    const isData = details !== null;
    
    // Runs only in the begining
    useEffect(()=>{
        dispatch(generateDetails());
        dispatch(generateAlarms());
    },[dispatch]);
    
    // Generates alarms every x seconds
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(generateAlarms());
            console.log('This will run every second!');
        }, 5000);
        return () => clearInterval(interval);
    }, [dispatch]);

    // When loading or no data available
    if (loading) return <div>Please wait, loading.</div>;
    if (!isData) return <div>No available data</div>;

    const iconColor = alarms.length > 0 ? '#FF1D25' : '#FACD3C'
    return (
        <div className="turbine">
            <div className="turbine-title-wrapper">
                <CustomIcon name="windTurbine" classes="turbine-icon" color={iconColor}/>
                <h2>{details.name}</h2>
            </div>

            <DetailsTable details={details}/>
            <Alarms alarms={alarms} />
        </div>
    )
}

export default Turbine;