import React from 'react';
import LabTest from './LabTest';

const LabTable = ({ labTests }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lab Test List</h2>
      <div>
        {labTests.map((test) => (
          <LabTest key={test.id} id={test.id} name={test.name} />
        ))}
      </div>
    </div>
  );
};

export default LabTable;
