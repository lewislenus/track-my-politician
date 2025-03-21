
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import RatingStars from '@/components/RatingStars';
import PromiseCard from '@/components/PromiseCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Calendar, 
  Star, 
  Flag, 
  ListChecks, 
  MessageSquare, 
  Share2, 
  ThumbsUp,
  ThumbsDown,
  User,
  AlertTriangle,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const PoliticianDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('promises');
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  
  // Mock data for the politician
  const politician = {
    id: '1',
    name: 'Nana Akufo-Addo',
    position: 'President',
    region: 'Eastern',
    party: 'NPP',
    term: '2017 - Present',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    rating: 3.7,
    reviewCount: 1245,
    promiseCount: 240,
    completedPromises: 98,
    bio: 'Nana Addo Dankwa Akufo-Addo is a Ghanaian politician who has served as the President of Ghana since January 2017. He previously served as Attorney General from 2001 to 2003 and as Minister for Foreign Affairs from 2003 to 2007 under the Kufuor-led administration.',
    sectors: [
      { name: 'Healthcare', progress: 42 },
      { name: 'Education', progress: 78 },
      { name: 'Economy', progress: 35 },
      { name: 'Infrastructure', progress: 65 },
      { name: 'Agriculture', progress: 52 },
    ],
  };
  
  // Mock data for promises
  const promises = [
    {
      title: 'Build 88 District Hospitals',
      description: 'Construction of 88 hospitals in districts without district hospitals and 6 new regional hospitals.',
      status: 'in-progress' as const,
      category: 'Healthcare',
      date: 'April 2020',
      politician: {
        name: politician.name,
        position: politician.position,
      },
    },
    {
      title: 'Free Senior High School Education',
      description: 'Implementation of free education at the senior high school level for all Ghanaian students.',
      status: 'completed' as const,
      category: 'Education',
      date: 'September 2017',
      politician: {
        name: politician.name,
        position: politician.position,
      },
    },
    {
      title: 'One District, One Factory',
      description: 'Initiative to establish at least one factory or enterprise in each of the 216 districts of Ghana.',
      status: 'in-progress' as const,
      category: 'Economy',
      date: 'January 2017',
      politician: {
        name: politician.name,
        position: politician.position,
      },
    },
    {
      title: 'Planting for Food and Jobs',
      description: 'Agricultural program aimed at creating food security and producing raw materials for industry through improved seeds, fertilizers, and marketing strategies.',
      status: 'completed' as const,
      category: 'Agriculture',
      date: 'April 2017',
      politician: {
        name: politician.name,
        position: politician.position,
      },
    },
    {
      title: 'One Village, One Dam',
      description: 'Initiative to construct a dam in every village in the northern part of Ghana to support all-year-round farming.',
      status: 'in-progress' as const,
      category: 'Agriculture',
      date: 'January 2017',
      politician: {
        name: politician.name,
        position: politician.position,
      },
    },
    {
      title: 'Paperless Port System',
      description: 'Digitizing port operations to reduce clearing time and increase efficiency.',
      status: 'completed' as const,
      category: 'Economy',
      date: 'September 2017',
      politician: {
        name: politician.name,
        position: politician.position,
      },
    },
  ];
  
  // Mock data for reviews
  const reviews = [
    {
      id: '1',
      user: {
        name: 'Kwame Owusu',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      rating: 4,
      date: '2 months ago',
      comment: 'I appreciate the free SHS policy, but there are still issues with the implementation and infrastructure to support it.',
      likes: 43,
      dislikes: 5,
    },
    {
      id: '2',
      user: {
        name: 'Abena Mensah',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      rating: 2,
      date: '3 months ago',
      comment: 'The One District, One Factory initiative has not reached my district yet. Still waiting to see meaningful economic change.',
      likes: 28,
      dislikes: 3,
    },
    {
      id: '3',
      user: {
        name: 'Kofi Adu',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      rating: 5,
      date: '1 month ago',
      comment: 'The improvement in the road infrastructure in my region has been impressive. Travel time has been significantly reduced.',
      likes: 52,
      dislikes: 8,
    },
  ];
  
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userRating === 0) {
      alert('Please select a rating');
      return;
    }
    
    console.log('Review submitted:', { rating: userRating, comment: reviewText });
    // In a real app, this would send the review to a backend API
    // Then reset the form
    setUserRating(0);
    setReviewText('');
  };
  
  const calculateCompletionPercentage = () => {
    return politician.promiseCount > 0 
      ? Math.round((politician.completedPromises / politician.promiseCount) * 100) 
      : 0;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Politician Header */}
          <div className="bg-card shadow-sm border border-border rounded-xl overflow-hidden mb-10">
            <div className="h-48 md:h-64 bg-primary/5 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{politician.name}</h1>
                <p className="text-white/80">{politician.position}</p>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square w-full max-w-[250px] mx-auto md:mx-0 rounded-xl overflow-hidden bg-muted -mt-20 md:-mt-36 border-4 border-background shadow-lg">
                  {politician.image ? (
                    <img 
                      src={politician.image} 
                      alt={politician.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/5">
                      <User className="h-20 w-20 text-primary/30" />
                    </div>
                  )}
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-semibold text-lg mr-2">{politician.rating.toFixed(1)}</span>
                        <RatingStars rating={politician.rating} size="sm" />
                      </div>
                      <p className="text-sm text-foreground/60">{politician.reviewCount} reviews</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Flag className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{politician.party}</div>
                      <p className="text-sm text-foreground/60">Political Party</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{politician.region} Region</div>
                      <p className="text-sm text-foreground/60">Ghana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{politician.term}</div>
                      <p className="text-sm text-foreground/60">Term in Office</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ListChecks className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{politician.completedPromises}/{politician.promiseCount} Promises</div>
                      <div className="w-full mt-1">
                        <Progress value={calculateCompletionPercentage()} className="h-2" />
                      </div>
                      <p className="text-sm text-foreground/60">{calculateCompletionPercentage()}% Completion Rate</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col gap-3">
                  <Button className="w-full">
                    <Star className="mr-2 h-4 w-4" />
                    Rate Politician
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Profile
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Flag className="mr-2 h-4 w-4" />
                    Report Information
                  </Button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <Tabs 
                  defaultValue="promises" 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="promises" className="flex items-center">
                      <ListChecks className="mr-2 h-4 w-4" />
                      Promises
                    </TabsTrigger>
                    <TabsTrigger value="performance" className="flex items-center">
                      <Star className="mr-2 h-4 w-4" />
                      Performance
                    </TabsTrigger>
                    <TabsTrigger value="reviews" className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Reviews
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="promises" className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">Promises</h2>
                    <p className="text-foreground/70 mb-6">
                      Track the status of promises made by {politician.name} during campaigns and while in office.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {promises.map((promise, index) => (
                        <PromiseCard key={index} {...promise} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="performance" className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">Performance by Sector</h2>
                    <p className="text-foreground/70 mb-6">
                      Evaluation of {politician.name}'s performance across different sectors based on promise completion and citizen ratings.
                    </p>
                    
                    <div className="space-y-6">
                      {politician.sectors.map((sector, index) => (
                        <div key={index} className="bg-card border border-border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold">{sector.name}</h3>
                            <span className="text-sm font-medium">{sector.progress}%</span>
                          </div>
                          <Progress value={sector.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-10">
                      <h2 className="text-2xl font-bold mb-4">Biography</h2>
                      <p className="text-foreground/70 mb-6">
                        {politician.bio}
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">Citizen Reviews</h2>
                    <p className="text-foreground/70 mb-6">
                      Read what Ghanaian citizens have to say about {politician.name}'s performance in office.
                    </p>
                    
                    <div className="mb-10">
                      <h3 className="text-lg font-semibold mb-4">Submit Your Review</h3>
                      <form onSubmit={handleSubmitReview} className="space-y-4">
                        <div>
                          <Label htmlFor="rating" className="block mb-2">Your Rating</Label>
                          <RatingStars
                            rating={userRating}
                            interactive={true}
                            size="lg"
                            onRatingChange={setUserRating}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="review" className="block mb-2">Your Review</Label>
                          <Textarea
                            id="review"
                            placeholder="Share your thoughts on this politician's performance..."
                            className="min-h-[120px]"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                          />
                        </div>
                        
                        <Button type="submit" className="w-full sm:w-auto">
                          Submit Review
                        </Button>
                      </form>
                    </div>
                    
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="bg-card border border-border rounded-lg p-6">
                          <div className="flex items-start">
                            <Avatar className="h-10 w-10 mr-4">
                              <AvatarImage src={review.user.avatar} alt={review.user.name} />
                              <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                  <h4 className="font-semibold">{review.user.name}</h4>
                                  <div className="flex items-center">
                                    <RatingStars rating={review.rating} size="sm" className="mr-2" />
                                    <span className="text-sm text-foreground/60">{review.date}</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center mt-2 sm:mt-0">
                                  <Button variant="ghost" size="sm" className="h-8 px-2">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    <span className="text-xs">{review.likes}</span>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 px-2">
                                    <ThumbsDown className="h-4 w-4 mr-1" />
                                    <span className="text-xs">{review.dislikes}</span>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 px-2">
                                    <Flag className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              
                              <p className="mt-3 text-foreground/80">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="outline">
                        Load More Reviews
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
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

export default PoliticianDetail;
