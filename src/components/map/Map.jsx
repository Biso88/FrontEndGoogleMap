import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Rating, Typography } from "@mui/material";

const Map = (coords, setCoords, setBounds, places, setChildClicked) => {
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDRQvhnVQncG-vn-0MzVHjoeCOU1QUM_eU" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className="markerContainer"
            lat={Number(place.lat)}
            lng={Number(place.lng)}
            key={i}
          >
            <Paper elevation={3} className="paper">
              <Typography variant="subtitle2" gutterBottom>
                {place.name}
              </Typography>
              <img
                className="pointer"
                alt={place.name}
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                }
              />
              <Rating size="small" value={Number(place.rating)} readOnly />
            </Paper>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
