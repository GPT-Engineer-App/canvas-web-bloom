import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ElementProperties = ({ element, updateElement }) => {
  if (!element) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateElement(element.id, { [name]: value });
  };

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    updateElement(element.id, { style: { ...element.style, [name]: value } });
  };

  return (
    <div className="w-64 bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Properties</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="content">Content</Label>
          <Input
            id="content"
            name="content"
            value={element.content}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="left">Left</Label>
          <Input
            id="left"
            name="left"
            value={element.style.left}
            onChange={handleStyleChange}
          />
        </div>
        <div>
          <Label htmlFor="top">Top</Label>
          <Input
            id="top"
            name="top"
            value={element.style.top}
            onChange={handleStyleChange}
          />
        </div>
        {element.type === 'text' && (
          <div>
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              name="color"
              type="color"
              value={element.style.color}
              onChange={handleStyleChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementProperties;
