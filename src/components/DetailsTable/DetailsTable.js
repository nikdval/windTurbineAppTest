import React from 'react';
import BasicWrapper from '../BasicWrapper/BasicWrapper';

const metadata = [
    { 
        type: 'model',
        label:'Model',
        units: ''
     },
     { 
        type: 'ratePower',
        label:'Rate Power',
        units: 'MV'
     },
     { 
        type: 'windClass',
        label:'Wind Class',
        units: ''
     },
     { 
        type: 'rDiameter',
        label:'Rotor Diameter',
        units: 'm'
     }
 ]

const DetailsTable = ({details}) => {
    const rows = []
    metadata.map(item => {
        rows.push(
            <tr key={item.type}>
                <td>{item.label}</td>
                <td>{details[item.type] || - item.units}</td>
            </tr>
        )
    })

    return (
        <BasicWrapper title="General">
            <table>{rows}</table>
        </BasicWrapper>
    )
}

export default DetailsTable;