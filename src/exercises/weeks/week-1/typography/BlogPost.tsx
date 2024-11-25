import './styles/typography.css';

const BlogPost = () => {
	return (
		<article className='card'>
			{/* Implement blog post using typography principles */}
			{/* Include: title, subtitle, metadata, sample content */}
			<h1 className='title'>The Art of Typograph in Modern Web Design</h1>
			<h2 className='subtitle'>
				Understanding scale, hierarchy, and readability in digital interfaces
			</h2>
			<div className='meta'>
				By Alexis San Javier • November 25, 2024 • 5 min read
			</div>
			<div className='content'>
				Typography forms the foundation of good web design. Through careful
				selection of font sizes, weights, and spacing, we can create interfaces
				that are both beautiful and functional. The key lies in understanding
				how different elements work together to create clear visual hierarchy
				and maintain readability across all devices.
			</div>
		</article>
	);
};

export default BlogPost;
