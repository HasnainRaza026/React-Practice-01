import { useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export function useGeolocator(map, mapElem, location) {
  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    if (!location) return;

    map.current = new maptilersdk.Map({
      container: mapElem.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [location.lng, location.lat],
      zoom: 10,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([location.lng, location.lat])
      .addTo(map.current);
  }, [map, mapElem, location]);
}
