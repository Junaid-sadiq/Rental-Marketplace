
interface ToggleSwitchProps {
    label: string;
    value: boolean;
    setvalue: (value: boolean) => void;
}
const ToggleSwitch:React.FC<ToggleSwitchProps> = ({label, value, setvalue}) => {
    const handleToggle = () => {
        setvalue(!value);
    }
  return (
    <div className="flex items-center space-x-2">
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={value}
          onChange={handleToggle}
        />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${
            value ? 'translate-x-6' : ''
          }`}
        ></div>
      </div>
      <div className="ml-3 text-gray-800/75 font-medium">{label}</div>
    </label>
  </div>
  )
}

export default ToggleSwitch