import PropTypes from 'prop-types';

const TypographyXl = ({ className = '', children }) => {
	// 20px
	return <p className={`text-xl ${className}`}>{children}</p>;
};

TypographyXl.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	children: PropTypes.node,
};

export default TypographyXl;
