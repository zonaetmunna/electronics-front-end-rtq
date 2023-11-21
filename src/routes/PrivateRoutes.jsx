import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../components/atoms/SpinnerLoading';

const PrivateRoutes = ({ children }) => {
	const { pathname } = useLocation();

	const {
		user: { email },
		isLoading,
		isError,
	} = useSelector((state) => state.auth);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Navigate to="/login" state={{ path: pathname.includes('/login') }} />;
	}

	if (!isLoading && !email) {
		return <Navigate to="/login" state={{ path: pathname.includes('/login') }} />;
	}

	return children;
};

export default PrivateRoutes;
