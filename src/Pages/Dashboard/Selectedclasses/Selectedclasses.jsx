import React from 'react';
import useSelected from '../../../hooks/useSelected';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Selectedclasses = () => {
    const [selectedClasses]=useSelected();
    console.log(selectedClasses);
    return (
      <div className="text-center">
        my selected classes
        <div className="my-5">
          <Link to='/classes'>
            <Button colorScheme="linkedin">Back to Class Selection</Button>
          </Link>
        </div>
      </div>
    );
};

export default Selectedclasses;