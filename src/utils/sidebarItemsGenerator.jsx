import { NavLink } from 'react-router-dom';

export const sidebarItemsGenerator = (items, role) => {
	const sidebarItems = items.reduce((acc, item) => {
		if (item.path && item.name) {
			acc.push({
				key: item.name,
				label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
			});
		}

		if (item.children) {
			acc.push({
				key: item.name,
				label: item.name,
				children: item.children
					.map((child) => {
						if (child.name) {
							return {
								key: child.name,
								label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
							};
						}
						return null;
					})
					.filter(Boolean), // filter out any undefined values
			});
		}

		return acc;
	}, []);

	return sidebarItems;
};
