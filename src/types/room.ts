export interface GalleryItem {
  src: string;
  label: string;
  objectPosition?: string;
}

export interface RoomSpec {
  label: string;
  value: string;
}

export interface Room {
  id: string;
  index: number;
  code: string;
  personality: string;
  personalityVi?: string;
  tagline: string;
  type: string;
  priceFormatted: string;
  priceUnit: string;
  heroImage: string;
  galleryTop: GalleryItem | null;
  gallerySub: GalleryItem[];
  specs: RoomSpec[];
  curatedAmenities: string[];
  isVip?: boolean;
}
