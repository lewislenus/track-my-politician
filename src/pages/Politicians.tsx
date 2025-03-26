
import { useState } from 'react';
import Header from '@/components/Header';
import Politician from '@/components/Politician';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Star } from 'lucide-react';

const Politicians = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterParty, setFilterParty] = useState('all');
  const [sortOption, setSortOption] = useState('rating-desc');
  
  const politicians = [
    {
      id: '1',
      name: 'Nana Akufo-Addo',
      position: 'President',
      region: 'Eastern',
      party: 'NPP',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.7,
      reviewCount: 1245,
      promiseCount: 240,
      completedPromises: 98,
    },
    {
      id: '2',
      name: 'Mahamudu Bawumia',
      position: 'Vice President',
      region: 'Northern',
      party: 'NPP',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.5,
      reviewCount: 987,
      promiseCount: 120,
      completedPromises: 42,
    },
    {
      id: '3',
      name: 'John Mahama',
      position: 'Former President',
      region: 'Savannah',
      party: 'NDC',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.2,
      reviewCount: 1102,
      promiseCount: 210,
      completedPromises: 89,
    },
    {
      id: '4',
      name: 'Kojo Oppong Nkrumah',
      position: 'Minister for Information',
      region: 'Eastern',
      party: 'NPP',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 4.1,
      reviewCount: 567,
      promiseCount: 45,
      completedPromises: 30,
    },
    {
      id: '5',
      name: 'Samira Bawumia',
      position: 'Second Lady',
      region: 'Northern',
      party: 'NPP',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      rating: 4.5,
      reviewCount: 342,
      promiseCount: 30,
      completedPromises: 28,
    },
    {
      id: '6',
      name: 'Haruna Iddrisu',
      position: 'Member of Parliament',
      region: 'Northern',
      party: 'NDC',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.8,
      reviewCount: 289,
      promiseCount: 50,
      completedPromises: 22,
    },
  ];
  
  const filteredPoliticians = politicians.filter(politician => {
    const matchesSearch = politician.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         politician.position.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = filterRegion === 'all' || politician.region === filterRegion;
    const matchesParty = filterParty === 'all' || politician.party === filterParty;
    
    return matchesSearch && matchesRegion && matchesParty;
  }).sort((a, b) => {
    switch(sortOption) {
      case 'rating-desc':
        return b.rating - a.rating;
      case 'rating-asc':
        return a.rating - b.rating;
      case 'reviews-desc':
        return b.reviewCount - a.reviewCount;
      case 'promises-desc':
        return b.promiseCount - a.promiseCount;
      case 'completion-desc':
        return (b.completedPromises / b.promiseCount) - (a.completedPromises / a.promiseCount);
      default:
        return b.rating - a.rating;
    }
  });
  
  const regions = [...new Set(politicians.map(p => p.region))];
  const parties = [...new Set(politicians.map(p => p.party))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Ghanaian Politicians</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Browse, search, and rate politicians from across Ghana's political landscape.
            </p>
          </div>
          
          <div className="bg-card shadow-sm border border-border rounded-xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search politicians..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={filterRegion} onValueChange={setFilterRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>{region} Region</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filterParty} onValueChange={setFilterParty}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Party" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Parties</SelectItem>
                  {parties.map((party) => (
                    <SelectItem key={party} value={party}>{party}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm text-foreground/70">Sort by:</span>
              </div>
              
              <Tabs defaultValue="rating-desc" value={sortOption} onValueChange={setSortOption} className="w-full max-w-md">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="rating-desc" className="text-xs">
                    <Star className="h-3 w-3 mr-1" /> Highest Rated
                  </TabsTrigger>
                  <TabsTrigger value="reviews-desc" className="text-xs">Most Reviewed</TabsTrigger>
                  <TabsTrigger value="completion-desc" className="text-xs">Promise Completion</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {filteredPoliticians.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPoliticians.map((politician) => (
                <Politician key={politician.id} {...politician} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No politicians found</h3>
              <p className="text-foreground/70">Try adjusting your filters or search query</p>
              <Button 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setFilterRegion('all');
                  setFilterParty('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
          
          {filteredPoliticians.length > 0 && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Politicians
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-background py-10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-lg">GPA</span>
              </div>
              <span className="font-display font-medium text-lg">GhanaPolitics</span>
            </div>
            
            <div className="flex gap-8 mb-6 md:mb-0">
              <a href="#" className="text-foreground/70 hover:text-primary text-sm">About</a>
              <a href="#" className="text-foreground/70 hover:text-primary text-sm">Contact</a>
              <a href="#" className="text-foreground/70 hover:text-primary text-sm">Privacy</a>
              <a href="#" className="text-foreground/70 hover:text-primary text-sm">Terms</a>
            </div>
            
            <div className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} GhanaPolitics. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Politicians;
