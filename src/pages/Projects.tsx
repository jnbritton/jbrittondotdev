import { Navigation } from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            Projects
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              to="/projects/zero-one-one"
              className="group block bg-surface border border-border rounded-sm p-8 hover:border-foreground transition-colors"
            >
              <h2 className="text-2xl font-light mb-2 group-hover:opacity-60 transition-opacity">
                Zero One One
              </h2>
              <p className="text-text-secondary text-sm">
                Concept art portfolio for Zero, a Warforged construct navigating an Old Western meets Sci-Fi desert landscape.
              </p>
            </Link>
            
            {/* Placeholder for future projects */}
            <div className="bg-surface-variant border border-border rounded-sm p-8 opacity-40">
              <h2 className="text-2xl font-light mb-2">
                Coming Soon
              </h2>
              <p className="text-text-secondary text-sm">
                More projects arriving soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
