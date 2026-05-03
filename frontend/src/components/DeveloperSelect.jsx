const DeveloperSelect = ({ onChange }) => {
  return (
    <div>
      <h3>Select Developer</h3>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="1">Developer 1</option>
        <option value="2">Developer 2</option>
        <option value="3">Developer 3</option>
      </select>
    </div>
  );
};

export default DeveloperSelect;