import { useState, useEffect } from 'react';

export const useDisplayIframeLoader = (iframeWrapperRef) => {
  const [isLoading, setIsLoading] = useState(false);

  // ping for iframe
  useEffect(() => {
    let locateIframeInterval;

    const iframeExists = () => {
      return iframeWrapperRef.current
        && iframeWrapperRef.current.children
        && iframeWrapperRef.current.children[0].nodeName === 'IFRAME';
    }

    const startLoadingDisplay = () => {
      setIsLoading(true);

      locateIframeInterval = setInterval(() => {
        console.log(`iframeWrapperRef.current`, iframeWrapperRef.current);
        console.log(`iframeWrapperRef.current.children`, iframeWrapperRef.current.children);

        if (iframeExists()) {
          clearInterval(locateIframeInterval);
          setIsLoading(false);
        }
      }, 200);
    }

    // wait 200 to display the loading UI to prevent jumpiness
    // don't enclose iframeExists() by using it directly in the setTimeout callback
    // instead, apply the latest iframeExists value by passing it in as the 3rd parameter
    setTimeout(
      (iframeExists) => {
        if (iframeExists) {
          startLoadingDisplay();
        }
      },
      200,
      iframeExists()
    );

    return (() => {
      console.log(`locateIframeInterval`, locateIframeInterval);

      if (locateIframeInterval) {
        console.log(`in return clearInteval(locateIframeInterval)`)

        clearInterval(locateIframeInterval);
      }
    });
  }, [iframeWrapperRef.current, setIsLoading]);

  return isLoading;
}