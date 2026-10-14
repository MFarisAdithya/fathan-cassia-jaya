import React from 'react';
import { buildWaLink } from '../lib/whatsapp';
import { trackEvent } from '../lib/analytics';
import { useApp } from '../context/AppContext';

/**
 * Reusable WhatsApp CTA Button Component with integrated analytics tracking.
 * 
 * @param {Object} props
 * @param {string} props.source - Unique source tag (e.g. 'hero', 'navbar', 'floating', 'product-01', 'final-cta')
 * @param {string} [props.variant] - Button styling variant: 'primary' | 'dark' | 'outline' | 'secondary' | 'ghost'
 * @param {Array} [props.items] - Optional array of RFQ items for structured inquiry
 * @param {string} [props.customMessage] - Optional custom message string
 * @param {string} [props.destinationCity] - Optional destination city
 * @param {string} [props.company] - Optional business/company name
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} props.children - Button label / inner content
 * @param {Function} [props.onClick] - Optional additional click handler
 */
export default function WaButton({
  source = 'unknown',
  variant,
  items,
  customMessage,
  destinationCity,
  company,
  className = '',
  children,
  onClick,
  ...rest
}) {
  const { lang } = useApp();

  const waUrl = buildWaLink({
    items,
    source,
    lang,
    destinationCity,
    company,
    customMessage,
  });

  const handleClick = (e) => {
    trackEvent('wa_click', {
      source,
      itemsCount: Array.isArray(items) ? items.length : (customMessage ? 1 : 0),
      lang,
    });

    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  const variantStyles = {
    primary: 'bg-[#A66A3F] hover:bg-[#8e5831] text-white shadow-md active:scale-98 transition-all',
    dark: 'bg-[#2C241D] hover:bg-[#A66A3F] text-[#F5F1E8] dark:bg-[#A66A3F] dark:hover:bg-[#8e5831] shadow-xs active:scale-98 transition-all',
    outline: 'border border-[#2C241D]/20 dark:border-[#E8DFD1]/20 hover:border-[#A66A3F] text-[#2C241D] dark:text-[#F5F1E8] hover:text-[#A66A3F] transition-all',
    secondary: 'bg-[#F5F1E8] hover:bg-[#2C241D] text-[#2C241D] hover:text-[#F5F1E8] dark:bg-[#191410] dark:hover:bg-[#A66A3F] dark:text-[#F5F1E8] transition-all',
    ghost: 'text-[#A66A3F] hover:text-[#8e5831] transition-colors',
  };

  const combinedClasses = variant && variantStyles[variant]
    ? `${variantStyles[variant]} ${className}`
    : className;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={combinedClasses}
      {...rest}
    >
      {children}
    </a>
  );
}
