import  { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Insta = ({ url, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const embedContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        setIsLoading(false);
      }
    };
    script.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };

    if (embedContainer.current) {
      embedContainer.current.appendChild(script);
    }

    return () => {
      if (embedContainer.current) {
        embedContainer.current.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div className={className}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Instagram feed doesn&apos;t load.</div>}
      {!isError && (
        <div ref={embedContainer} style={{ width: '100%', height: '100%' }}>
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{ width: '100%', height: '100%' }}>
          </blockquote>
        </div>
      )}
    </div>
  );
}

Insta.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Insta;
