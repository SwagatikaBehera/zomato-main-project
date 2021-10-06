import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaRegCopy, FaDirections } from "react-icons/fa";

const MapView = (props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="hidden md:flex flex-col gap-2">
          <h3 className="text-xl">Call</h3>
          <h5 className="text-zomato-400">{props.phoneNum}</h5>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Direction</h3>
          <div className="w-full h-48 z-20">
            <MapContainer
              center={props.mapLocation}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[20.354293191646075, 85.82395582795968]}>
                <Popup>{props.title}</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="text-lg font-light">{props.address}</div>
        </div>

        <div className="hidden md:flex gap-8">
          <span className="flex items-center gap-2 rounded-md border border-gray-400 font-light px-2 py-1">
            <FaRegCopy className="text-xl text-gray-400" /> Copy
          </span>
          <span className="flex items-center gap-2 rounded-md border border-gray-400 font-light px-2 py-1">
            <FaDirections className="text-xl text-zomato-400" /> Direction
          </span>
        </div>
      </div>
    </>
  );
};

export default MapView;
