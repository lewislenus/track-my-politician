
import { useState } from 'react';
import Header from '@/components/Header';
import Politician from '@/components/Politician';
import PromiseCard from '@/components/PromiseCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  ListChecks, 
  Star, 
  User, 
  TrendingUp, 
  ArrowRight, 
  BookOpen,
  Building2,
  Stethoscope,
  GraduationCap,
  Factory
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for top politicians
  const topPoliticians = [
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
  ];
  
  // Mock data for trending promises
  const trendingPromises = [
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
  ];
  
  // Mock data for charts
  const sectorPerformanceData = [
    { name: 'Healthcare', completed: 42, total: 100 },
    { name: 'Education', completed: 78, total: 100 },
    { name: 'Economy', completed: 35, total: 100 },
    { name: 'Infrastructure', completed: 65, total: 100 },
    { name: 'Agriculture', completed: 52, total: 100 },
  ];
  
  const promiseStatusData = [
    { name: 'Completed', value: 268, color: '#16a34a' },
    { name: 'In Progress', value: 452, color: '#3b82f6' },
    { name: 'Not Started', value: 324, color: '#6b7280' },
    { name: 'Broken', value: 156, color: '#ef4444' },
  ];
  
  const COLORS = promiseStatusData.map(item => item.color);
  
  const statCards = [
    {
      title: 'Politicians Tracked',
      value: '237',
      icon: User,
      color: 'bg-blue-500',
    },
    {
      title: 'Promises Recorded',
      value: '1,298',
      icon: ListChecks,
      color: 'bg-purple-500',
    },
    {
      title: 'Citizen Ratings',
      value: '15K+',
      icon: Star,
      color: 'bg-yellow-500',
    },
    {
      title: 'Promise Completion',
      value: '42%',
      icon: TrendingUp,
      color: 'bg-green-500',
    },
  ];
  
  const sectors = [
    { name: 'Governance', icon: BookOpen, value: 48 },
    { name: 'Economy', icon: Building2, value: 35 },
    { name: 'Healthcare', icon: Stethoscope, value: 42 },
    { name: 'Education', icon: GraduationCap, value: 78 },
    { name: 'Industry', icon: Factory, value: 52 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button>My Tracked Politicians</Button>
          </div>
          
          <Tabs 
            defaultValue="overview" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
              <TabsTrigger value="overview" className="flex items-center">
                <BarChart3 className="mr-2 h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="politicians" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Politicians
              </TabsTrigger>
              <TabsTrigger value="promises" className="flex items-center">
                <ListChecks className="mr-2 h-4 w-4" />
                Promises
              </TabsTrigger>
              <TabsTrigger value="ratings" className="flex items-center">
                <Star className="mr-2 h-4 w-4" />
                Ratings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, index) => (
                  <Card key={index} className="hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-foreground/70">{stat.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold">{stat.value}</span>
                        <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center text-white`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle>Promise Completion by Sector</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={sectorPerformanceData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="completed" fill="#3b82f6" name="Completion %" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle>Promise Status Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={promiseStatusData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            fill="#8884d8"
                            paddingAngle={3}
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {promiseStatusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sector Performance */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {sectors.map((sector, index) => (
                  <Card key={index} className="hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-sm font-medium text-foreground/70">{sector.name}</CardTitle>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <sector.icon className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="py-0">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold">{sector.value}%</span>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${sector.value}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-foreground/60 mt-1">Completion Rate</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Featured Politicians */}
              <div>
                <div className="flex justify-between items-end mb-6">
                  <h2 className="text-2xl font-bold">Top Rated Politicians</h2>
                  <Button variant="ghost" className="items-center gap-2">
                    View All <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {topPoliticians.map((politician) => (
                    <Politician key={politician.id} {...politician} />
                  ))}
                </div>
              </div>
              
              {/* Trending Promises */}
              <div>
                <div className="flex justify-between items-end mb-6">
                  <h2 className="text-2xl font-bold">Trending Promises</h2>
                  <Button variant="ghost" className="items-center gap-2">
                    View All <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {trendingPromises.map((promise, index) => (
                    <PromiseCard key={index} {...promise} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="politicians" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Politicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-10">Politicians content will be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="promises" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Promises</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-10">Promises content will be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ratings" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-10">Ratings content will be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

export default Dashboard;
