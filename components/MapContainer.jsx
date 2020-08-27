import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
  render() {
    const style = {
      width: "50%",
      height: "500px",
    };
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{
          lat: 52.4866,
          lng: 13.39698,
        }}
        style={style}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          {/* <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div> */}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);
