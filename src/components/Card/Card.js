import React from 'react';
import stylesCard from './Card.module.css';

export const ProductCard = (props) => {

    return (
        <div className={stylesCard.card}>
            <h1>{props.title || 'N/A'}</h1>
            <h2>{props.price || 'N/A'}</h2>
            <p>{props.descr || 'N/A'}</p>
        </div>
    );
}