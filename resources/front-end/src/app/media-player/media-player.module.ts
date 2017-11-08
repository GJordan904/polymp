import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaPlayerService} from './media-player.service';
import {PlaylistService} from './playlist.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        MediaPlayerService,
        PlaylistService
    ]
})

export class MediaPlayerModule {

    constructor (@Optional() @SkipSelf() parentModule: MediaPlayerModule) {
        if (parentModule) {
            throw new Error(
                'MediaPlayerModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MediaPlayerModule,
            providers: [
                MediaPlayerService,
                PlaylistService
            ]
        };
    }
}