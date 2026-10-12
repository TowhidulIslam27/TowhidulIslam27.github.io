import { useState } from "react";

// An <img> that quietly renders nothing if its src 404s — so galleries can list
// files that haven't been uploaded yet without showing broken-image icons.
export default function GalleryThumb({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
      loading="lazy"
    />
  );
}
