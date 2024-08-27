import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
	const { pathname } = useLocation();

	const { user } = useSelector((state) => state.auth);

	if (!user?.role) {
		return <Navigate to="/login" state={{ path: pathname.includes('/login') }} />;
	}

	return children;
};

export default PrivateRoutes;
