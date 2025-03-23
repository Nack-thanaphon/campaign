import { useEffect } from 'react';

interface GoogleMapLoaderProps {
  onMapLoad: () => void;
}

export default function GoogleMapLoader({ onMapLoad }: GoogleMapLoaderProps) {
  useEffect(() => {
    (window as any).initializeMap = onMapLoad; // Expose for callback

    if (!document.getElementById('google-maps-script')) {
      const script = document.createElement('script');
      script.id = 'google-maps-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC5o5qQ7EoCn0JyLL80V98wSwtQzjPA0lI&libraries=places&callback=initializeMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      if ((window as any).google) onMapLoad(); // If already loaded
    }
  }, [onMapLoad]);

  return null;
}
