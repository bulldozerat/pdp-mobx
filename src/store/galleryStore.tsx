import { observable, action } from 'mobx';

export class galleryStore {
  @observable galleryData = [];
  @observable currentBigImage: any = "https://res.cloudinary.com/geberit/image/upload/f_auto,t_ProductLarge/58/10/DAS_125810_20170927_101712.jpg";
  @observable activeImage: number = 0;

  @action fetchGallery = async () => {
    const response = await fetch(
      "https://api.catalog.geberit.com/v1/en-GB/products/PRO_224638"
    );
    const data = await response.json();
    this.galleryData = data.gallery.list;
    console.log(data.gallery.list);
  }

  @action changeActiveImage = (e: any) => {
    this.activeImage = e.target.getAttribute("id");
    this.currentBigImage = e.target.getAttribute("data-big-image");
  }

  @action arrowsChangeActive = (num: number, image: string) => {
    this.activeImage = num;
    this.currentBigImage = image;
    console.log(this.currentBigImage);
    
  }
}

export default new galleryStore();