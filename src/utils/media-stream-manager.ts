class MediaStreamManager {
  //
  private _stream: MediaStream;

  public constructor(stream: MediaStream) {
    this._stream = stream;
    this.setStreamIntoElement(document.querySelector('#video__my')!);
  }

  public getStream(): MediaStream {
    return this._stream;
  }

  public setStream(stream: MediaStream): void {
    this._stream = stream;
  }

  // MediaStream Factory Method
  public static async getMedia(constraints?: MediaStreamConstraints): Promise<MediaStream> {
    let stream: MediaStream;

    const defaultConstraints: MediaStreamConstraints = {
      audio: true,
      video: { facingMode: 'user' },
    };

    stream = await navigator.mediaDevices.getUserMedia(constraints || defaultConstraints);
    // default initiation case => disable tracks
    // user will turn them on when needed
    if (!constraints) {
      stream.getAudioTracks()[0].enabled = false;
      stream.getVideoTracks()[0].enabled = false;
    }

    return stream;
  }

  public getCurrentVideoTrack(): MediaStreamTrack {
    return this._stream.getVideoTracks()[0];
  }

  public getCurrentAudioTrack(): MediaStreamTrack {
    return this._stream.getAudioTracks()[0];
  }

  public toggleCurrentAudioStatus(): void {
    const track = this.getCurrentAudioTrack();
    if (!track) return;
    track.enabled = !track.enabled;
  }

  public toggleCurrentVideoStatus(): void {
    const track = this.getCurrentVideoTrack();
    if (!track) return;
    track.enabled = !track.enabled;
  }

  public setStreamIntoElement(element: HTMLVideoElement) {
    element.srcObject = this._stream as MediaProvider;
  }

  public getVideoDevices(): Promise<MediaDeviceInfo[]> {
    const videos = navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => devices.filter((device) => device.kind === 'videoinput'));

    return videos;
  }

  public getAudioDevices(): Promise<MediaDeviceInfo[]> {
    const audios = navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => devices.filter((device) => device.kind === 'audioinput'));

    return audios;
  }
}

export default MediaStreamManager;
