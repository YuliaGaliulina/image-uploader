import { Component, OnInit, Input } from "@angular/core";
import { UploaderService } from "../uploader.service";

@Component({
  selector: "app-upload-form",
  templateUrl: "./upload-form.component.html",
  styleUrls: ["./upload-form.component.css"]
})
export class UploadFormComponent implements OnInit {
  constructor(private uploader: UploaderService) {}

  @Input() subfolder: string;

  progress: { percentage: number } = { percentage: 0 };
  fileUrl: { url: string } = { url: "" };

  upload(file) {
    this.uploader.uploadFile(file, this.subfolder, this.progress, this.fileUrl);
  }

  ngOnInit() {}
}
