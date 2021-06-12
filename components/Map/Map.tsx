import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import GoogleMapOptions from "../../interfaces/GoogleMapOptions";

type Props = {
  mapOptions: GoogleMapOptions;
};

const Map = ({ mapOptions }: Props) => {
  const googlemap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_GOOGLE_MAPS!,
      version: "weekly",
    });

    loader.load().then(() => {
      const map: google.maps.Map = new google.maps.Map(googlemap.current!, mapOptions.mapOptions);

      mapOptions.markerOptions?.forEach((element) => {
        element.map = map; // eslint-disable-line no-param-reassign
        new google.maps.Marker(element); // eslint-disable-line no-new
      });
    });
  });

  return (
    <div className="workshopLocationContainer">
      <div ref={googlemap} className="map" />
    </div>
  );
};

export default Map;
