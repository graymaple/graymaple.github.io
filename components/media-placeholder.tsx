import { ImageIcon, PlayCircle } from 'lucide-react';

export function MediaPlaceholder({ kind = 'image', label }: { kind?: 'image' | 'video'; label: string }) {
  const Icon = kind === 'video' ? PlayCircle : ImageIcon;
  return (
    <figure className="media-placeholder" aria-label={`${label}，媒体素材待补充`}>
      <Icon aria-hidden="true" />
      <div><strong>{label}</strong><span>{kind === 'video' ? 'VIDEO SLOT / 16:9' : 'IMAGE SLOT / 16:9'}</span></div>
      <small>素材完成后可直接替换</small>
    </figure>
  );
}
