interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-[#FF4500] hover:bg-[#FF5722] text-white',
    secondary: 'border border-white/20 hover:border-[#FF4500] text-white hover:text-[#FF4500]'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;