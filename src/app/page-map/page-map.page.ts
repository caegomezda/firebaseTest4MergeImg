import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.page.html',
  styleUrls: ['./page-map.page.scss'],
})

export class PageMapPage implements OnInit {

  mergedImageDataURL: string;
  isDeliveryDataLoad:Boolean = false;
  documents: any[] = [];
  data:any;

  constructor(private firestore: AngularFirestore,) {
    this.mergedImageDataURL = '';
    this.data = this.firestore.collection('imgMapParking')
    .valueChanges()
    .subscribe(docs => {
      this.documents = docs;
      this.isDeliveryDataLoad = true
    });
   }

  ionViewWillEnter(){
    this.getDeliveryData()
  }

  async ngOnInit() {
    this.mergeImages([
      '../../assets/img/parking_images/img_7-removebg-preview.png'
    ]);
  }

  async getDeliveryData(){
    await this.firestore.collection('imgMapParking')
    .valueChanges()
    .subscribe(docs => {
      this.saveData(docs)
    });
  }

  async saveData(docs:any){
    this.documents = docs;
    this.isDeliveryDataLoad = true
    let result = await this.constructorImgDict(this.documents)
    this.dinamicImgDictImplementationMerge(result)
  }

  async constructorImgDict(dict:any){
    let imgContainer = []
    for ( const iterator of dict) {
      imgContainer.push(iterator['status'])
    }
    return imgContainer
  }

  async mergeImages(imageSources: string[]) {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('2D rendering context not obtained');
      }

      const images = imageSources.map(src => {
        const image = new Image();
        image.src = src;
        return image;
      });

      await Promise.all(images.map(image => new Promise((resolve, reject) => image.onload = resolve)));

      canvas.width = images[0].width;
      canvas.height = images[0].height;

      for (const image of images) {
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
      }

      this.mergedImageDataURL = canvas.toDataURL();
    } catch (error) {
      console.error(error);
    }
  }

  urlImgMaker(arr:any){
    let urlContainer = []
    for (let index of arr) {
      if ([index][0][0] === "FULL") {
        let img = [index][0][1];
        let url =`../../assets/img/parking_images/${img}-removebg-preview.png`
        urlContainer.push(url);
      }
    }
    return urlContainer
  }

  async dinamicImgDictImplementationMerge(arr:any){
    let result = this.urlImgMaker(arr)
    this.mergeImages(result)
  }
}

