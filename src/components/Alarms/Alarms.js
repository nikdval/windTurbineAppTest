import React from 'react';
import BasicWrapper from '../BasicWrapper/BasicWrapper';

const Alarms = ({alarms}) => {
    const displayAlarms = [];

    alarms.map(alarm => {
        displayAlarms.push(
            <tr>
                <td><i class="fas fa-exclamation-circle"></i></td>
                <td>{alarm}</td>
            </tr>
        )
    })

    return (
        <BasicWrapper title="Alarms">
            {alarms.length ===0 && <h3>No problems detected</h3>}
            {alarms.length > 0 && <table>{displayAlarms}</table>}
        </BasicWrapper>
    )
}

export default Alarms;