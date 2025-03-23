"use client"

import { useState } from 'react';
import GoogleMapLoader from './GoogleMapLoader';
import ReviewLink from './ReviewLink';

declare global {
    interface Window {
        initializeMap: () => void;
    }
}

let map: google.maps.Map;
let searchBox: google.maps.places.SearchBox;

export default function MapContainer() {
    const [placeId, setPlaceId] = useState<string | undefined>(undefined);

    function initialize() {
        map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            center: { lat: 13.736717, lng: 100.523186 },
            zoom: 15,
        });

        // Create the search box input
        const input = document.getElementById('pac-input') as HTMLInputElement;
        searchBox = new google.maps.places.SearchBox(input);

        // Bias the SearchBox results towards current map's viewport
        map.addListener('bounds_changed', () => {
            searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
        });

        // Listen for the event fired when the user selects a prediction
        searchBox.addListener('places_changed', () => {
            const places = searchBox.getPlaces();

            if (places?.length === 0) return;

            // Clear existing markers
            const markers: google.maps.Marker[] = [];
            markers.forEach(marker => marker.setMap(null));

            // For each place, get the icon, name and location.
            const bounds = new google.maps.LatLngBounds();

            places?.forEach(place => {
                if (!place.geometry || !place.geometry.location) return;

                // Create a marker for each place
                markers.push(
                    new google.maps.Marker({
                        map,
                        position: place.geometry.location,
                        title: place.name
                    })
                );

                setPlaceId(place.place_id);

                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });

            map.fitBounds(bounds);
        });

        // Initial search for Google Thailand
        const request: google.maps.places.TextSearchRequest = {
            location: map.getCenter()!,
            radius: 1000,
            query: 'Google Thailand',
        };

        const service = new google.maps.places.PlacesService(map);
        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                const place = results[0];
                setPlaceId(place.place_id);

                if (place.geometry?.location) {
                    new google.maps.Marker({
                        map,
                        position: place.geometry.location
                    });
                }
            }
        });
    }

    return (
        <div className="relative">
            <input
                id="pac-input"
                className="controls w-full p-2 border border-gray-300 rounded-md mb-2"
                type="text"
                placeholder="ค้นหาสถานที่..."
            />
            <GoogleMapLoader onMapLoad={initialize} />
            <div id="map" style={{ width: '100%', height: '400px' }} />
            <ReviewLink placeId={placeId} />
        </div>
    );
}