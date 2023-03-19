import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

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
  const [address, setAddress] = useState("");

  const handleMapClick = (event) => {
    setLocation({
      lat: event.lat,
      lng: event.lng,
    });
  };
  Geocode.setApiKey("AIzaSyC1yySSSHPEEBHeNo6E2MjRTlE6w4mLZog");
  Geocode.setLanguage("ar");

  useEffect(() => {
    Geocode.fromLatLng(location.lat, location.lng)
      .then((response) => {
        const address = response.results[0].formatted_address;
        console.log("address", address);
        setAddress(address);
      })
      .catch((error) => console.log(error));
  }, [location]);

  const Marker = () => <div className="marker" style={{fontSize:"1.5rem"}}>📍</div>;

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
        <Description> {address} </Description>
        <NextButt path={PATHS.CALENDAR} />
      </Container>
    </>
  );
}
