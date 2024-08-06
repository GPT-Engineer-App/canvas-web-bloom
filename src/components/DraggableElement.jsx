import { useDrag } from 'react-dnd';

const DraggableElement = ({ element, updateElement, setSelectedElement }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { id: element.id, ...element.style },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        ...element.style,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
      onClick={() => setSelectedElement(element)}
    >
      {element.type === 'text' ? (
        <p>{element.content}</p>
      ) : (
        <img src={element.content || '/placeholder.svg'} alt="Draggable" className="w-24 h-24" />
      )}
    </div>
  );
};

export default DraggableElement;
