import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class UploaderService {
  constructor(private db: AngularFireDatabase) {}

  basePath: string = "uploads/";
  imageUrl: string;

  uploadFile(
    file,
    subfolder: string,
    progress: { percentage: number },
    fileUrl: { url: string }
  ) {
    const storageRef = firebase
      .storage()
      .ref(this.basePath + subfolder + file.name);
    const uploadTask = storageRef.put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        progress.percentage = Math.round(
          snapshot.bytesTransferred / snapshot.totalBytes * 100
        );
      },
      error => {
        console.log(error);
      },
      () => {
        fileUrl.url = uploadTask.snapshot.downloadURL;
      }
    );
  }
}
