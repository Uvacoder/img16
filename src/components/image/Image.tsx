import NextImage from 'next/image';
import { appendHTTPS } from '../../utils/helpers';
import { ImageContainer, Overlay } from './Image.style';
import { PhotoClickHandler } from 'react-photo-gallery';
import { DEFAULT_PHOTO_QUALITY } from '../../utils/constants';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  top: number;
  left: number;
  index: number;
  onPhotoClick: PhotoClickHandler;
}

const contentfulAssetsLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) => {
  // TODO: Can divide width (/1.2) to lower the bandwith.
  return appendHTTPS(`${src}?w=${width}&q=${quality}&fm=jpg`);
};

const Image: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  top,
  left,
  index,
  onPhotoClick,
}) => {
  return (
    <ImageContainer
      // TODO: Fix this
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={event => onPhotoClick(event, { index })}
      top={top}
      left={left}
    >
      <NextImage
        loader={contentfulAssetsLoader}
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={DEFAULT_PHOTO_QUALITY}
      />
      <Overlay>
        <img src={'./icons/eye.svg'} width='34px' height='34px' alt='Eye' />
      </Overlay>
    </ImageContainer>
  );
};

export default Image;
