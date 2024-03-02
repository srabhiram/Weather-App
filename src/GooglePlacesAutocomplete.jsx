// GooglePlacesAutocomplete.jsx
import  { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function GooglePlacesAutocomplete(props ) {
    const inputRef = useRef(null);


    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_GOOGLE_API, // Replace with your Google Maps API key
            version: 'weekly',
        });

        loader.load().then(() => {
            new google.maps.places.Autocomplete(inputRef.current);
            inputRef.current.addEventListener('place_changed', () => {
                const place = inputRef.current.getPlace();
                props.places(place);
            });
        });
    }, [props]);

    return <input ref={inputRef} />;
}

export default GooglePlacesAutocomplete;
