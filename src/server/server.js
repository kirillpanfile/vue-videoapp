import { Server, JSONAPISerializer, Model, hasMany } from "miragejs";
import videoJSON from "./videos.json";
import tagsJSON from "./tags.json";
let server = new Server({
  serializers: {
    application: JSONAPISerializer,
    video: JSONAPISerializer.extend({
      include: ["tags"],
    }),
    tag: JSONAPISerializer.extend({
      include: ["videos"],
    }),
  },
  fixtures: {
    videos: videoJSON,
    tags: tagsJSON,
  },
  models: {
    video: Model.extend({
      tags: hasMany(),
    }),
    tag: Model.extend({
      videos: hasMany(),
    }),
  },
  routes() {
    this.get("/videos");
  },
});

export default server;
