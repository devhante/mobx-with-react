import React from 'react';
import './SupermarketTemplate.css';

const SupermarketTemplate = ({ items, total, basket }) => {
    return (
        <div className="SupermarketTemplate">
            <div className="items-wrapper">
                <h2>상품</h2>
                {items}
            </div>
            <div className="basket-wrapper">
                <h2>장바구니</h2>
                {basket}
                {total}
            </div>
        </div>
    );
};

export default SupermarketTemplate;