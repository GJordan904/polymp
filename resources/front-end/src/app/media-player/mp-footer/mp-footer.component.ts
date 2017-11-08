import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MediaPlayerService} from '../media-player.service';

@Component({
    selector: 'mp-footer',
    templateUrl: './mp-footer.template.html',
    styleUrls: ['./mp-footer.style.scss']
})

export class MpFooter implements OnInit, AfterViewInit {
    @Input('load')load: string;

    constructor(private mediaPlayer: MediaPlayerService) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.mediaPlayer.init(this.load);
    }

    play(): void {
        this.mediaPlayer.togglePlay();
    }

    prev(): void {
        this.mediaPlayer.prev();
    }

    next(): void {
        this.mediaPlayer.next();
    }
}