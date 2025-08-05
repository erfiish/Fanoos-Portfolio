import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-50 to-purple-100 backdrop-blur-sm border-t border-purple-200/50 py-4 relative">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-2">
        <div
          className="flex flex-col items-center"
        >
          <Logo size="sm" />
        </div>
        
        <div className="flex flex-col items-center space-y-1">
          <p className="text-gray-700 text-sm font-medium">
            © ۱۴۰۴ هوش مصنوعی فانوس. تمامی حقوق محفوظ است.
          </p>
          <p className="text-xs text-purple-600 italic mt-1">
            "از دل تاریکی، فانوس روشن می‌شود"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 