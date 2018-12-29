import { observable, action } from 'mobx';

export class galleryStore {
  @observable galleryData = {};

    @action fetchGallery = async () => {
      const response = await fetch(
        "https://api.catalog.geberit.com/v1/en-GB/products/PRO_224638"
      );
      const data = await response.json();
      const gallery = data.gallery.list;
      this.galleryData = gallery;
      console.log(gallery);  
    }
}

export default new galleryStore();