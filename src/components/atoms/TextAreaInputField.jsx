import PropTypes from 'prop-types';

const TextAreaInputField = ({ className = '', ...props }) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <textarea className={className} {...props} />;
};

TextAreaInputField.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};

export default TextAreaInputField;
