import BlogCard from '../../components/molecules/BlogCard';
import SkeletonBlogCard from '../../components/molecules/SkeletonBlogCard';
import { useGetBlogsQuery } from '../../features/blog/blogApi';

const BlogPage = () => {
	const { data: blogs, isLoading, isError } = useGetBlogsQuery({});
	const blogsData = blogs?.data;

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{isError && <p>Error fetching data</p>}
				{isLoading
					? // Display loading skeleton cards while data is being fetched
					  Array.from({ length: 6 }).map((_, index) => (
							<SkeletonBlogCard key={(index, 'skeleton')} />
					  ))
					: // eslint-disable-next-line no-underscore-dangle
					  blogsData.map((blog) => <BlogCard blog={blog} key={blog._id} />)}

				{blogsData && blogsData.length === 0 && <p>No blogs found.</p>}
			</div>
		</div>
	);
};

export default BlogPage;
