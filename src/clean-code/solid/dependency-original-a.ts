import { PostService } from "./dependency-original-b";

// Main
(async () => {
  // si el dia de mañana cambia la api o la forma de donde sacamos la información tendremos que
  // modificar demasiado el código,
  const postService = new PostService();

  const posts = await postService.getPosts();

  console.log({ posts });
})();
