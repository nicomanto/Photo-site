export interface Photo {
  readonly publicId: string;
  readonly name: string;
  readonly extension: string;
  readonly imageURL: string;
}

export interface PhotoInGallery extends Photo {
  readonly ph: string;
}
