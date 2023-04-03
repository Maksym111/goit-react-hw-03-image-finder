import ImageGalleryItem from 'components/ImageGalleryItem';
import { ListImages } from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
  return (
    <ListImages>
      {items.map(item => {
        return <ImageGalleryItem key={item.id} item={item} />;
      })}
    </ListImages>
  );
};

export default ImageGallery;
