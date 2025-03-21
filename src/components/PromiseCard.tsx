
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type PromiseStatus = 'not-started' | 'in-progress' | 'completed' | 'broken';

interface PromiseCardProps {
  title: string;
  description: string;
  status: PromiseStatus;
  category: string;
  date: string;
  politician: {
    name: string;
    position: string;
  };
}

const PromiseCard = ({
  title,
  description,
  status,
  category,
  date,
  politician,
}: PromiseCardProps) => {
  const getStatusConfig = (status: PromiseStatus) => {
    switch (status) {
      case 'not-started':
        return {
          label: 'Not Started',
          color: 'bg-gray-100 text-gray-700',
          icon: Clock,
          iconColor: 'text-gray-500',
        };
      case 'in-progress':
        return {
          label: 'In Progress',
          color: 'bg-blue-100 text-blue-700',
          icon: AlertCircle,
          iconColor: 'text-blue-500',
        };
      case 'completed':
        return {
          label: 'Completed',
          color: 'bg-green-100 text-green-700',
          icon: CheckCircle,
          iconColor: 'text-green-500',
        };
      case 'broken':
        return {
          label: 'Broken',
          color: 'bg-red-100 text-red-700',
          icon: XCircle,
          iconColor: 'text-red-500',
        };
      default:
        return {
          label: 'Unknown',
          color: 'bg-gray-100 text-gray-700',
          icon: Clock,
          iconColor: 'text-gray-500',
        };
    }
  };

  const statusConfig = getStatusConfig(status);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-5 transition-all hover:shadow-md hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <Badge variant="outline" className="capitalize">
          {category}
        </Badge>
        <div className={cn("px-2 py-1 rounded-full text-xs font-medium flex items-center", statusConfig.color)}>
          <StatusIcon className={cn("h-3 w-3 mr-1", statusConfig.iconColor)} />
          {statusConfig.label}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between text-sm text-foreground/60">
        <div className="flex flex-col">
          <span className="font-medium text-foreground">{politician.name}</span>
          <span className="text-xs">{politician.position}</span>
        </div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default PromiseCard;
