const CTAButtons = () => (
      <div className="cta-buttons flex justify-center gap-4 mt-8">
        {/* Replace with your actual App Store and Google Play links */}
        <a
          href="APP_STORE_LINK"
          className="btn-store bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center"
        >
          <img src="/app-store-icon.png" alt="App Store" className="w-6 h-6 mr-2" />
          Download on the App Store
        </a>
        <a
          href="GOOGLE_PLAY_LINK"
          className="btn-store bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center"
        >
          <img src="/google-play-icon.png" alt="Google Play" className="w-6 h-6 mr-2" />
          Get it on Google Play
        </a>
      </div>
    );

    export default CTAButtons;
