import React from 'react';

/**
 * High-performance responsive image component.
 * Serves modern WebP with automatic fallback, explicit dimensions for CLS prevention,
 * and lazy decoding.
 */
export default function OptimizedImage({
  src,
  alt = '',
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  ...rest
}) {
  if (!src) return null;

  // Normalize leading ./ to / so it resolves correctly on nested routes like /id or /en
  const normalizedSrc = src.startsWith('./') ? src.replace(/^\.\//, '/') : src;
  const isRaster = /\.(jpe?g|png)$/i.test(normalizedSrc);
  const webpSrc = isRaster ? normalizedSrc.replace(/\.(jpe?g|png)$/i, '.webp') : null;

  return (
    <picture className="contents">
      {webpSrc && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={normalizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={className}
        {...rest}
      />
    </picture>
  );
}
