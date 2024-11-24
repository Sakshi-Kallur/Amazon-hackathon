import React from 'react';

const ProductPreview = ({ listing }) => {
    if (!listing) return null;

    return (
        <div>
            <h2>Generated Amazon Listing</h2>
            <p><strong>Title:</strong> {listing.title}</p>
            <p><strong>Description:</strong> {listing.description}</p>
            <ul>
                <strong>Features:</strong>
                {listing.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductPreview;
