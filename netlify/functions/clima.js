export const handler = async (event) => {
  const cidade = event.queryStringParameters.cidade;
  const apiKey = 'd321bd7d3c9449f198852415262303';

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cidade}&lang=pt&days=1`
  );

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};