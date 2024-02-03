/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import BlogCard from '../../components/molecules/BlogCard';
import SkeletonBlogCard from '../../components/molecules/SkeletonBlogCard';
import { useGetBlogsQuery } from '../../features/blog/blogApi';

const BlogPage = () => {
	const { data: blogs, isLoading, isError } = useGetBlogsQuery({});
	const blogsData = blogs?.data;

	return (
		<div className="px-4 py-8">
			<div className="container mx-auto ">
				{isError && <p>Error fetching data</p>}

				{isLoading ? (
					// Display loading skeleton cards while data is being fetched
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{Array.from({ length: 6 }).map((_, index) => (
							<SkeletonBlogCard key={index} />
						))}
					</div>
				) : (
					// Display actual data when not loading
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogsData && blogsData.length > 0 ? (
							blogsData.map((blog) => <BlogCard blog={blog} key={blog._id} />)
						) : (
							<p>No blogs found.</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogPage;
