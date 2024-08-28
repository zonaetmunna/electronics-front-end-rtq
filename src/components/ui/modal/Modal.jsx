import { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';

import Button from '../../atoms/Button';

const Modal = ({ title, description, isOpen, onClose, children }) => {
	const isDarkMode = useSelector((state) => state.settings.darkMode);

	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = () => {
		setShowModal(false);
		onClose();
	};

	if (!showModal) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm">
			<div className="flex min-h-screen items-center justify-center py-5 text-center xs:px-5">
				<div className="fixed inset-0 transition-opacity bg-gray-500 opacity-75" />{' '}
				{/* bg-dark bg-opacity-10 */}
				<div
					className={`w-[720px] sm:w-[500px] ${
						isDarkMode ? 'bg-black' : 'bg-gray-100'
					} transform rounded-[10px] px-4 py-6 text-left shadow-2xl transition-all sm:px-[30px]`}
				>
					<div className="mb-5 flex items-center justify-between">
						<h2 className={`${isDarkMode ? 'text-white' : 'text-black'} `}>{title}</h2>
						<Button type="button" className="cursor-pointer" onClick={handleClose}>
							<IoIosCloseCircleOutline className=" cursor-pointer" />
						</Button>
					</div>

					{description && (
						<div className="mt-5">
							<p className="mb-2 text-grayDark">{description}</p>
						</div>
					)}

					<div className="mt-2">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
