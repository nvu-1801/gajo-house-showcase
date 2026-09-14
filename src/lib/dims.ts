export interface FlipDimensions {
  width: number;
  height: number;
  isMobile: boolean;
}

export function calculateFlipDimensions(): FlipDimensions {
  if (typeof window === 'undefined') {
    return { width: 440, height: 622, isMobile: false };
  }

  const vw = Math.min(window.innerWidth || 360, 1200);
  const vh = Math.min(window.innerHeight || 640, 900);
  const isMobile = vw <= 768;

  let w: number;
  let h: number;

  if (isMobile) {
    w = Math.floor(vw * 0.92);
    h = Math.floor(w * 1.414);
    const mh = Math.floor(vh * 0.75);
    if (h > mh) {
      h = mh;
      w = Math.floor(h / 1.414);
    }
  } else {
    w = Math.floor(vw * 0.44);
    if (w > 520) w = 520;
    h = Math.floor(w * 1.414);
    const mh = Math.floor(vh * 0.82);
    if (h > mh) {
      h = mh;
      w = Math.floor(h / 1.414);
    }
  }

  return {
    width: Math.max(w, 280),
    height: Math.max(h, 400),
    isMobile
  };
}
