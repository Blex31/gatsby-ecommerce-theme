import React from 'react';

import { navigate } from 'gatsby';
import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import Icon from '../Icons/Icon';

import * as styles from './MiniCartItem.module.css';

const MiniCartItem = (props) => {
  const {
    image,
    alt,
    name,
    price,
    color,
    size,
  } = props;

  return (
    <div className={styles.root}>
      <div className={styles.imageContainer} role={'presentation'} onClick={() => navigate('/product/sample')}>
        <img src={image} alt={alt} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{name}</span>
          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={price}/>
          </div>
          <span className={styles.meta}>Color: {color}</span>
          <span className={styles.meta}>Size: 
            <span className={styles.size}>{size}</span>
          </span>
        </div>
        <AdjustItem></AdjustItem>
      </div>
      <div className={styles.closeContainer}>
        <Icon symbol={'cross'}></Icon>
      </div>
    </div>
  );
};

export default MiniCartItem;
