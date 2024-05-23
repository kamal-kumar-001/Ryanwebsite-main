import PropTypes from 'prop-types';
const FormContainer = ({ children, className }) => {
  return (
    <section>
      <div className={`w-full flex justify-center ${className}`}>
        <div className="w-full md:w-1/2">{children}</div>
      </div>
    </section>
  );
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default FormContainer;
