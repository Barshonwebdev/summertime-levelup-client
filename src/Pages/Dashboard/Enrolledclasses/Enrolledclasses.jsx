import React from 'react';
import useEnrolled from '../../../hooks/useEnrolled';

const Enrolledclasses = () => {
    const [enrolledClasses]=useEnrolled();
    console.log(enrolledClasses);
    return (
        <div>
            my enrolled classes 
        </div>
    );
};

export default Enrolledclasses;