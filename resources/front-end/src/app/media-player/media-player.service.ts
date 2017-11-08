import {Injectable, OnInit} from '@angular/core';
import {PlaylistService} from './playlist.service';
import {Player} from './hlsjs/player';

@Injectable()
export class MediaPlayerService{
    private player: Player;
    private isPlaying: boolean;


    constructor(private playlist: PlaylistService) { }

    /**
     * Initialize the player on demand
     *
     * @param url - the url to load data for playlist
     */
    init(url: string): void {
        const self = this;
        this.playlist.loadPlaylist(url)
            .subscribe((data) => {
                this.playlist.loadNextFile(this.playlist.getPlaylistItem(0).src)
                    .subscribe(resp => {
                        self.player = new Player('player', {autoplay:true});
                        self.playlist.setIndex(0);
                        self.player.src(this.playlist.getPlaylistItem(0).src);
                    });
            });
    }

    togglePlay(): void {
        if(this.isPlaying) this.player.play();
        else this.player.pause();
        this.isPlaying = !this.isPlaying;
    }

    next(): void {
        const index = this.playlist.getIndex() + 1 >= this.playlist.playlistLength() ? 0 : this.playlist.getIndex() + 1;
        this.playlist.setIndex(index);
        this.playlist.loadNextFile(this.playlist.getPlaylistItem(index).src).subscribe(data => {
            this.player.src(this.playlist.getPlaylistItem(index).src)
        });
    }

    prev(): void {
        const index = this.playlist.getIndex() - 1 < 0 ? this.playlist.playlistLength() - 1 : this.playlist.getIndex() - 1;
        this.playlist.setIndex(index);
        this.playlist.loadNextFile(this.playlist.getPlaylistItem(index).src).subscribe(data => {
            this.player.src(this.playlist.getPlaylistItem(index).src)
        });
    }

    onLoad(): void {
    }
}