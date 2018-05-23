export interface AccountAlbum {
  id: string;
  title: string;
  description: string;
  datetime: number;
  cover: string;
  cover_width: number;
  cover_height: number;
  account_url: string;
  account_id: number;
  privacy: string;
  layout: string;
  views: number;
  link: string;
  favorite: boolean;
  nsfw?: any;
  section?: any;
  images_count: number;
  in_gallery: boolean;
  is_ad: boolean;
  include_album_ads: boolean;
  order: number;
}

export interface AccountAlbumsResponse {
  data: AccountAlbum[];
  success: boolean;
  status: number;
}
