import { lazy } from 'react';

import ProfileLayout from '../layout/ProfileLayout';
import PrivateRoutes from './PrivateRoutes';

const ProfileInformationPage = lazy(() => import('../pages/main/ProfileInformationPage'));
const ProfileOrdersPage = lazy(() => import('../pages/main/ProfileOrdersPage'));
const ProfileMessagePage = lazy(() => import('../pages/main/ProfileMessagePage'));
const ProfileNotificationPage = lazy(() => import('../pages/main/ProfileNotificationPage'));
const ProfileSettingsPage = lazy(() => import('../pages/main/ProfileSettingsPage'));

export const customerRoutes = {
	path: '/profile',
	element: (
		<PrivateRoutes>
			<ProfileLayout />
		</PrivateRoutes>
	),
	children: [
		{ path: '/profile', element: <ProfileInformationPage /> },
		{ path: 'orders', element: <ProfileOrdersPage /> },
		{ path: 'messages', element: <ProfileMessagePage /> },
		{ path: 'notification', element: <ProfileNotificationPage /> },
		{ path: 'settings', element: <ProfileSettingsPage /> },
	],
};
