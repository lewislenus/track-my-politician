
import { ReactNode } from 'react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface PoliticiansLayoutProps {
  title: string;
  description: string;
  searchPlaceholder: string;
  filterOptions1: FilterOption[];
  filterOptions2: FilterOption[];
  filter1Value: string;
  filter2Value: string;
  filter1Label: string;
  filter2Label: string;
  onSearchChange: (value: string) => void;
  onFilter1Change: (value: string) => void;
  onFilter2Change: (value: string) => void;
  onClearFilters: () => void;
  searchQuery: string;
  hasResults: boolean;
  noResultsTitle: string;
  noResultsDescription: string;
  children: ReactNode;
}

const PoliticiansLayout = ({
  title,
  description,
  searchPlaceholder,
  filterOptions1,
  filterOptions2,
  filter1Value,
  filter2Value,
  filter1Label,
  filter2Label,
  onSearchChange,
  onFilter1Change,
  onFilter2Change,
  onClearFilters,
  searchQuery,
  hasResults,
  noResultsTitle,
  noResultsDescription,
  children,
}: PoliticiansLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className="text-foreground/70 max-w-3xl">
              {description}
            </p>
          </div>
          
          <div className="bg-card shadow-sm border border-border rounded-xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60" />
                <Input
                  placeholder={searchPlaceholder}
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
              
              <div>
                <Select value={filter1Value} onValueChange={onFilter1Change}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Filter by ${filter1Label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions1.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={filter2Value} onValueChange={onFilter2Change}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Filter by ${filter2Label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions2.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {hasResults ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {children}
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{noResultsTitle}</h3>
              <p className="text-foreground/70 max-w-md mx-auto">
                {noResultsDescription}
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={onClearFilters}
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

export default PoliticiansLayout;
