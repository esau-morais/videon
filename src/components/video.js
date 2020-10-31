import React, { useEffect, useRef } from 'react';

import { VideoContainer } from './index';

export default function Video({ peer }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (peer) {
      peer.on('stream', (stream) => {
        videoRef.current.srcObject = stream;
      });
    }
  }, [peer]);

  return (
    <VideoContainer>
      <video
        autoPlay
        ref={videoRef}
        playsInline
      />
    </VideoContainer>
  );
};
