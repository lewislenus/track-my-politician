
import { useState } from 'react';
import Header from '@/components/Header';
import PromiseCard from '@/components/PromiseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Search, Filter } from 'lucide-react';

const Promises = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  
  // Mock data for promises
  const promises = [
    {
      title: 'Build 88 District Hospitals',
      description: 'Construction of 88 hospitals in districts without district hospitals and 6 new regional hospitals.',
      status: 'in-progress' as const,
      category: 'Healthcare',
      date: 'April 2020',
      politician: {
        name: 'Nana Akufo-Addo',
        position: 'President',
      },
    },
    {
      title: 'Free Senior High School Education',
      description: 'Implementation of free education at the senior high school level for all Ghanaian students.',
      status: 'completed' as const,
      category: 'Education',
      date: 'September 2017',
      politician: {
        name: 'Nana Akufo-Addo',
        position: 'President',
      },
    },
    {
      title: 'One District, One Factory',
      description: 'Initiative to establish at least one factory or enterprise in each of the 216 districts of Ghana.',
      status: 'in-progress' as const,
      category: 'Economy',
      date: 'January 2017',
      politician: {
        name: 'Nana Akufo-Addo',
        position: 'President',
      },
    },
    {
      title: 'Planting for Food and Jobs',
      description: 'Agricultural program aimed at creating food security and producing raw materials for industry.',
      status: 'completed' as const,
      category: 'Agriculture',
      date: 'April 2017',
      politician: {
        name: 'John Mahama',
        position: 'Former President',
      },
    },
    {
      title: 'One Village, One Dam',
      description: 'Initiative to construct a dam in every village in the northern part of Ghana to support all-year-round farming.',
      status: 'in-progress' as const,
      category: 'Agriculture',
      date: 'January 2017',
      politician: {
        name: 'Nana Akufo-Addo',
        position: 'President',
      },
    },
    {
      title: 'Paperless Port System',
      description: 'Digitizing port operations to reduce clearing time and increase efficiency.',
      status: 'completed' as const,
      category: 'Economy',
      date: 'September 2017',
      politician: {
        name: 'Nana Akufo-Addo',
        position: 'President',
      },
    },
    {
      title: 'National Digital Property Addressing System',
      description: 'Implementation of a digital address system for all locations in Ghana.',
      status: 'completed' as const,
      category: 'Technology',
      date: 'October 2017',
      politician: {
        name: 'Mahamudu Bawumia',
        position: 'Vice President',
      },
    },
    {
      title: 'Railway Development',
      description: 'Rehabilitation of existing railways and construction of new lines to improve transportation.',
      status: 'in-progress' as const,
      category: 'Infrastructure',
      date: 'January 2018',
      politician: {
        name: 'Nana Akufo-Addo',
        position: 'President',
      },
    },
    {
      title: 'Free Maternal Healthcare',
      description: 'Provision of free healthcare services for pregnant women and new mothers.',
      status: 'completed' as const,
      category: 'Healthcare',
      date: 'July 2008',
      politician: {
        name: 'John Atta Mills',
        position: 'Former President',
      },
    },
  ];
  
  // Filter promises
  const filteredPromises = promises.filter(promise => {
    const matchesSearch = promise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         promise.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         promise.politician.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = filterCategory === '' || promise.category === filterCategory;
    const matchesStatus = filterStatus === '' || promise.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  // Get unique categories for filter
  const categories = [...new Set(promises.map(p => p.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-3">Political Promises</h1>
            <p className="text-foreground/70 max-w-3xl">
              Track all promises made by Ghanaian politicians during campaigns and while in office. See their status and hold leaders accountable.
            </p>
          </div>
          
          <div className="bg-card shadow-sm border border-border rounded-xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="relative col-span-1 md:col-span-3 lg:col-span-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60" />
                <Input
                  placeholder="Search promises, politicians..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Statuses</SelectItem>
                    <SelectItem value="not-started">Not Started</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="broken">Broken</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
          
          {filteredPromises.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPromises.map((promise, index) => (
                <PromiseCard key={index} {...promise} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">No Promises Found</h3>
              <p className="text-foreground/70 max-w-md mx-auto">
                No promises match your current filters. Try adjusting your search criteria or check back later.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setFilterCategory('');
                  setFilterStatus('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
          
          {filteredPromises.length > 0 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
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

export default Promises;
