import { translate } from '../lib/languageDetection';

    const Hero = ({ lang }) => (
      <section className="hero bg-dark flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          {translate(lang, 'heroTitle')}
        </h1>
        <div className="video-container w-full max-w-4xl">
          {/* Replace with your actual video URL */}
          <iframe
            className="w-full h-64 sm:h-96"
            src="YOUR_DEMO_VIDEO_URL"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    );

    export default Hero;
