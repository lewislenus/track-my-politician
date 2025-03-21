
import { 
  User, 
  Star, 
  ListChecks, 
  Search, 
  BarChart3, 
  Flag,
  AlertTriangle,
  Check
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Politician Profiles",
      description: "Comprehensive profiles of Ghana's elected officials, including their background, promises, and performance ratings.",
      icon: User,
    },
    {
      title: "Promise Tracking",
      description: "Track and categorize promises made by politicians with clear status indicators showing progress.",
      icon: ListChecks,
    },
    {
      title: "Performance Ratings",
      description: "Rate politicians on their performance and read reviews from other citizens to make informed decisions.",
      icon: Star,
    },
    {
      title: "Advanced Search",
      description: "Find politicians by name, party, region, or filter promises by category and status.",
      icon: Search,
    },
    {
      title: "Data Visualization",
      description: "View analytics and charts that visualize government performance across different sectors.",
      icon: BarChart3,
    },
    {
      title: "Community Moderation",
      description: "Flag inaccurate information and help maintain the integrity of the platform.",
      icon: Flag,
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features Designed for Accountability
          </h2>
          <p className="text-foreground/70">
            Our platform provides the tools citizens need to hold politicians accountable 
            and make informed decisions during elections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border border-border transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-foreground/70">
              Our platform makes it easy to hold politicians accountable in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 text-center border border-border flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create an Account</h3>
              <p className="text-foreground/70">Sign up to unlock all features and join our community of engaged citizens.</p>
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-primary text-primary mt-6">1</div>
            </div>
            
            <div className="bg-background rounded-xl p-8 text-center border border-border flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ListChecks className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Promises</h3>
              <p className="text-foreground/70">Browse and track promises made by politicians during their campaigns and in office.</p>
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-primary text-primary mt-6">2</div>
            </div>
            
            <div className="bg-background rounded-xl p-8 text-center border border-border flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rate Performance</h3>
              <p className="text-foreground/70">Rate politicians based on their performance and contribute to a more transparent democracy.</p>
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-primary text-primary mt-6">3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
