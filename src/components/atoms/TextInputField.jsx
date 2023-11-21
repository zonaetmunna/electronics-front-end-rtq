import PropTypes from 'prop-types';

const TextInputField = ({ className = '', ...props }) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <input className={className} {...props} />;
};

TextInputField.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};

export default TextInputField;
