
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating?: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
}

const RatingStars = ({
  rating = 0,
  maxRating = 5,
  size = 'md',
  interactive = false,
  onRatingChange,
  className,
}: RatingStarsProps) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  const handleRatingChange = (newRating: number) => {
    if (interactive) {
      setCurrentRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    }
  };

  const starSizes = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div 
      className={cn('flex items-center', className)}
      onMouseLeave={() => interactive && setHoverRating(0)}
    >
      {Array.from({ length: maxRating }).map((_, index) => {
        const starValue = index + 1;
        const isFilled = hoverRating > 0 ? starValue <= hoverRating : starValue <= currentRating;
        
        return (
          <span
            key={index}
            className={cn(
              'inline-block transition-transform', 
              interactive ? 'cursor-pointer hover:scale-110' : '',
              'mr-0.5'
            )}
            onMouseEnter={() => interactive && setHoverRating(starValue)}
            onClick={() => handleRatingChange(starValue)}
          >
            <Star
              className={cn(
                starSizes[size],
                isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300',
                'transition-colors'
              )}
            />
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;
