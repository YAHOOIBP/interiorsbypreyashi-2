import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 px-4 py-3">
      <ol className="flex items-center space-x-2 flex-wrap" role="list">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-neutral-dark/70 hover:text-primary transition-colors duration-200 flex items-center"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" aria-hidden="true" />
            {item.href ? (
              <Link
                to={item.href}
                className="text-neutral-dark/70 hover:text-primary transition-colors duration-200 text-sm md:text-base"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary font-medium text-sm md:text-base" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
