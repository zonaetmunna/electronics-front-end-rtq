import { createBrowserRouter } from 'react-router-dom';

import Error from '../layout/Error';
import { adminRoutes } from './admin.routes';
import { publicRoutes } from './public.routes';

export const routes = createBrowserRouter([
	publicRoutes,
	// customerRoutes,
	adminRoutes,
	{ path: '*', element: <Error /> }, // Catch-all route
]);
