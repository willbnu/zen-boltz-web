import Head from 'next/head';
    import Hero from '../components/Hero';
    import CTAButtons from '../components/CTAButtons';
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    const Home = () => {
      // Basic language detection (replace with more robust solution later)
      const userLanguage =
        typeof window !== 'undefined'
          ? navigator.language || navigator.userLanguage
          : 'en';
      const detectedLanguage = ['en', 'es', 'jp'].includes(userLanguage.slice(0, 2))
        ? userLanguage.slice(0, 2)
        : 'en';

      return (
        <div>
          <Head>
            <title>Lexinum Landing Page</title>
            <meta name="description" content="Lexinum Product Landing Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Hero />
          <CTAButtons />
          <Footer />

          {/* Display detected language for testing */}
          <div className="text-center p-4">Detected Language: {detectedLanguage}</div>
        </div>
      );
    };

    export default Home;
