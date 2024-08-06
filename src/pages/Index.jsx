import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from '../components/Canvas';
import Toolbar from '../components/Toolbar';
import ElementProperties from '../components/ElementProperties';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Index = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [canvasTitle, setCanvasTitle] = useState('Untitled Canvas');

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === 'text' ? 'New Text' : '',
      style: { position: 'absolute', left: '10px', top: '10px', color: '#000000' },
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (id, updates) => {
    setElements(elements.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  const saveCanvas = () => {
    const canvasData = {
      title: canvasTitle,
      elements: elements,
    };
    localStorage.setItem('savedCanvas', JSON.stringify(canvasData));
    alert('Canvas saved successfully!');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <div className="flex items-center space-x-2">
            <Label htmlFor="canvasTitle">Canvas Title:</Label>
            <Input
              id="canvasTitle"
              value={canvasTitle}
              onChange={(e) => setCanvasTitle(e.target.value)}
              className="w-64"
            />
          </div>
          <Button onClick={saveCanvas}>Save Canvas</Button>
        </div>
        <div className="flex flex-1 overflow-hidden">
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
      </div>
    </DndProvider>
  );
};

export default Index;
