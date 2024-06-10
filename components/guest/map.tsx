"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { CircleMarker, MapContainer, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";

export default function Map() {
    const position = new LatLng(7.568480875452314, 12.73054624024285072);
    const mapPositions = [
        new LatLng(8.342880203213852, 13.637610035762123),
        new LatLng(5.835794281940039, 10.389113702691219),
        new LatLng(4.545981512430686, 10.665129730991424),
        new LatLng(3.3598393347221958, 10.707593735345995),
        new LatLng(2.490469863481522, 12.342457902968988),
        new LatLng(8.699839064568948, 10.919913757114415),
        new LatLng(10.917386120024617, 14.635514138077752),
        new LatLng(9.266069526665802, 15.421098218623854),
        new LatLng(6.025859388599429, 17.54429843631769),
        new LatLng(2.808609022370689, 15.251242201208953),
        new LatLng(4.948004966298029, 13.828698055354351),
        new LatLng(6.743265448999111, 14.104714083654557),
    ];

    return (
        <MapContainer
            center={position}
            zoom={6}
            scrollWheelZoom={true}
            style={{ height: "100vh", width: "100vw" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapPositions.map((pos, index) => (<CircleMarker key={index}
                center={pos}
                pathOptions={{ color: 'red' }}
                radius={15}>
            </CircleMarker>))}
        </MapContainer>
    );
}