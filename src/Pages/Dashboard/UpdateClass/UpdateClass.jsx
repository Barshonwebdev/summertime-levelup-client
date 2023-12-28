import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link, useLoaderData,  } from 'react-router-dom';

const UpdateClass = () => {
    const loaderData=useLoaderData();
    console.log(loaderData);
    return (
      <div>
        update of:{" "}
        <span className="text-red-700 text-2xl"> {loaderData.className}</span>
        <div className='flex justify-center mt-10'>
          <Link to='/dashboard/myclasses'>
            <Button colorScheme="linkedin">Back</Button>
          </Link>
        </div>
      </div>
    );
};

export default UpdateClass;