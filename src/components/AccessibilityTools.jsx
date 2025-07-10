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
body.high-contrast {
  background-color: #000;
  color: #fff;
}

button {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
}