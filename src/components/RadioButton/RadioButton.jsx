import React, { useState } from 'react';

export default function RadioButton({ options, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  const handleSelectionChange = (value) => {
    setSelected(value);
    onChange(value); // Call onChange prop to update the parent component
  };

  return (
    <div className="flex gap-4">
      {options.map((option, index) => (
        <label
          key={option.value}
          className="flex items-center cursor-pointer gap-2 inline-flex"
        >
          <input
            type="radio"
            name="customRadio"
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleSelectionChange(option.value)}
            className="hidden"
          />
          <span
            className={`w-4 h-4 rounded-full flex items-center justify-center border ${
              selected === option.value
                ? 'bg-[#6173E6] border-[#6173E6]'
                : 'border-[#656666]'
            }`}
            style={{ width: '16px', height: '16px', borderWidth: '1px' }}
          >
            {selected === option.value && (
              <span className="w-2.5 h-2.5 bg-[#6173E6] rounded-full"></span>
            )}
          </span>
          <span
            className={`ml-2 ${
              selected === option.value ? 'text-[#081116]' : 'text-[#656666]'
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
