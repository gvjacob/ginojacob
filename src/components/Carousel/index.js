import React from 'react';
import Slider from 'react-slick';

import { Image } from '../../components';
import styles from './styles.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ items = [] }) => {
  const settings = {};

  return (
    <Slider
      adaptiveHeight
      arrows={false}
      className={styles.slider}
      easing="in-out"
      slidesToScroll={1}
      slidesToShow={2}
      swipeToSlide>
      {items.map(({ media, content }) => (
        <Image className={styles.image} image={media} />
      ))}
    </Slider>
  );
};

export default Carousel;
