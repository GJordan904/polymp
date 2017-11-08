import { Component, OnInit } from '@angular/core';
import { DzPreview } from './dropzone.types';
import {DropzoneService} from './dropzone.service';
import Dropzone from 'dropzone';

@Component({
  selector: 'dropzone-previews',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzonePreviewComponent implements OnInit {
  que: Array<DzPreview> = [];
  done: Array<DzPreview> = [];

  constructor(private dzService: DropzoneService) { }

  ngOnInit(): void {
    this.que = [];
    this.dzService.addedFile.subscribe(this.onFileAdded);
    this.dzService.uploadProgress.subscribe(this.onUploadProgress);
    this.dzService.success.subscribe(this.onSuccess);
    this.dzService.complete.subscribe(this.onComplete);
  }

  private onFileAdded = (file: Dropzone.DropzoneFile) => {
    file.id = this.que.length;
    this.que.push({
      name: file.name,
      size: file.size,
      progress: 0,
      bytesSent: 0,
      thumbnail: '',
      status: 'Queued For Upload'
    });
  };

  private onUploadProgress = (event: {file: Dropzone.DropzoneFile, progress: number, bytesSent: number}) => {
    this.que[event.file.id].progress = event.progress;
    this.que[event.file.id].progress = event.bytesSent;
  };

  private onComplete = (file: Dropzone.DropzoneFile) => {
    this.done.push(this.que[file.id]);
    this.que.splice(file.id,1)
  };

  private onSuccess = (event: {file: Dropzone.DropzoneFile, response: any}) => {

  };
}
