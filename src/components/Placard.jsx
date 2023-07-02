import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Placard = () => {
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
  ];

  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? data.length - 1 : currSlide - 1);
  };

  const nextSlide = () => {
    setCurrSlide(currSlide === data.length - 1 ? 0 : currSlide + 1);
  };

  return (
    <div className='w-full h-auto overflow-x-hidden bottom-5'>
      <div className='w-screen'>
        <div
          style={{ transform: `translate(-${currSlide * 100}vw)` }}
          className='w-[400vw] h-full flex transition-transform duration-1000'
        >
          {data.map((imageUrl, index) => (
            <img
              className='img-4 w-screen h-full object-cover'
              key={index}
              loading='priority'
              src={imageUrl}
              alt=''
            />
          ))}
          <img
            className='img-4 w-screen h-full object-cover'
            loading='priority'
            src={data[0]}
            alt=''
          />
          <img
            className='img-4 w-screen h-full object-cover'
            loading='priority'
            src={data[1]}
            alt=''
          />
          <img
            className='img-4 w-screen h-full object-cover'
            loading='priority'
            src={data[2]}
            alt=''
          />
        </div>

        <div className='absolute bottom-40 left-0 right-0 w-fit mx-auto flex gap-8'>
          <div onClick={prevSlide} className='arrow-1'>
            <ArrowBackIcon />
          </div>

          <div onClick={nextSlide} className='arrow-2'>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
