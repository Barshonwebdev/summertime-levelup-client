import React from 'react';
import useInstructor from '../../hooks/useInstructor';

const Instructors = () => {
    const [allInstructors]=useInstructor();
    return (
        <div>
            instructors
            
        </div>
    );
};

export default Instructors;