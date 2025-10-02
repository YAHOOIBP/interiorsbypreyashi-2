import React, { useState } from 'react';
import Loading from './Loading';

interface ImageWithLoadingProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  src,
  alt,
  fallbackSrc = '/images/placeholder.webp',
  className = '',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-light/50">
          <Loading size="sm" />
        </div>
      )}

      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        {...props}
      />

      {hasError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
          Image unavailable
        </div>
      )}
    </div>
  );
};

export default ImageWithLoading;
