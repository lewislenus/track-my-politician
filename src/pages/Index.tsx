
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import Politician from '@/components/Politician';
import PromiseCard from '@/components/PromiseCard';
import { Button } from '@/components/ui/button';
import AuthModal from '@/components/AuthModal';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [activeAuthTab, setActiveAuthTab] = useState<'login' | 'signup'>('login');

  const openLoginModal = () => {
    setActiveAuthTab('login');
    setAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setActiveAuthTab('signup');
    setAuthModalOpen(true);
  };

  const featuredPoliticians = [
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
  ];

  const recentPromises = [
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <FeaturesSection />
        
        {/* Featured Politicians Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Politicians</h2>
                <p className="text-foreground/70 max-w-2xl">
                  Track and rate the performance of Ghana's most influential political figures.
                </p>
              </div>
              <Button variant="ghost" className="hidden md:flex items-center gap-2">
                View All Politicians <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPoliticians.map((politician) => (
                <Politician key={politician.id} {...politician} />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" className="flex items-center gap-2 mx-auto">
                View All Politicians <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Recent Promises Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Promises</h2>
                <p className="text-foreground/70 max-w-2xl">
                  Stay updated on the latest promises made by Ghanaian politicians.
                </p>
              </div>
              <Button variant="ghost" className="hidden md:flex items-center gap-2">
                View All Promises <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPromises.map((promise, index) => (
                <PromiseCard key={index} {...promise} />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" className="flex items-center gap-2 mx-auto">
                View All Promises <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Movement for Political Accountability
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-10">
              Create an account to track promises, rate politicians, and help build 
              a more transparent democracy in Ghana.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="transition-transform hover:-translate-y-0.5"
                onClick={openSignupModal}
              >
                Create Account
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={openLoginModal}
              >
                Login
              </Button>
            </div>
          </div>
        </section>
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
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        defaultTab={activeAuthTab}
      />
    </div>
  );
};

export default Index;
