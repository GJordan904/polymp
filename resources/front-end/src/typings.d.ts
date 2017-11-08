/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare type PlaylistItem = {
  src: string,
  type: string,
  withCredentials: boolean
}
declare interface TransferStats {
  storage: {
    used: number;
    remaining: number;
  }
}

