import axios from "axios";
import Turbine from "../models/Turbine.model";

const testTurbine = new Turbine("SG 5.0-145",5.0,"IEC IIB", 145)

export const GET = (query) =>{
    switch(query){
        case "alarms":
            return   axios
            .get(``)
            .then(() => testTurbine.getTurbineAlarms())
            .catch((err) => err);
        case "details":
            return   axios
            .get(``)
            .then(() => testTurbine.getTurbineDetails())
            .catch((err) => err);
    }
}

export const apiGenerateAlarms = () => GET("alarms");
export const apiGenerateDetails = () => GET("details");