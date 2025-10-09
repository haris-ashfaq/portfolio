import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;
