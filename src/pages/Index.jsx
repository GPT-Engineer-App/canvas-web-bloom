import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from '../components/Canvas';
import Toolbar from '../components/Toolbar';
import ElementProperties from '../components/ElementProperties';

const Index = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === 'text' ? 'New Text' : '',
      style: { position: 'absolute', left: '10px', top: '10px' },
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (id, updates) => {
    setElements(elements.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen bg-gray-100">
        <Toolbar addElement={addElement} />
        <Canvas 
          elements={elements} 
          updateElement={updateElement}
          setSelectedElement={setSelectedElement}
        />
        <ElementProperties 
          element={selectedElement} 
          updateElement={updateElement}
        />
      </div>
    </DndProvider>
  );
};

export default Index;
