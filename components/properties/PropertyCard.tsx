import Button from '../common/Button';

interface PropertyCardProps {
  title: string;
  location: string;
  price: number;
  surface: number;
  rooms: number;
  imageUrl?: string;
  className?: string;
}

export default function PropertyCard({
  title,
  location,
  price,
  surface,
  rooms,
  imageUrl,
  className = ''
}: PropertyCardProps) {
  return (
    <div className={`
      card-gradient rounded-2xl overflow-hidden card-hover
      border border-white/5 hover:border-[#FF4500]/20
      transition-all duration-300
      ${className}
    `}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <span className="text-gray-600">Image non disponible</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{location}</p>
        
        {/* Features */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-gray-400">{surface} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-gray-400">{rooms} pièces</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex justify-between items-center">
          <span className="text-[#FF4500] font-bold">
            {price.toLocaleString()} €
          </span>
          <Button variant="secondary" size="small">
            Voir détails
          </Button>
        </div>
      </div>
    </div>
  );
}