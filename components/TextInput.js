const TextInput = ({ value, onChange }) => {
  return (
    <textarea
      type="text"
      value={value}
      onChange={onChange}
      className="text-input resize"
      placeholder="Enter your prompt here :)"
    />
  );
};

export default TextInput;
