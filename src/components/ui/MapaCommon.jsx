import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';

export const MapaCommon = ({ tracking }) => {
  const polylineOptions = {
    fillColor: 'transparent',
    weight: 12,
    opacity: 1,
    color: '#417BEF',
    fillOpacity: 1
  };
  const greenIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const blueIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  const coordenadas = tracking.map((track, index) => [track.auk_coorx, track.auk_coory]);

  return (
    <MapContainer
      center={coordenadas[0]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', borderRadius: 15 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline pathOptions={polylineOptions} positions={coordenadas} />
      {tracking.map(
        (coords, index) =>
          (index == 0 || index == tracking.length - 1) && (
            <Marker
              position={[coords.auk_coorx, coords.auk_coory]}
              draggable={false}
              key={coords.auk_id}
              icon={index == 0 ? greenIcon : blueIcon}
            >
              <Popup>{index == 0 ? 'Inicio' : 'Fin'}</Popup>
            </Marker>
          )
      )}
      ;
    </MapContainer>
  );
};
