import { PostService } from "./dependency-solution-b";
import {
  //   JsonDataBaseService,
  //   LocalDataBaseService,
  WebApiPostService,
} from "./dependency-solution-c";

// Main
(async () => {
  // vamos a poder cambiar el provider y ahora el código es más tolerante a cambios
  //   const provider = new JsonDataBaseService();
  //   const provider = new LocalDataBaseService();
  const provider = new WebApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
