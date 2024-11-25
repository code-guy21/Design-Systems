import './App.css';
import BlogPost from './weeks/week-1/exercises/typography/BlogPost';

function App() {
	return (
		<>
			<div className='p-8'>
				<h1 className='text-2xl font-bold mb-8'>Week 1 Exercises</h1>
				<section>
					<h2 className='text-xl font-semibold mb-4'>TypoGraph Exercises</h2>
					<BlogPost />
				</section>
			</div>
		</>
	);
}

export default App;
