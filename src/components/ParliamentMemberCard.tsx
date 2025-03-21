
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ParliamentMember } from "@/services/parliamentService";
import { User } from "lucide-react";

interface ParliamentMemberCardProps {
  member: ParliamentMember;
}

const ParliamentMemberCard = ({ member }: ParliamentMemberCardProps) => {
  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  // Determine party color
  const partyColors: Record<string, string> = {
    'NPP': 'bg-blue-100 text-blue-700',
    'NDC': 'bg-green-100 text-green-700',
    'Independent': 'bg-gray-100 text-gray-700',
    'default': 'bg-primary/10 text-primary',
  };

  const partyColor = member.party ? (partyColors[member.party] || partyColors.default) : partyColors.default;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/5">
              <User className="h-20 w-20 text-primary/30" />
            </div>
          )}
          {member.party && (
            <Badge className={`absolute top-2 right-2 ${partyColor}`}>
              {member.party}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold line-clamp-1">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.position}</p>
          </div>
        </div>

        {member.constituency && (
          <div className="text-sm mb-1">
            <span className="font-medium">Constituency:</span> {member.constituency}
          </div>
        )}
        
        {member.region && (
          <div className="text-sm mb-1">
            <span className="font-medium">Region:</span> {member.region}
          </div>
        )}
        
        {member.contact && (
          <div className="text-sm truncate">
            <span className="font-medium">Contact:</span> {member.contact}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ParliamentMemberCard;
