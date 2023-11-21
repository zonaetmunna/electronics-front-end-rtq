import propTypes from 'prop-types';

const Label = ({ htmlFor = '', className = '', children = '', ...props }) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<label htmlFor={htmlFor} className={className} {...props}>
			{children}
		</label>
	);
};

Label.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: propTypes.string,
	children: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.node]).isRequired,
};
export default Label;
