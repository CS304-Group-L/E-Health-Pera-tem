import { useDrag } from 'react-dnd';

const LabTest = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'LAB_TEST',
    item: { id, name },
  });

  return (
    <div
      ref={drag}
      className={`p-2 border rounded-md ${isDragging ? 'opacity-50' : ''}`}
    >
      {name}
    </div>
  );
};

export default LabTest;
