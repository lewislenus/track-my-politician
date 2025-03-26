
import { useState } from 'react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Filter, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Politician from '@/components/Politician';

const Appointees = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterRole, setFilterRole] = useState('all');
  
  // Mock data for political appointees
  const appointees = [
    {
      id: '1',
      name: 'Eugene Arhin',
      position: 'Director of Communications',
      region: 'Greater Accra',
      party: 'NPP',
      role: 'Communications',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.7,
      reviewCount: 435,
      promiseCount: 30,
      completedPromises: 18,
    },
    {
      id: '2',
      name: 'Charles Bissue',
      position: 'Presidential Staffer',
      region: 'Western',
      party: 'NPP',
      role: 'Presidential Office',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.3,
      reviewCount: 325,
      promiseCount: 25,
      completedPromises: 12,
    },
    {
      id: '3',
      name: 'Clara Napaga Tia Sulemana',
      position: 'Presidential Staffer',
      region: 'Northern',
      party: 'NPP',
      role: 'Presidential Office',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      rating: 4.2,
      reviewCount: 267,
      promiseCount: 18,
      completedPromises: 14,
    },
    {
      id: '4',
      name: 'Nana Asante Bediatuo',
      position: 'Executive Secretary to the President',
      region: 'Eastern',
      party: 'NPP',
      role: 'Executive Office',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.9,
      reviewCount: 422,
      promiseCount: 35,
      completedPromises: 23,
    },
    {
      id: '5',
      name: 'Francis Asenso-Boakye',
      position: 'Former Deputy Chief of Staff',
      region: 'Ashanti',
      party: 'NPP',
      role: 'Executive Office',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 4.0,
      reviewCount: 378,
      promiseCount: 28,
      completedPromises: 19,
    },
    {
      id: '6',
      name: 'Samuel Abu Jinapor',
      position: 'Former Deputy Chief of Staff',
      region: 'Savannah',
      party: 'NPP',
      role: 'Executive Office',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.8,
      reviewCount: 412,
      promiseCount: 32,
      completedPromises: 17,
    },
  ];
  
  // Extract unique regions and roles for filters
  const regions = [...new Set(appointees.map(a => a.region))];
  const roles = [...new Set(appointees.map(a => a.role))];
  
  // Filter appointees based on search and filters
  const filteredAppointees = appointees.filter(appointee => {
    const matchesSearch = appointee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         appointee.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = filterRegion === 'all' || appointee.region === filterRegion;
    const matchesRole = filterRole === 'all' || appointee.role === filterRole;
    
    return matchesSearch && matchesRegion && matchesRole;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-3">Political Appointees</h1>
            <p className="text-foreground/70 max-w-3xl">
              View information about current political appointees and special advisors in the Government of Ghana.
            </p>
          </div>
          
          <div className="bg-card shadow-sm border border-border rounded-xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60" />
                <Input
                  placeholder="Search by name or position..."
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
                    <SelectItem value="all">All Regions</SelectItem>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>{region} Region</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={filterRole} onValueChange={setFilterRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredAppointees.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAppointees.map((appointee) => (
                <Politician key={appointee.id} {...appointee} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">No Appointees Found</h3>
              <p className="text-foreground/70 max-w-md mx-auto">
                No political appointees match your current filters. Try adjusting your search criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setFilterRegion('all');
                  setFilterRole('all');
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

export default Appointees;
