import React from 'react';
import ProfileInformationPage from '../pages/main/ProfileInformationPage';
import ProfileMessagePage from '../pages/main/ProfileMessagePage';
import ProfileNotificationPage from '../pages/main/ProfileNotificationPage';
import ProfileOrdersPage from '../pages/main/ProfileOrdersPage';
import ProfileSettingsPage from '../pages/main/ProfileSettingsPage';


export const studentPaths = [
	{
		name: 'Profile',
		path: 'profile',
		element: <ProfileInformationPage />,
	},
	{
		name: 'Orders',
		path: 'orders',
		element: <ProfileOrdersPage />,
	},
	{
		name: 'Messages',
		path: 'messages',
		element: <ProfileMessagePage />,
	},
	{
		name: 'Notifications',
		path: 'notifications',
		element: <ProfileNotificationPage />,
	},
	{
		name: 'Settings',
		path: 'settings',
		element: <ProfileSettingsPage />,
	},
];
