import React from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import MapsStyle from "./MapStyle";

const GoogleMap = ({ google }) => {
  const initialCenter = {
    lat: 40.1872023,
    lng: 44.5152,
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "49%",
        height: "93%",
        bottom: "5%",
      }}
    >
      <Map
        styles={MapsStyle.mapStyle}
        resetBoundsOnResize={true}
        google={google}
        zoom={1}
        streetViewControl={false}
        fullscreenControl={false}
        initialCenter={initialCenter}
      >
        <Marker />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBFUTsZRhUqYmEtXNoWuWHOMVDGGm0VgGw",
})(GoogleMap);
