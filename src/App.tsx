import { GitBranchIcon, SearchIcon } from 'lucide-react';
import { Marker, MarkerContent, MarkerIcon } from './components/ui/marker';
import { A, H3, P } from './components/ui/typography';
import './index.css';

function App() {
  return (
    <div className='flex w-full max-w-sm flex-col gap-8 py-12'>
      <Marker>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>Switched to a new branch</MarkerContent>
      </Marker>
      <Marker role='status'>
        <MarkerContent className='shimmer'>Thinking...</MarkerContent>
      </Marker>
      <Marker variant='separator'>
        <MarkerContent>Conversation compacted</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>
    </div>
  );
}

export default App;
