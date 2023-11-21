import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../components/atoms/SpinnerLoading';

const AdminRoutes = ({ children }) => {
	const { pathname } = useLocation();

	const {
		user: { email, role },
		isLoading,
		isError,
	} = useSelector((state) => state.auth);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Navigate to="/login" state={{ path: pathname }} />;
	}

	if (!isLoading && (!email || role !== 'admin')) {
		return <Navigate to="/login" state={{ path: pathname.includes('/login') }} />;
	}

	return children;
};

export default AdminRoutes;
