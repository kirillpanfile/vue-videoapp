import { createServer } from "miragejs";
import { videos } from "./videos.json";
import { tags } from "./tags.json";
const server = createServer({
  routes() {
    this.namespace = "api";
    this.get("/videos", () => {
      return {
        videos: videos,
      };
    });
    this.get("/tags", () => {
      return {
        tags: tags,
      };
    });
  },
});

export default server;
