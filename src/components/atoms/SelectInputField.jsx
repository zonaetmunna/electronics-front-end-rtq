import PropTypes from 'prop-types';

const SelectInputField = ({ options, className = '', ...props }) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<select className={className} {...props}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

SelectInputField.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	).isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};

export default SelectInputField;
