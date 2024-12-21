import { Location } from '../types/task';

export const useLocation = () => {
  const openLocation = (location: Location) => {
    const { latitude, longitude, address } = location;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
  };

  return { openLocation };
};