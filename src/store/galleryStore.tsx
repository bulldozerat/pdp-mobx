import { observable, action } from 'mobx';

export class galleryStore {
  @observable galleryData = [];
  @observable currentBigImage = "https://res.cloudinary.com/geberit/image/upload/f_auto,t_ProductLarge/58/10/DAS_125810_20170927_101712.jpg";

    @action fetchGallery = async () => {
      const response = await fetch(
        "https://api.catalog.geberit.com/v1/en-GB/products/PRO_224638"
      );
      const data = await response.json();
      this.galleryData = data.gallery.list;
      console.log(data.gallery.list);  
    }
}

export default new galleryStore();