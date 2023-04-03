import { Item, ItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item }) => {
  return (
    <Item>
      <ItemImage src={item.webformatURL} alt="Зображення із запиту" />
    </Item>
  );
};
export default ImageGalleryItem;
