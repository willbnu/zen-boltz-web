import Head from 'next/head';
    import Hero from '../components/Hero';
    import CTAButtons from '../components/CTAButtons';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import { detectLanguage } from '../lib/languageDetection';
    import { useEffect, useState } from 'react';

    const Home = () => {

      const [language, setLanguage] = useState('en');

      useEffect(() => {
          setLanguage(detectLanguage());
      }, []);

      return (
        <div>
          <Head>
            <title>Lexinum Landing Page</title>
            <meta name="description" content="Lexinum Product Landing Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Hero lang={language}/>
          <CTAButtons lang={language}/>
          <Footer />
        </div>
      );
    };

    export default Home;
