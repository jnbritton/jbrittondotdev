import { Navigation } from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import zeroPortrait from '@/assets/zero-portrait.jpg';
import zeroLandscape from '@/assets/zero-landscape.jpg';
import zeroDetail from '@/assets/zero-detail.jpg';

const ZeroOneOne = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Zero One One
            </h1>
            <p className="text-text-secondary max-w-2xl">
              A visual exploration of Zero, a Warforged construct character for 5E Dungeons and Dragons. 
              Zero exists in a unique desert world where Old Western aesthetics merge with Sci-Fi technology. 
              The character design draws inspiration from General Grievous, featuring mechanical elegance 
              with a weathered, frontier spirit.
            </p>
          </header>

          <div className="space-y-12">
            <figure className="space-y-3">
              <div className="bg-surface border border-border rounded-sm overflow-hidden">
                <img 
                  src={zeroPortrait} 
                  alt="Zero character portrait - Warforged construct with mechanical features"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-text-secondary">
                Zero - Portrait Study
              </figcaption>
            </figure>

            <figure className="space-y-3">
              <div className="bg-surface border border-border rounded-sm overflow-hidden">
                <img 
                  src={zeroLandscape} 
                  alt="Zero in the desert landscape - Old Western meets Sci-Fi environment"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-text-secondary">
                Zero in the Western Sci-Fi Desert
              </figcaption>
            </figure>

            <figure className="space-y-3">
              <div className="bg-surface border border-border rounded-sm overflow-hidden">
                <img 
                  src={zeroDetail} 
                  alt="Detailed view of Zero's mechanical construction and weathering"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-text-secondary">
                Mechanical Detail Study
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-xl font-light mb-4">Character Background</h2>
            <div className="space-y-3 text-text-secondary text-sm max-w-2xl">
              <p>
                Zero is a Warforged construct built for purposes long forgotten. Found buried in the desert 
                sands, Zero awakened to a world that blends the lawless frontier of the Old West with 
                advanced technological remnants of a fallen civilization.
              </p>
              <p>
                The character's mechanical design reflects both durability and decay - pristine engineering 
                weathered by sandstorms and time. Like General Grievous, Zero's form suggests both 
                technological sophistication and an unsettling blend of the organic and artificial.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ZeroOneOne;
