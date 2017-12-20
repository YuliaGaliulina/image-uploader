import { Component } from "@angular/core";
import { UploaderService } from "./uploader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private uploader: UploaderService) {}

  progress: { percentage: number } = { percentage: 0 };
  fileUrl: { url: string } = { url: "" };

  upload(file) {
    this.uploader.uploadFile(file, this.progress, this.fileUrl);
  }
}
