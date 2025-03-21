
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real app, we would redirect to search results page
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-20 pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 text-sm font-medium text-primary animate-fade-in">
          Empowering Ghanaian Citizens
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <span className="text-foreground">Hold Your </span>
          <span className="text-primary">Politicians</span>
          <span className="text-foreground"> Accountable</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12 animate-fade-up" style={{ animationDelay: '400ms' }}>
          Track promises, rate performance, and ensure transparency in Ghanaian politics. 
          Your voice matters in shaping Ghana's democratic future.
        </p>
        
        <form onSubmit={handleSearch} className="max-w-md mx-auto mb-12 relative animate-fade-up" style={{ animationDelay: '600ms' }}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search politicians, promises, or issues..."
              className="w-full px-4 py-3 pr-12 rounded-full border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button size="icon" type="submit" className="absolute right-1 top-1 rounded-full">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <Button
            size="lg"
            className="transition-transform hover:-translate-y-0.5"
            onClick={() => console.log('Browse politicians clicked')}
          >
            Browse Politicians
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="transition-all hover:bg-secondary"
            onClick={() => console.log('Track promises clicked')}
          >
            Track Promises
          </Button>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container mx-auto mt-24 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="glass rounded-lg px-4 py-6 text-center transition-transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-primary mb-1">237</h3>
            <p className="text-sm text-foreground/70">Politicians Tracked</p>
          </div>
          <div className="glass rounded-lg px-4 py-6 text-center transition-transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-primary mb-1">1,298</h3>
            <p className="text-sm text-foreground/70">Promises Recorded</p>
          </div>
          <div className="glass rounded-lg px-4 py-6 text-center transition-transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-primary mb-1">42%</h3>
            <p className="text-sm text-foreground/70">Promises Fulfilled</p>
          </div>
          <div className="glass rounded-lg px-4 py-6 text-center transition-transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-primary mb-1">15K+</h3>
            <p className="text-sm text-foreground/70">Citizen Ratings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
