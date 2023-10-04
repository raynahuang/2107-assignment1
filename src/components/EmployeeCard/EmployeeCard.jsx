import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={employee.photo} alt={employee.name} />
            </div>

            <div className='text-container'>
                <h2>{employee.name}</h2>
                <h2>{employee.email}</h2>
            </div>
        </div>
    );
}

EmployeeCard.propTypes = {
    employee: PropTypes.any
}

export default EmployeeCard;