import { useState } from 'react';

export function AccessibilityTools() {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast', !highContrast);
  };

  return (
    <div className="accessibility-tools">
      <button onClick={toggleContrast}>
        {highContrast ? 'Standard Contrast' : 'High Contrast Mode'}
      </button>
      {/* Future accessibility options can go here */}
    </div>
  );
}
