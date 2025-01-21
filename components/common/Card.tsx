interface CardProps {
  title: string;
  description: string;
  link?: string;
  className?: string;
}

const Card = ({ title, description, link, className = '' }: CardProps) => {
  return (
    <div className={`
      relative group
      bg-black/40 backdrop-blur-sm
      border border-white/10 rounded-2xl
      p-6 overflow-hidden
      transition-all duration-300
      hover:border-[#FF4500]/30
      hover:shadow-[0_0_20px_rgba(255,69,0,0.1)]
      ${className}
    `}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        {link && (
          <a
            href={link}
            className="
              flex items-center justify-center
              w-10 h-10 rounded-full
              bg-[#FF4500]/10
              group-hover:bg-[#FF4500]
              transition-all duration-300
            "
          >
            <svg
              className="w-5 h-5 text-[#FF4500] group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
      
      {/* Effet de brillance au hover */}
      <div className="
        absolute inset-0 -translate-x-full
        bg-gradient-to-r from-transparent via-white/5 to-transparent
        group-hover:translate-x-full
        transition-all duration-1000
      "/>
    </div>
  );
};

export default Card;