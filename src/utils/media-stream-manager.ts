class MediaStreamManager {
  //
  public stream: MediaStream | undefined;

  public currentAudioTrack: MediaStreamTrack | undefined;

  public currentVideoTrack: MediaStreamTrack | undefined;

  public async getMedia(constraints?: MediaStreamConstraints): Promise<void> {
    const defaultConstraints: MediaStreamConstraints = {
      audio: true,
      video: { facingMode: 'user' },
    };

    try {
      this.stream = await navigator.mediaDevices.getUserMedia(constraints || defaultConstraints);
      this.currentVideoTrack = this.stream.getVideoTracks()[0];
      this.currentAudioTrack = this.stream.getAudioTracks()[0];

      // default initiation case => disable tracks
      if (!constraints) {
        this.currentAudioTrack.enabled = false;
        this.currentVideoTrack.enabled = false;
      }
    } catch (e) {
      console.error(e);
    }
  }

  public toggleCurrentAudioStatus(): void {
    if (!this.currentAudioTrack) return;
    this.currentAudioTrack.enabled = !this.currentAudioTrack.enabled;
  }

  public toggleCurrentVideoStatus(): void {
    if (!this.currentVideoTrack) return;
    this.currentVideoTrack.enabled = !this.currentVideoTrack.enabled;
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
