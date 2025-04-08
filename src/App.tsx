import React from 'react';
    import CookieConsent from './components/CookieConsent'; // Import the component

    function App() {
      return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center relative text-gray-900 dark:text-gray-100">
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <p className="text-lg text-center px-4">
            This is a sample page. The cookie consent banner will appear at the bottom if you haven't interacted with it yet.
          </p>
          {/* Add more page content here */}

          {/* Render the Cookie Consent banner */}
          <CookieConsent />
        </div>
      );
    }

    export default App;
