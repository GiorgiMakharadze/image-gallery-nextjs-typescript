export interface IUnsplashImage {
  data: any;
  description: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
  };
  width: number;
  height: number;
}

export interface IUnsplashSearchResponse {
  results: IUnsplashImage[];
}
