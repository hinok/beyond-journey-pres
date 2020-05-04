import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { indentNormalizer, Box, FlexBox } from 'spectacle';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// eslint-disable-next-line import/no-extraneous-dependencies
import vsDark from 'prism-react-renderer/themes/vsDark';

const LiveCode = ({ code }) => {
  const divRef = useRef();

  useEffect(() => {
    const handle = (event) => {
      event.stopPropagation();
    };

    divRef.current.addEventListener('keydown', handle);

    return () => {
      divRef.current.removeEventListener('keydown', handle);
    };
  });

  return (
    <LiveProvider code={indentNormalizer(code)} noInline theme={vsDark}>
      <FlexBox height="100%" flexDirection="column">
        <LiveError />
        <FlexBox width="100%" height="100%">
          <Box padding="2" borderRight="rgba(255, 255, 255, 0.1) 1px solid">
            <div ref={divRef}>
              <LiveEditor className="react-live__editor" />
            </div>
          </Box>
          <Box padding="2">
            <LivePreview />
          </Box>
        </FlexBox>
      </FlexBox>
    </LiveProvider>
  );
};

LiveCode.propTypes = {
  code: PropTypes.string.isRequired,
};

export default LiveCode;
