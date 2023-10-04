import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './EmployeeInfo.css';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

const EmployeeInfo = ({ data }) => {
    return (
        <div className='employee-container'>
            {
                data.map((employee, index) => {
                    return (
                        <EmployeeCard employee={employee} key={index} />
                    );
                })
            }
        </div>
    );
}

EmployeeInfo.propTypes = {
    data: PropTypes.array.isRequired // Define PropTypes for the 'data' prop
}

export default EmployeeInfo;