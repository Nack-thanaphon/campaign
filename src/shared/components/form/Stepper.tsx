import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
  setStep: (value: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, setStep }) => {
  return (
    <div className="max-w-2xl  mx-auto flex justify-between mb-8">
      {steps.map((step, index) => (
        <div
          onClick={() => setStep(index + 1)}
          key={index}
          className={`cursor-pointer flex items-center ${index === steps.length - 1 ? '' : 'flex-1'
            }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-500'
              }`}
          >
            {index + 1}
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-4 ${index < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;