import React, { useState, useRef, useEffect } from 'react';
import { classNames as cn } from 'peculiarity';
import Slider from 'react-slick';
import { get, noop } from 'lodash';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Image } from '../../components';
import styles from './styles.module.scss';

const Navigator = ({ prev, next }) => (
  <nav className={styles.navigator}>
    <button className={styles.leftArrow} onClick={() => prev.current()}>
      <span>&larr;</span>
    </button>
    <button className={styles.rightArrow} onClick={() => next.current()}>
      <span>&rarr;</span>
    </button>
  </nav>
);

const Carousel = ({ className, items = [] }) => {
  const sliderRef = useRef();
  const nextSlide = useRef(noop);
  const prevSlide = useRef(noop);

  const [content, setContent] = useState(get(items, '0.content', null));

  const beforeChange = (_, toIndex) => setContent(items[toIndex].content);

  useEffect(() => {
    if (sliderRef.current) {
      nextSlide.current = sliderRef.current.slickNext;
      prevSlide.current = sliderRef.current.slickPrev;
    }
  }, [sliderRef.current]);

  return (
    <section className={cn(styles.carousel, className)}>
      <Slider
        className={styles.slider}
        adaptiveHeight
        arrows={false}
        draggable
        easing="in-out"
        slidesToScroll={1}
        slidesToShow={1}
        swipeToSlide
        beforeChange={beforeChange}
        ref={sliderRef}>
        {items.map(({ media }, i) => (
          <Image className={styles.image} image={media} key={i} />
        ))}
      </Slider>
      <div className={styles.content}>
        <div>{content}</div>
        {items.length > 1 && <Navigator prev={prevSlide} next={nextSlide} />}
      </div>
    </section>
  );
};

export default Carousel;
