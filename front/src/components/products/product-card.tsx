import { Heart } from 'lucide-react';
import { currency } from '../../services/utils';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">

      <div className="relative aspect-[4/4] bg-card rounded-lg overflow-hidden mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{category}</p>
        <h3 className="text-sm">{name}</h3>
        <p className="text-sm text-foreground">{currency(price)}</p>
      </div>

    </div>
  );
}
