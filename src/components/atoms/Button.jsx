import propTypes from 'prop-types';

const Button = ({ type = 'button', onClick = null, className = '', children = '' }) => {
	return (
		<button type={type === 'submit' ? 'submit' : 'button'} onClick={onClick} className={className}>
			{children}
		</button>
	);
};

Button.prototype = {
	type: propTypes.oneOf(['button', 'submit']).isRequired,
	onClick: propTypes.func,
	className: propTypes.string,
	children: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.node]).isRequired,
};

export default Button;
