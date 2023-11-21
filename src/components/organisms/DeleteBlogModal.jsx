import Button from '../atoms/Button';

const DeleteBlogModal = ({
	isOpen,
	onClose,
	onDeleteBlog,
	isLoadingDeleteBlog,
	isErrorDeleteBlog,
	errorDeleteBlog,
	isSuccessDeleteBlog,
	blogToDelete,
}) => {
	const handleDelete = () => {
		onDeleteBlog({ id: blogToDelete.id });
		onClose();
	};

	return (
		<div
			className={`${
				isOpen ? 'block' : 'hidden'
			} fixed inset-0 flex items-center justify-center z-50`}
		>
			<div className="modal-container">
				<div className="modal-content">
					<h2 className="text-2xl font-semibold mb-4">Delete Blog</h2>
					<p className="mb-4">Are you sure you want to delete this blog?</p>
					<div className="mt-6">
						<Button
							onClick={handleDelete}
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
							disabled={isLoadingDeleteBlog}
						>
							{isLoadingDeleteBlog ? 'Deleting...' : 'Delete Blog'}
						</Button>
					</div>
					{isErrorDeleteBlog && <p className="text-red-500 mt-4">{errorDeleteBlog.message}</p>}
					{isSuccessDeleteBlog && <p className="text-green-500 mt-4">Blog deleted successfully!</p>}
					<Button
						onClick={onClose}
						className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
					>
						Close
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DeleteBlogModal;
