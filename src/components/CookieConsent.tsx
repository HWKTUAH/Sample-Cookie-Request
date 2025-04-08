import React, { useState, useEffect } from 'react';
    import { Cookie, X } from 'lucide-react';

    const COOKIE_CONSENT_KEY = 'cookie_consent_given';

    const CookieConsent: React.FC = () => {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        // Check if consent has already been given
        const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consentGiven) {
          setIsVisible(true);
        }
      }, []);

      const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
        setIsVisible(false);
        // Add any logic needed after acceptance (e.g., enabling analytics)
        console.log('Cookies accepted');
      };

      const handleDecline = () => {
        // You might want to store this preference too, depending on regulations
        localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
        setIsVisible(false);
        // Add any logic needed after declining
        console.log('Cookies declined');
      };

      if (!isVisible) {
        return null;
      }

      return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Cookie className="h-8 w-8 text-blue-500 flex-shrink-0" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Learn more</a>.
                </p>
              </div>
              <div className="flex-shrink-0 flex gap-2 mt-3 md:mt-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-800"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Accept All
                </button>
              </div>
              {/* Optional: Close button */}
              {/* <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close cookie consent"
              >
                <X className="h-5 w-5" />
              </button> */}
            </div>
          </div>
        </div>
      );
    };

    export default CookieConsent;
