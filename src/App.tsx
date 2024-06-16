import './App.css';
import BlogCard from './components/BlogCard';
import img from './assets/spacejoy-YqFz7UMm8qE-unsplash.jpg';

function App() {
  return (
    <div className="App">
      <BlogCard 
        imgSrc={img}
        header={{
          badgeText: "Interior",
          headerText: "Top 5 Living Room Inspirations"
        }}
        body={{
          bodyText: "Curated vibrants colors for your living, make it pop & calm in the same time.",
          buttonLink: "https://www.example.com"
        }}/>
    </div>
  );
}

export default App;
