export interface UnsplashImage {
  user: {
    username: string;
  };
  description: string;
  urls: {
    raw: string;
  };
  width: number;
  height: number;
}

export interface UnsplashSearchResponse {
  results: UnsplashImage[];
}
