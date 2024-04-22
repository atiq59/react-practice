import React from "react";
import './card.css';

function Card(props) {

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body">
                    <div className="employee-info">
                        <p><span className="label">Name:</span> <span className="value">{props.name}</span></p>
                        <p><span className="label">Employee ID:</span> <span className="value">{props.employeeId}</span></p>
                        <p><span className="label">Designation:</span> <span className="value">{props.designation}</span></p>
                        <p><span className="label">Experience:</span> <span className="value">{props.experience}</span></p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card;