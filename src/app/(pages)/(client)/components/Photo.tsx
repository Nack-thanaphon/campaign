import React from 'react';

const Photo = ({ src }: any) => {
    return <img src={src} alt="Profile Photo" style={{ width: '100%', height: 'auto' }} />;
};

export default Photo;