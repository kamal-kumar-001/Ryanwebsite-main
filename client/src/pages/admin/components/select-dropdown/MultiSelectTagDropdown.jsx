import AsyncSelect from "react-select/async";
import PropTypes from 'prop-types';
const MultiSelectTagDropdown = ({
  defaultValue = [],
  loadOptions,
  onChange,
}) => {
  return (
    <AsyncSelect
      defaultValue={defaultValue}
      defaultOptions
      isMulti
      loadOptions={loadOptions}
      className="relative z-20"
      onChange={onChange}
    />
  );
};

MultiSelectTagDropdown.propTypes = {
  defaultValue: PropTypes.array,
  loadOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default MultiSelectTagDropdown;
