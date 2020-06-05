import React from 'react';

const SectionTitle = (props) => {
    return (
                <div className = "row justify-content-center mb-5">
                    <p className = "display-4 mt-5 text-weight-bold"><strong>{props.title}</strong></p>
                </div>
    );
}

export default SectionTitle;