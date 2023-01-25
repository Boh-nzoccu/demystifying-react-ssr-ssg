import React from 'react';
import Text from './Text';

const App = ({ side = 'server side rendered' }: { side?: string }) => {
  return (
    <div>
      Sono <Text>{side}</Text>
    </div>
  );
};

export default App;
