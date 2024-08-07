'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from './components/Carousel';
import Typewriter from './components/Typewriter';
import ImagesSlider from './components/ImagesSlider';


export default function Home() {


  const imagesSmallSlider1 = [
    'https://via.placeholder.com/800x400/ff7f50', // Coral
    'https://via.placeholder.com/800x400/6495ed', // CornflowerBlue
    'https://via.placeholder.com/800x400/dda0dd', // Plum
  ];

  const imagesSmallSlider2 = [
    'https://via.placeholder.com/600x300/87cefa', // LightSkyBlue
    'https://via.placeholder.com/600x300/f08080', // LightCoral
    'https://via.placeholder.com/600x300/98fb98', // PaleGreen
  ];

  const imagesSmallSlider3 = [
    'https://via.placeholder.com/400x400/f4a460', // SandyBrown
    'https://via.placeholder.com/400x400/6a5acd', // SlateBlue
    'https://via.placeholder.com/400x400/20b2aa', // LightSeaGreen
  ];

  const manifesto = [
    {
      title: "Embrace the Glitch",
      paragraph: "Celebrate imperfections, glitches, and the unexpected. The errors in our digital creations reveal the underlying structures of technology and invite us to explore new aesthetic realms."
    },
    {
      title: "Data is the New Canvas",
      paragraph: "In an age where data flows like paint from a brush, we harness raw information to create, distort, and transform reality. The artist's role is to interpret this data, revealing the invisible layers of our connected world."
    },
    {
      title: "Interactivity is Key",
      paragraph: "Art is no longer a passive experience. We invite our audiences to participate, interact, and co-create. The boundary between creator and observer dissolves in the digital age."
    },
    {
      title: "Challenge Ownership",
      paragraph: "In a world of infinite reproduction, the concept of ownership is fluid. We question the notion of the original, embracing the remix, the mashup, and the collaborative creation as legitimate forms of expression."
    },
    {
      title: "Code is Poetry",
      paragraph: "The language of machines is our new syntax. We write code as poets write verse, crafting algorithms that evoke emotion, provoke thought, and conjure beauty from binary logic."
    }
  ]
  

  const sentences = [
    "Wretched Lab Studio (WLS) operates between Switzerland and Ghana.",
    'It spans social science, arts, and design',
    "Through workshops and site-specific artworks",
    "It aims to reshape western tropes around electronic waste."
  ];

  let renderFirstFold = () => {
    return (
      <div className='first_fold'>
        <div className='typewriter-outer'>
          <Typewriter 
            sentences={sentences} 
            typingSpeed={100} 
            pauseTime={1500} 
          />
        </div>

        <ImagesSlider
          images={imagesSmallSlider1}
          width="200px"
          interval={5000} // 5 seconds interval
          top="20px"
          left="auto"
          right="20px"
          position="fixed"
          appearScrollPercent={30}    // Appear after 30% scroll
          disappearScrollPercent={60} // Disappears after 60% of the page is scrolled
        />;

        <ImagesSlider
          images={imagesSmallSlider2}
          width="150px"
          interval={1000} // 1 second interval
          top="400px"
          left="60%"
          right="auto"
          position="fixed"
          appearScrollPercent={50}    // Appear after 30% scroll
          disappearScrollPercent={80} // Disappears after 80% of the page is scrolled
        />;

          <ImagesSlider
            images={imagesSmallSlider3}
            width="200px"
            interval={3000} // 3 seconds interval
            top="30px"
            left="30px"
            right="auto"
            position="fixed"
            appearScrollPercent={10}    // Appear after 30% scroll
            disappearScrollPercent={30} // Disappears after 30% of the page is scrolled
          />;


      </div>
    )
  }

  let renderMenu = () => {
    return (
      <div className='menu_outer'>
        <Link href="/into-the-e-metropolis">
          <div>
          <span>PROJECTS</span>
          </div>
        </Link>
        <Link href="/about">
        <div>
          <span>ABOUT</span>
        </div>
        </Link>
      </div>
    )
  }


  let renderSplashPage = () => {
    return (
      <section className='splash_page_outer'>
        <h1>
          WRETCHED LAB STUDIO
        </h1>
        <div className='seperator_splash_page' />
      </section>
    )
  };

  let renderFooter = () => {
    return (
      <footer className='footer_outer'>
        <section className='footer_inner'>
          <div>
            <h1>Kumasi, Ghana</h1>
            <p>
            Adom House
            45 Abena Circle
            Ahodwo, Kumasi
            Ashanti Region, Ghana
            </p>
          </div>
          <div>
            <h1>Geneva, Switzerland</h1>
            <p>
            Address:
            Rue de la Paix 12
            1201 Geneva
            Geneva, Switzerland
            </p>
          </div>
        </section>
      </footer>
    )
  };

  let renderManifesto = () => {
    return (
      <section className='manifesto_outer'>
          <div className='manifesto_inner'>
              <h1>Manifesto of the New Media Artists</h1>
              <div className='manifesto_inner_body'>
              <div className='manifesto_first_column'>
                  <ol>
                      {returnManifestoMapped()}
                  </ol>
              </div>
              <div className='manifesto_second_column'>
                <ol>
                    {returnManifestoMapped()}
                </ol>
              </div>
              </div>
          </div>
          <div className='manifesto_image_outer'>
            <img src="/images/portrait-wls.jpg" />
          </div>
      </section>
    )
  }

  let returnManifestoMapped = () => {
    return manifesto
    .map((ele, index) => {
      return (
        <li key={index}>
          {ele.title}
          {ele.paragraph}
        </li>
      )
    })
  }


  return (
    <div>
      {renderMenu()}
      {renderSplashPage()}
      {renderFirstFold()}
      {renderManifesto()}
      {renderFooter()}
    </div>
  );
}