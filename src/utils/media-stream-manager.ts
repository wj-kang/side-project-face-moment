class MediaStreamManager {
  //
  private stream: MediaStream;

  public constructor(stream: MediaStream) {
    this.stream = stream;
  }

  public getStream(): MediaStream {
    return this.stream;
  }

  public setStream(stream: MediaStream): void {
    this.stream = stream;
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
    return this.stream.getVideoTracks()[0];
  }

  public getCurrentAudioTrack(): MediaStreamTrack {
    return this.stream.getAudioTracks()[0];
  }

  public toggleCurrentAudioStatus(): void {
    const track = this.getCurrentAudioTrack();
    track.enabled = !track.enabled;
  }

  public toggleCurrentVideoStatus(): void {
    const track = this.getCurrentVideoTrack();
    track.enabled = !track.enabled;
  }

  public setStreamIntoElement(element: HTMLVideoElement) {
    element.srcObject = this.stream as MediaProvider;
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
