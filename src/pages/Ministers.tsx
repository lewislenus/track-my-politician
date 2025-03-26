
import { useState } from 'react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Filter, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Politician from '@/components/Politician';

const Ministers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [filterMinistry, setFilterMinistry] = useState('');
  
  // Mock data for ministers
  const ministers = [
    {
      id: '1',
      name: 'Ken Ofori-Atta',
      position: 'Minister of Finance',
      region: 'Greater Accra',
      party: 'NPP',
      ministry: 'Finance',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.2,
      reviewCount: 845,
      promiseCount: 124,
      completedPromises: 57,
    },
    {
      id: '2',
      name: 'Samuel Atta Akyea',
      position: 'Minister of Works and Housing',
      region: 'Eastern',
      party: 'NPP',
      ministry: 'Works and Housing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.9,
      reviewCount: 567,
      promiseCount: 95,
      completedPromises: 52,
    },
    {
      id: '3',
      name: 'Ursula Owusu-Ekuful',
      position: 'Minister of Communications',
      region: 'Greater Accra',
      party: 'NPP',
      ministry: 'Communications',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      rating: 4.1,
      reviewCount: 723,
      promiseCount: 87,
      completedPromises: 59,
    },
    {
      id: '4',
      name: 'Kwaku Agyemang-Manu',
      position: 'Minister of Health',
      region: 'Bono',
      party: 'NPP',
      ministry: 'Health',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.5,
      reviewCount: 912,
      promiseCount: 108,
      completedPromises: 73,
    },
    {
      id: '5',
      name: 'Matthew Opoku Prempeh',
      position: 'Minister of Energy',
      region: 'Ashanti',
      party: 'NPP',
      ministry: 'Energy',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 4.3,
      reviewCount: 678,
      promiseCount: 92,
      completedPromises: 71,
    },
    {
      id: '6',
      name: 'Shirley Ayorkor Botchwey',
      position: 'Minister of Foreign Affairs',
      region: 'Greater Accra',
      party: 'NPP',
      ministry: 'Foreign Affairs',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      rating: 4.0,
      reviewCount: 542,
      promiseCount: 76,
      completedPromises: 51,
    },
  ];
  
  // Extract unique regions and ministries for filters
  const regions = [...new Set(ministers.map(m => m.region))];
  const ministries = [...new Set(ministers.map(m => m.ministry))];
  
  // Filter ministers based on search and filters
  const filteredMinisters = ministers.filter(minister => {
    const matchesSearch = minister.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         minister.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         minister.ministry.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = !filterRegion || minister.region === filterRegion;
    const matchesMinistry = !filterMinistry || minister.ministry === filterMinistry;
    
    return matchesSearch && matchesRegion && matchesMinistry;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-3">Ministers of State</h1>
            <p className="text-foreground/70 max-w-3xl">
              View information about current cabinet ministers and their portfolios in the Government of Ghana.
            </p>
          </div>
          
          <div className="bg-card shadow-sm border border-border rounded-xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60" />
                <Input
                  placeholder="Search by name, position, ministry..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div>
                <Select value={filterRegion} onValueChange={setFilterRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Regions</SelectItem>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>{region} Region</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={filterMinistry} onValueChange={setFilterMinistry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Ministry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Ministries</SelectItem>
                    {ministries.map((ministry) => (
                      <SelectItem key={ministry} value={ministry}>Ministry of {ministry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredMinisters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMinisters.map((minister) => (
                <Politician key={minister.id} {...minister} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">No Ministers Found</h3>
              <p className="text-foreground/70 max-w-md mx-auto">
                No ministers match your current filters. Try adjusting your search criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setFilterRegion('');
                  setFilterMinistry('');
                }}
              >
                Clear Filters
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

export default Ministers;
