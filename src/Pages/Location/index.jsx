import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import Container from "../../Components/Container";
import NextButt from "../../Components/NextButt";

import { PATHS } from "../../Router";
import { MapContainer } from "./style";
import { Description, SupTitle } from "../../Components/Container/style";

export default function Location() {
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });

  const handleMapClick = (event) => {
    setLocation({
      lat: event.lat,
      lng: event.lng,
    });
  };

  const Marker = () => <div className="marker">📍</div>;

  const defaultProps = {
    center: {
      lat: 24.698931,
      lng: 46.731445,
    },
    zoom: 11,
  };

  return (
    <>
      <Container title=" موقع العقار ">
        <MapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyC2-n39eQnutXECIDc-9tlNMNFmxzshDtE",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onClick={handleMapClick}
          >
            {location && <Marker lat={location.lat} lng={location.lng} />}
          </GoogleMapReact>
        </MapContainer>
        <SupTitle>الموقع الذي تم إختياره</SupTitle>
        <Description> {location.lng} </Description>
        <NextButt path={PATHS.LOCATION} />
      </Container>
    </>
  );
}
