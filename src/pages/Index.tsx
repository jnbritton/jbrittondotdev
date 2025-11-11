import { DitheringCanvas } from '@/components/DitheringCanvas';
import { Navigation } from '@/components/Navigation';
import { Mail } from 'lucide-react';

const Index = () => {
  return (
    <>
      <DitheringCanvas />
      <Navigation />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl text-center space-y-8 bg-primary p-12 rounded-sm">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-primary-foreground">
            Jack Britton is a Product Growth Lead living in Los Angeles, California.
          </h1>
          
          <a 
            href="mailto:jack@jackbritton.co"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>jack@jackbritton.co</span>
          </a>
        </div>
      </main>
    </>
  );
};

export default Index;
