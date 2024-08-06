import { useDrop } from 'react-dnd';
import DraggableElement from './DraggableElement';

const Canvas = ({ elements, updateElement, setSelectedElement }) => {
  const [, drop] = useDrop({
    accept: 'element',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      updateElement(item.id, { style: { ...item.style, left, top } });
    },
  });

  return (
    <div ref={drop} className="flex-grow bg-white border-2 border-gray-300 m-4 relative overflow-hidden">
      {elements.map(element => (
        <DraggableElement
          key={element.id}
          element={element}
          updateElement={updateElement}
          setSelectedElement={setSelectedElement}
        />
      ))}
    </div>
  );
};

export default Canvas;
