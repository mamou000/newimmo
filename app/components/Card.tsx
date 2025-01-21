interface CardProps {
  title: string;
  description: string;
  link: string;
  isHighlighted?: boolean;
}

const Card = ({ title, description, link, isHighlighted = false }: CardProps) => {
  return (
    <a
      href={link}
      className={`
        group relative overflow-hidden rounded-2xl bg-[#111111] border border-[#222222]
        transition-all duration-500 ease-out hover:scale-[1.02] hover:border-[#FF4500]/30
        ${isHighlighted ? 'md:col-span-2 md:row-span-2' : ''}
      `}
    >
      <div className="p-8">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-white mb-4">
            {title}
          </h3>
          <div className="h-10 w-10 rounded-full bg-[#FF4500] flex items-center justify-center group-hover:bg-[#FF5722] transition-colors">
            <svg
              className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        <p className="text-gray-400">
          {description}
        </p>
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/0 to-[#FF4500]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
    </a>
  );
};

export default Card;