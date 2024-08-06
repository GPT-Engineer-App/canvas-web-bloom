import { Button } from '@/components/ui/button';
import { PlusCircle, Type, Image } from 'lucide-react';

const Toolbar = ({ addElement }) => {
  return (
    <div className="w-64 bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Toolbar</h2>
      <div className="space-y-2">
        <Button onClick={() => addElement('text')} className="w-full">
          <Type className="mr-2 h-4 w-4" /> Add Text
        </Button>
        <Button onClick={() => addElement('image')} className="w-full">
          <Image className="mr-2 h-4 w-4" /> Add Image
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
