import STT from 'react-scroll-to-top';
// TODO: Fix that
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Arrow from '../../icons/background-arrow.svg';

const ScrollToTop = () => {
  // TODO: Safari visual issue
  return (
    <STT
      smooth={true}
      component={<Arrow />}
      viewBox='0 0 50 50'
      style={{
        transform: 'rotate(-90deg)',
        background: 'none',
        color: 'white',
        boxShadow: 'none',
        right: '10%',
      }}
    />
  );
};

export default ScrollToTop;