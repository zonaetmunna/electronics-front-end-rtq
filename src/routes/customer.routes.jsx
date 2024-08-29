import { lazy } from 'react';

import ProfileLayout from '../layout/ProfileLayout';
import PrivateRoutes from './PrivateRoutes';

const ProfileInformationPage = lazy(() => import('../pages/main/profile/ProfileInformationPage'));
const ProfileOrdersPage = lazy(() => import('../pages/main/profile/ProfileOrdersPage'));
const ProfileMessagePage = lazy(() => import('../pages/main/profile/ProfileMessagePage'));
const ProfileNotificationPage = lazy(() => import('../pages/main/profile/ProfileNotificationPage'));
const ProfileSettingsPage = lazy(() => import('../pages/main/profile/ProfileSettingsPage'));

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
