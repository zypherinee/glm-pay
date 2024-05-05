import { Button } from '../../components';
import { useState } from 'react';

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState('Be Partner'); // Initialize with 'Be Partner'

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="mt-6 flex sm:flex-row sm:gap-4">
      <Button
        size="md"
        variant="outline"
        shape="round"
        className={`font-medium ${selectedButton === 'Be Partner' && 'bg-teal-400 text-white'}`}
        onClick={() => handleButtonClick('Be Partner')}
        disabled={selectedButton === 'Be Partner'}
      >
        Be Partner
      </Button>
      <Button
        size="md"
        variant="outline"
        shape="round"
        className={`font-medium ${selectedButton === 'advertise' && 'bg-teal-400 text-white'}`}
        onClick={() => handleButtonClick('advertise')}
        disabled={selectedButton === 'advertise'}
      >
        Advertise
      </Button>
      <Button
        size="md"
        variant="outline"
        shape="round"
        className={`font-medium ${selectedButton === 'complaint' && 'bg-teal-400 text-white'}`}
        onClick={() => handleButtonClick('complaint')}
        disabled={selectedButton === 'complaint'}
      >
        Complaint
      </Button>
      <Button
        size="md"
        variant="outline"
        shape="round"
        className={`font-medium ${selectedButton === 'careers' && 'bg-teal-400 text-white'}`}
        onClick={() => handleButtonClick('careers')}
        disabled={selectedButton === 'careers'}
      >
        Careers
      </Button>
    </div>
  );
};

export default ButtonGroup;
