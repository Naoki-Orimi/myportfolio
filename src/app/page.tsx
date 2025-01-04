import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/components/Home';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
};

export default Page;