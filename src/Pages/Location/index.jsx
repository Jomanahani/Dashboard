import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PATHS } from "../../Router";

import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

import Container from "../../Components/Container";
import NextButt from "../../Components/NextButt";
import { Description, SupTitle } from "../../Components/Container/style";

import { MapContainer } from "./style";
import { useCategoryContext } from "../../Context/CartContext";

export default function Location() {
  const {
    addLocation,
  } = useCategoryContext();

  const Category = useParams();

  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });
  const [address, setAddress] = useState(null);

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
        setAddress(address);
        addLocation(Category.id, address);
      })
      .catch((error) => console.log(error));
  },[location,addLocation,Category.id]);

  const Marker = () => (
    <div className="marker" style={{ fontSize: "1.5rem" }}>
      📍
    </div>
  );

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
        <NextButt
          disabled={address == null ? true : false}
          path={PATHS.CALENDAR + `/${Category.id}`}
        />
      </Container>
    </>
  );
}
