import { useEffect, useState } from 'react';
import MediaStreamManager from '../../utils/media-stream-manager';
import styles from './media-select.module.css';

type Props = {
  streamManager: MediaStreamManager | undefined;
  type: 'audio' | 'video';
};

function MediaSelect({ streamManager, type }: Props) {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [currentMedia, setCurrentMedia] = useState<string>('');

  useEffect(() => {
    navigator.mediaDevices
      .enumerateDevices() //
      .then((devices) => setDevices(devices));

    if (!streamManager) return;
    const current =
      type === 'video' ? streamManager.getCurrentVideoTrack().label : streamManager.getCurrentAudioTrack().label;
    setCurrentMedia(current);
  }, []);

  return (
    <select className={styles.select}>
      {devices
        .filter((device) => device.kind === `${type}input`)
        .map((media) => (
          <option value={media.deviceId} selected={media.label === currentMedia}>
            {media.label}
          </option>
        ))}
    </select>
  );
}

export default MediaSelect;
