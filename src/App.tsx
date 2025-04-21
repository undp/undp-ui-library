import { StarIcon } from "lucide-react";

import './index.css';

import { SegmentedControl } from "./components/ui/segmentedControl";

function App() {
  return (
    <>
      <SegmentedControl
        defaultValue='option 1'
        onValueChange={() => {}}
        options={[
          {
            label: <div>Hello world</div>,
            value: 'option 1',
          },
          {
            label: <StarIcon />,
            value: 'option 2',
          },
          {
            label: 'Option 3',
            value: 'option 3',
          },
        ]}
      />
    </>
  );
}

export default App;