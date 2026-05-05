const apiKey = 'd321bd7d3c9449f198852415262303';

const BASE_URL = import.meta.env.DEV 
  ? `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`
  : '/.netlify/functions/clima'

export const buscarApiSp = async (cidade) => {
  const url = import.meta.env.DEV
    ? `${BASE_URL}&q=${cidade}&lang=pt&days=1`
    : `${BASE_URL}?cidade=${cidade}`
    
  const apiSP = await fetch(url);
  const sp = await apiSP.json();
  return sp;
}