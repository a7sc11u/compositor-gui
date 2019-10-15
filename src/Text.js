import { h } from 'preact';
import Box from './Box';

const debug = false;

import useBraidStyle from './useBraidStyle.v1';

export default props => {
  const braidStyle = useBraidStyle({
    fontSize: props.size,
    leading: props.leading,
    flow: props.flow,
    measure: props.measure
  });
  return debug ? (
    <Box>
      <span className={braidStyle} {...props} />
    </Box>
  ) : (
    <span className={braidStyle} {...props} />
  );
};
