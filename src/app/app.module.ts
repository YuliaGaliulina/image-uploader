import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase";
import { UploaderService } from "./uploader.service";
import { AppComponent } from "./app.component";
import { UploadFormComponent } from "./upload-form/upload-form.component";

export const firebaseConfig = {
  apiKey: "AIzaSyBylAkzXh1mhGrDJdxLmGsECTxC4dRlzpQ",
  authDomain: "image-uploader-7d6c8.firebaseapp.com",
  databaseURL: "https://image-uploader-7d6c8.firebaseio.com",
  projectId: "image-uploader-7d6c8",
  storageBucket: "image-uploader-7d6c8.appspot.com",
  messagingSenderId: "836200457783"
};

@NgModule({
  declarations: [AppComponent, UploadFormComponent],
  imports: [BrowserModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [AngularFireModule, UploaderService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {}
