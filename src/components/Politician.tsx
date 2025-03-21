
import { Badge } from "@/components/ui/badge";
import RatingStars from "./RatingStars";
import { User, MapPin, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";

interface PoliticianProps {
  id: string;
  name: string;
  position: string;
  region: string;
  party: string;
  image?: string;
  rating: number;
  reviewCount: number;
  promiseCount: number;
  completedPromises: number;
  className?: string;
}

const Politician = ({
  id,
  name,
  position,
  region,
  party,
  image,
  rating,
  reviewCount,
  promiseCount,
  completedPromises,
  className,
}: PoliticianProps) => {
  const partyColors: Record<string, string> = {
    'NPP': 'bg-blue-100 text-blue-700',
    'NDC': 'bg-green-100 text-green-700',
    'CPP': 'bg-red-100 text-red-700',
    'PPP': 'bg-yellow-100 text-yellow-700',
    'default': 'bg-gray-100 text-gray-700',
  };

  const partyColor = partyColors[party] || partyColors.default;
  const completionPercentage = promiseCount > 0 ? Math.round((completedPromises / promiseCount) * 100) : 0;

  return (
    <div className={cn(
      "glass rounded-xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5">
            <User className="h-20 w-20 text-primary/30" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold mb-1">{name}</h3>
          <p className="text-white/80 text-sm">{position}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className={cn("px-2 py-1 font-medium", partyColor)}>
            {party}
          </Badge>
          <div className="flex items-center">
            <RatingStars rating={rating} size="sm" className="mr-1.5" />
            <span className="text-sm text-foreground/70">({reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-foreground/70 mb-4 text-sm">
          <MapPin className="h-4 w-4 mr-1.5" />
          <span>{region} Region</span>
        </div>
        
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center">
              <ListChecks className="h-4 w-4 mr-1.5 text-primary" />
              <span>Promise Completion</span>
            </div>
            <span className="font-medium">{completedPromises}/{promiseCount}</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-primary h-2.5 rounded-full" 
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-right mt-1 text-foreground/70">{completionPercentage}% completed</p>
        </div>
      </div>
    </div>
  );
};

export default Politician;
