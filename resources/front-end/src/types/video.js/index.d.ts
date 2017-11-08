// Type definitions for Video.js 6.2.0
// Project: https://github.com/zencoder/video-js

// The Video.js API allows you to interact with the video through
// Javascript, whether the browser is playing the video through HTML5
// video, Flash, or any other supported playback technologies.

declare function videojs(id: any, options?: videojs.PlayerOptions, ready?: () => void): videojs.Player;

declare namespace videojs {
    export interface PlayerOptions {
         techOrder?: string[];
         html5?: any;
         Hlsjs?:any;
         width?: number;
         height?: number;
         defaultVolume?: number;
         children?: string[];
         controls?: boolean;
         src?: string | {};
         autoplay?: boolean;
         preload?: string;
         fluid?: boolean;
         aspectRatio?: string;
    }

    export interface Source {
         type: string;
         src: string;
    }

    export class Player {
         options: PlayerOptions;
         play(): Player;
         pause(): Player;
         paused(): boolean;
         src(newSource: string | Source | Source[]): Player;
         currentTime(seconds: number): Player;
         currentTime(): number;
         duration(): number;
         buffered(): TimeRanges;
         bufferedPercent(): number;
         volume(percentAsDecimal: number): TimeRanges;
         volume(): number;
         width(): number;
         width(pixels: number): Player;
         height(): number;
         height(pixels: number): Player;
         size(width: number, height: number): Player;
         requestFullScreen(): Player;
         cancelFullScreen(): Player;
         ready(callback: (this: Player) => void ): Player;
         on(eventName: string, callback: (eventObject: Event) => void ): void;
         off(eventName?: string, callback?: (eventObject: Event) => void ): void;
         dispose(): void;
         addRemoteTextTrack(options: {}): HTMLTrackElement;
         removeRemoteTextTrack(track: HTMLTrackElement): void;
         poster(val?: string): string | Player;
         playbackRate(rate?: number): number;
    }

    export class Html5 {
         constructor(optionsopt: PlayerOptions, ready: ()=>{});
         featuresFullscreenResize: boolean;
         featuresNativeAudioTracks: boolean;
         featuresNativeTextTracks: boolean;
         featuresNativeVideoTracks: boolean;
         featuresPlaybackRate: boolean;
         featuresProgressEvents: boolean;
         featuresTimeupdateEvents: boolean;
         featuresVolumeControl: boolean;
         movingMediaElementInDOM: boolean;
         nativeSourceHandler: any;

         addRemoteTextTrack():any
         addTextTrack():any
         addWebVttScript_():any
         audioTracks():any
         autoplay():any
         buffered():any
         bufferedPercent():any
         cleanupAutoTextTracks():any
         clearTracks():any
         controls():any
         createEl():any
         createRemoteTextTrack():any
         currentSrc():any
         currentTime():any
         defaultMuted():any
         defaultMuted():any
         defaultPlaybackRate():any
         dispose():any
         duration():any
         emulateTextTracks():any
         ended():any
         enterFullScreen():any
         error(data: any):any
         exitFullScreen():any
         getVideoPlaybackQuality():any
         handleLateInit_():any
         height():any
         initTrackListeners():any
         load():any
         log(msg: string): any
         loop():any
         manualProgressOff():any
         manualProgressOn():any
         manualTimeUpdatesOff():any
         manualTimeUpdatesOn():any
         muted():any
         networkState():any
         onDurationChange():any
         pause():any
         paused():any
         play():any
         player(): any
         playbackRate():any
         played():any
         playsinline():any
         poster():any
         preload():any
         readyState():any
         remoteTextTrackEls():any
         remoteTextTracks():any
         removeRemoteTextTrack():any
         reset():any
         seekable():any
         seeking():any
         setAutoplay():any
         setControls():any
         setCurrentTime():any
         setDefaultMuted():any
         setDefaultPlaybackRate():any
         setLoop():any
         setMuted():any
         setPlaybackRate():any
         setPlaysinline():any
         setPoster():any
         setPreload():any
         setSrc(src:any):any
         setVolume():any
         src(src:any):any
         stopTrackingCurrentTime():any
         stopTrackingProgress():any
         supportsFullScreen():any
         textTracks():any
         trackCurrentTime():any
         trackProgress():any
         triggerReady(): any
         videoHeight():any
         videoTracks():any
         videoWidth():any
         volume():any
         width():any
         canControlPlaybackRate():any
         canControlVolume():any
         canPlaySource():any
         canPlayType():any
         isSupported():any
         supportsNativeAudioTracks():any
         supportsNativeTextTracks():any
         supportsNativeVideoTracks():any
         canPlaySource(source: any): boolean;
    }

    export class Track {
         id: string;
         kind: string;
         label: string;
         language: string;

         addEventListener(event:string, fn:any):void;
         dispatchEvent():void;
         off(type: string | Array<string>, fn:any):void;
         on(type: string | Array<string>, fn:any):void;
         one(type: string | Array<string>, fn:any):void;
         removeEventListener():void;
         trigger(event: string | {});
    }

    export class AudioTrack extends Track {
         constructor({}:any);
         enabled: boolean;
         Kind: any;
         __hlsTrackId:any;
         __hlsGroups:any;
    }

    export function getComponent(name:string):any;
    export function getTech(name:string):any;
    export function extend(type:any, args:any);
}

export = videojs;
