"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { CircleMarker, MapContainer, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";

interface MapPosition{
    pos: LatLng,
    color: string
}

export default function Map() {
    const position = new LatLng(7.568480875452314, 12.73054624024285072);
    const mapPositions: MapPosition[] = [
        {pos: new LatLng(8.342880203213852, 13.637610035762123), color: "red"},
        {pos: new LatLng(5.835794281940039, 10.389113702691219), color: "green"},
        {pos: new LatLng(4.545981512430686, 10.665129730991424), color: "yellow"},
        {pos: new LatLng(3.3598393347221958, 10.707593735345995), color: "orange"},
        {pos: new LatLng(2.490469863481522, 12.342457902968988), color: "blue"},
        {pos: new LatLng(10.917386120024617, 14.635514138077752), color: "indigo"},
        {pos: new LatLng(2.808609022370689, 15.251242201208953), color: "violet"},
        {pos: new LatLng(4.948004966298029, 13.828698055354351), color: "#327346"},
        {pos: new LatLng(6.743265448999111, 14.104714083654557), color: "#3c3273"},
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
            {mapPositions.map((post, index) => (<CircleMarker key={index}
                center={post.pos}
                pathOptions={{ color: post.color }}
                radius={15}>
            </CircleMarker>))}
        </MapContainer>
    );
}