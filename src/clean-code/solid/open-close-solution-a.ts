import {
  PhotosService,
  PostService,
  TodoService,
} from "./open-close-solution-b";
import { HttpClient } from "./open-close-solution-c";

(async () => {
  const httpClient = new HttpClient();

  const todoService = new TodoService(httpClient);
  const postService = new PostService(httpClient);
  const photosService = new PhotosService(httpClient);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log("running open-close solution");
  console.log({ todos, posts, photos });
})();
