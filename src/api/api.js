import axios from "axios";
import Turbine from "../models/Turbine.model";

const testTurbine = new Turbine("SG-Test-Wind-Turbine","SG 5.0-145",5.0,"IEC IIB", 145)

const toJSONresponse = (data) => {
    return {
            "response_code": 0,
            "data": data,
            "status": 200,
            "statusText": "OK",
            "headers": {
              "cache-control": "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
              "content-type": "application/json",
              "expires": "Thu, 19 Nov 1981 08:52:00 GMT",
              "pragma": "no-cache"
            },
            "config": {
              "url": "https://opentdb.com/api.php?amount=10&category=19&type=multiple&encode=url3986",
              "method": "get",
              "headers": {
                "Accept": "application/json, text/plain, */*"
              },
              "transformRequest": [null],
              "transformResponse": [null],
              "timeout": 0,
              "xsrfCookieName": "XSRF-TOKEN",
              "xsrfHeaderName": "X-XSRF-TOKEN",
              "maxContentLength": -1
            },
            "request": {}
        }
}

export const GET = (query) =>{
    switch(query){
        case "alarms":
            return   axios
            .get(``) // link to the server
            .then(() => toJSONresponse(testTurbine.getTurbineAlarms()))
            .catch((err) => err);
        case "details":
            return   axios
            .get(``) // link to the server
            .then(() => toJSONresponse(testTurbine.getTurbineDetails()))
            .catch((err) => err);
    }
}

export const apiGenerateAlarms = () => GET("alarms");
export const apiGenerateDetails = () => GET("details");