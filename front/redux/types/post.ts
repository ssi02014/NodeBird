
export interface ImageSrc {
  src: string;
};

export interface Comments {
  User: {
    nickname: string;
  },
  content: string;
};

export interface MainPosts {
  id: number;
  User: {
    id: number;
    nickname: string;
  }
  content: string;
  Images: ImageSrc[];
  Comments: Comments[];
};

export interface PostState {
  mainPosts: MainPosts[];
  imagePaths: string[];
  postAdded: boolean;
};