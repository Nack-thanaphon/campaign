import React from 'react';

const Map = ({ location }: any) => {
    return (
        <div>
            <h2>Location</h2>
            <iframe
                src={`https://www.google.com/maps?q=${location}&output=embed`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Map;