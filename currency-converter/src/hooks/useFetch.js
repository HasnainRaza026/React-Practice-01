import { useState, useEffect } from "react";

export function useFetch(url, toCurrency) {
  const [conversionResult, setConversionResult] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const convert = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setConversionResult(data.rates[toCurrency.currency]);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
        }
      }
    };

    convert();
    return () => controller.abort();
  }, [url, toCurrency]);
  return [conversionResult];
}
