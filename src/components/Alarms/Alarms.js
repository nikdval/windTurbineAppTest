import React from 'react';
import BasicWrapper from '../BasicWrapper/BasicWrapper';
import './Alarms.scss';

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
            {alarms.length ===0 && <h4 className="no-alarms">No problems detected</h4>}
            {alarms.length > 0 && <table className="alarms-table">{displayAlarms}</table>}
        </BasicWrapper>
    )
}

export default Alarms;