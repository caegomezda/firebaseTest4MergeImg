import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // deliveryData:Observable<any[]>;
  isDeliveryDataLoad:Boolean = false;
  documents: any[] = [];
  data:any;
  constructor(private firestore: AngularFirestore,
              ) {
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

  async getDeliveryData(){
    await this.firestore.collection('imgMapParking')
    .valueChanges()
    .subscribe(docs => {
      this.saveData(docs)
    });
    console.log(this.isDeliveryDataLoad);
  }

  async saveData(docs:any){
    this.documents = docs;
    console.log(this.documents);
    this.isDeliveryDataLoad = true
  }
}
