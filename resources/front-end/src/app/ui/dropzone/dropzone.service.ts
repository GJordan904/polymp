import { Injectable } from '@angular/core';
import Dropzone from 'dropzone';
import { Subject }    from 'rxjs/Subject';
import {HttpXsrfTokenExtractor} from '@angular/common/http';

@Injectable()
export class DropzoneService {
  private dropSource = new Subject<Event>();
  private dragStartSource = new Subject<Event>();
  private dragEndSource = new Subject<Event>();
  private dragEnterSource = new Subject<Event>();
  private dragOverSource = new Subject<Event>();
  private dragLeaveSource = new Subject<Event>();
  private addedFileSource = new Subject<Dropzone.DropzoneFile>();
  private removedFileSource = new Subject<Dropzone.DropzoneFile>();
  private thumbnailSource = new Subject<{file: Dropzone.DropzoneFile, url: string}>();
  private errorSource = new Subject<{file: Dropzone.DropzoneFile, error: string, xhr: XMLHttpRequest}>();
  private processingSource = new Subject<Dropzone.DropzoneFile>();
  private uploadProgressSource = new Subject<{file: Dropzone.DropzoneFile, progress: number, bytesSent: number}>();
  private sendingSource = new Subject<{file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, form: FormData}>();
  private successSource = new Subject<{file: Dropzone.DropzoneFile, response: any}>();
  private completeSource = new Subject<Dropzone.DropzoneFile>();
  private canceledSource = new Subject<Dropzone.DropzoneFile>();
  private maxFilesReachedSource = new Subject<Dropzone.DropzoneFile>();
  private maxFilesExceededSource = new Subject<Dropzone.DropzoneFile>();
  private processingMultipleSource = new Subject<Array<Dropzone.DropzoneFile>>();
  private sendingMultipleSource = new Subject<{file: Array<Dropzone.DropzoneFile>, xhr: XMLHttpRequest, form: FormData}>();
  private successMultipleSource = new Subject<{file: Array<Dropzone.DropzoneFile>, response: any}>();
  private completeMultipleSource = new Subject<Array<Dropzone.DropzoneFile>>();
  private canceledMultipleSource = new Subject<Array<Dropzone.DropzoneFile>>();
  private totalUploadProgressSource = new Subject<{uploadProgress: number, totalBytes: number, totalBytesSent: number}>();

  dz: Dropzone;
  drop = this.dropSource.asObservable();
  dragStart = this.dragStartSource.asObservable();
  dragEnd = this.dragEndSource.asObservable();
  dragEnter = this.dragEnterSource.asObservable();
  dragOver = this.dragOverSource.asObservable();
  dragLeave = this.dragLeaveSource.asObservable();
  addedFile = this.addedFileSource.asObservable();
  removedFile = this.removedFileSource.asObservable();
  thumbnail = this.thumbnailSource.asObservable();
  error = this.errorSource.asObservable();
  processing = this.processingSource.asObservable();
  uploadProgress = this.uploadProgressSource.asObservable();
  sending = this.sendingSource.asObservable();
  success = this.successSource.asObservable();
  complete = this.completeSource.asObservable();
  canceled = this.canceledSource.asObservable();
  maxFilesReached = this.maxFilesReachedSource.asObservable();
  maxFilesExceded = this.maxFilesExceededSource.asObservable();
  processingMultiple =  this.processingMultipleSource.asObservable();
  sendingMultiple = this.sendingMultipleSource.asObservable();
  successMultiple =  this.successMultipleSource.asObservable();
  completeMultiple = this.completeMultipleSource.asObservable();
  canceledMultiple = this.canceledMultipleSource.asObservable();
  totalUploadProgress = this.totalUploadProgressSource .asObservable();

  constructor(private tokenService: HttpXsrfTokenExtractor) { }

  init(id: string) {
    console.log(id);
    this.dz = new Dropzone(`#${id}`, {
      previewTemplate: '',
      paramName: 'file',
      url: '/api/transfer',
      withCredentials: true,
      createImageThumbnails: true,
      clickable: true,

      drop: (e: Event) => {
        this.dropSource.next(e);
      },
      dragstart: (e: Event) => {
        this.dragStartSource.next(e);
      },
      dragend: (e: Event) => {
        this.dragEndSource.next(e);
      },
      dragenter: (e: Event) => {
        this.dragEnterSource.next(e);
      },
      dragover: (e: Event) => {
        this.dragOverSource.next(e);
      },
      dragleave: (e: Event) => {
        this.dragLeaveSource.next(e);
      },
      addedfile: (file: Dropzone.DropzoneFile) => {
        this.addedFileSource.next(file);
      },
      removedfile: (file: Dropzone.DropzoneFile) => {
        this.removedFileSource.next(file);
      },
      thumbnail: (file: Dropzone.DropzoneFile, dataUrl: string) => {
        this.thumbnailSource.next({file: file, url: dataUrl});
      },
      error: (file: Dropzone.DropzoneFile, error: string, xhr: XMLHttpRequest) => {
        this.errorSource.next({file: file, error: error, xhr: xhr});
      },
      processing: (file: Dropzone.DropzoneFile) => {
        this.processingSource.next(file);
      },
      uploadprogress: (file: Dropzone.DropzoneFile, progress: number, bytesSent: number) => {
        this.uploadProgressSource.next({file: file, progress: progress, bytesSent: bytesSent});
      },
      sending: (file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, form: any) => {
        const token = this.tokenService.getToken();
        xhr.setRequestHeader('X-XSRF-TOKEN', token);
        this.sendingSource.next({file: file, xhr: xhr, form: form});
      },
      success: (file: Dropzone.DropzoneFile, response: any) => {
        this.successSource.next({file: file, response: response});
      },
      complete: (file: Dropzone.DropzoneFile) => {
        this.completeSource.next(file);
      },
      canceled: (file: Dropzone.DropzoneFile) => {
        this.canceledSource.next(file);
      },
      maxfilesreached: (file: Dropzone.DropzoneFile) => {
        this.maxFilesReachedSource.next(file);
      },
      maxfilesexceeded: (file: Dropzone.DropzoneFile) => {
        this.maxFilesExceededSource.next(file);
      },
      processingmultiple: (file: Array<Dropzone.DropzoneFile>) => {
        this.processingMultipleSource.next(file);
      },
      sendingmultiple: (file: Array<Dropzone.DropzoneFile>, xhr: XMLHttpRequest, form: any) => {
        this.sendingMultipleSource.next({file: file, xhr: xhr, form: form});
      },
      successmultiple: (file: Array<Dropzone.DropzoneFile>, response: any) => {
        this.successMultipleSource.next({file: file, response: response});
      },
      completemultiple: (file: Array<Dropzone.DropzoneFile>) => {
        this.completeMultipleSource.next(file);
      },
      canceledmultiple: (file: Array<Dropzone.DropzoneFile>) => {
        this.canceledMultipleSource.next(file);
      },
      totaluploadprogress: (uploadProgress: number, totalBytes: number, totalBytesSent: number) => {
        this.totalUploadProgressSource.next({uploadProgress: uploadProgress, totalBytes: totalBytes, totalBytesSent: totalBytesSent})
      },
    })
  }
}
