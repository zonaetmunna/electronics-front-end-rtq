import './App.css';

import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import Loading from './components/atoms/SpinnerLoading';
import { routes } from './routes/Routes';

const App = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Toaster position="top-center" reverseOrder={false} />
			<RouterProvider router={routes} />
		</Suspense>
	);
};

export default App;
