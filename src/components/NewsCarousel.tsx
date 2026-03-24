import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import 'swiper/swiper-bundle.min.css';

const NewsCarousel: React.FC = () => {
  const newsItems = [
    { id: 1, title: 'News Item 1', content: 'Content for news item 1.' },
    { id: 2, title: 'News Item 2', content: 'Content for news item 2.' },
    { id: 3, title: 'News Item 3', content: 'Content for news item 3.' },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {newsItems.map(item => (
        <SwiperSlide key={item.id}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="news-item"
          >
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsCarousel;