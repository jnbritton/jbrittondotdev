import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-sm font-light tracking-wide text-primary-foreground hover:opacity-60 transition-opacity"
        >
          Jack Britton
        </Link>
        <div className="flex gap-6">
          <Link 
            to="/" 
            className={`text-sm font-light tracking-wide text-primary-foreground hover:opacity-60 transition-opacity ${
              location.pathname === '/' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`text-sm font-light tracking-wide text-primary-foreground hover:opacity-60 transition-opacity ${
              location.pathname === '/projects' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};
