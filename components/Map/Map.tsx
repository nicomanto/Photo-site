import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type Props = {
  mapOptions: google.maps.MapOptions;
  markerOptions?: google.maps.MarkerOptions[];
};

const Map = ({ mapOptions, markerOptions = undefined }: Props) => {
  const googlemap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_GOOGLE_MAPS!,
      version: "weekly",
    });

    let map: google.maps.Map;

    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current!, mapOptions);
    });

    markerOptions?.forEach((element) => {
      element.map = map;
      new google.maps.Marker(element);
    });
  });

  return <div ref={googlemap} id="map" />;
};

export default Map;
