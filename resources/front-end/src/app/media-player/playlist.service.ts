import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PlaylistService {
    private playlist: PlaylistItem[] = [];
    private playlistRaw: Array<any> = [];
    private currentIndex: number;

    constructor(private http: HttpClient){}

    getPlaylist(): PlaylistItem[] {
        return this.playlist;
    }

    getPlaylistItem(index: number): PlaylistItem {
        return this.playlist[index];
    }

    clearPlaylist(): void {
        this.playlist.length = 0;
        this.playlistRaw.length = 0;
    }

    addToPlaylist(fileArray: Array<any>) {
        for(let fileRaw of fileArray) {
            this.playlist.push({
                src: fileRaw.playlist_stream,
                type: 'application/x-mpegURL',
                withCredentials: true
            });
            this.playlistRaw.push(fileRaw);
        }
    }

    loadPlaylist(url: string): Observable<Array<PlaylistItem>> {
        return this.http.get(url)
            .map((data: Array<any>) => {
                this.clearPlaylist();
                this.addToPlaylist(data);

                return this.playlist;
            })
    }

    loadNextFile(url?: string): Observable<boolean> {
        const _url = url ? url : this.playlist[this.currentIndex+1].src;
        const param = new HttpParams().set('url', _url);

        return this.http.get<boolean>('/api/cloudfront-cookies', {params:param});
    }

    playlistLength(): number {
        return this.playlist.length;
    }

    getIndex(): number {
        return this.currentIndex;
    }

    setIndex(value: number) {
        this.currentIndex = value;
    }

    incrementIndex(): void {
        this.currentIndex++;
    }

    decrementIndex(): void {
        this.currentIndex--;
    }
}