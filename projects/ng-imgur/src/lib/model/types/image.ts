export interface Image {
  id: string;
  title?: any;
  description?: any;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote?: any;
  favorite: boolean;
  nsfw?: any;
  section?: any;
  account_url?: any;
  account_id?: any;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  in_gallery: boolean;
  link: string;
}

export interface ImageResponse {
  data: Image;
  success: boolean;
  status: number;
}
