import * as Hls from 'hls.js';

export interface PlayerOptions {
    hlsConfig?: {};
    autoplay?: boolean;
}
const DEFAULTS: PlayerOptions = {
    hlsConfig: {xhrSetup: function(xhr, url) {
        xhr.withCredentials = true; // do send cookies
    }},
    autoplay: false
};
export class Player {
    private el: HTMLVideoElement;
    private hls: Hls;
    private options: PlayerOptions;

    constructor(el: string, options?: PlayerOptions) {
        this.el = <HTMLVideoElement>document.getElementById(el);
        this.options = {
            ...DEFAULTS,
            ...options
        };
        this.hls = new Hls(this.options.hlsConfig);
        this.registerHandlers();
        this.hls.attachMedia(this.el);
    }

    play(): void {
        this.el.play();
    }

    pause(): void {
        this.el.pause();
    }

    src(src: string): void {
        this.hls.loadSource(src);
    }

    private registerHandlers(): void {
        this.hls.on(Hls.Events.MANIFEST_PARSED, this.onManifestParsed);
        this.hls.on(Hls.Events.ERROR, this.handleError)
    }

    private onManifestParsed(): void {
        console.log('manifest parsed');
        if(this.options.autoplay) {
            this.play();
        }
    }

    private handleError(event, data): void {
        if(data.fatal) {
            switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                    // try to recover network error
                    console.log("fatal network error encountered, try to recover");
                    this.hls.startLoad();
                    break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                    console.log("fatal media error encountered, try to recover");
                    this.hls.recoverMediaError();
                    break;
                default:
                    // cannot recover
                    this.hls.destroy();
                    break;
            }
        }
    };
}