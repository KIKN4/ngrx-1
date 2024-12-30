export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface PostItem {
  title: string;
  body: string,
  userId: number,
  id: number,
}

export interface PostState {
  list: PostItem[] | [];
  postDetail: PostItem | null;
}


export const postInitialState: PostState = {
  list: [],
  postDetail: null,
}
