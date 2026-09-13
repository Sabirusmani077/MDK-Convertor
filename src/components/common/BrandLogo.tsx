import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_LOGO } from '../../constants/assets';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  dark?: boolean;
  linkTo?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  dark = false,
  linkTo = '/',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  const imgSizeMap = {
    sm: 'h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16'
  };

  const content = (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* User's Custom Logo Image */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        {!imageError ? (
          <img
            src={APP_LOGO}
            alt="Mr Sabir - MDK Convertor"
            className={`${imgSizeMap[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-sm`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-extrabold text-xl shadow-md">
            M
          </div>
        )}
      </div>

      {/* Brand & Creator Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-extrabold tracking-tight text-lg sm:text-xl ${
              dark ? 'text-white' : 'text-slate-900'
            }`}
          >
            MDK <span className="text-emerald-500">Convertor</span>
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 uppercase tracking-wider">
            FREE
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-[11px] font-semibold tracking-wide -mt-0.5 ${
              dark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            by <span className="text-emerald-600 font-bold hover:underline">Mr Sabir</span> • Fast &amp; Secure
          </span>
        )}
      </div>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
};
