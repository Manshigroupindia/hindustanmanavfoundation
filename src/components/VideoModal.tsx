import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = 'https://www.youtube.com/embed/_IlLwfC2dNc?autoplay=1',
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 10002 }}>
      <div
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '800px',
          background: '#000',
          padding: 0,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: '#fff',
            top: '10px',
            right: '10px',
            zIndex: 10,
          }}
          aria-label="Close video"
        >
          <X size={20} />
        </button>
        <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
          <iframe
            src={videoUrl}
            title="Hindustan Manav Foundation Video Showcase"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

