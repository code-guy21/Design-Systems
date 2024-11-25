import './App.css';
import BlogPost from './exercises/weeks/week-1/typography/BlogPost';

function App() {
	return (
		<div className='container'>
			<main className='exercise-content'>
				<header className='exercise-header'>
					<h1 className='title'>Week 1: Typography Exercise</h1>
					<p className='description'>
						{' '}
						Implementing typography principles through a blog post component
					</p>
				</header>

				<BlogPost />
			</main>
		</div>
	);
}

export default App;
