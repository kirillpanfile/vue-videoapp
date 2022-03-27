import { createStore } from "vuex";
import Api from "../services/api";
export default createStore({
  state: {
    videos: [],
    tags: [],
    playedVideos: [],
  },
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SET_TAGS(state, tags) {
      state.tags = tags;
    },
    SET_PLAYED_VIDEOS(state, playedVideos) {
      state.playedVideos = playedVideos;
    },
    MARK_VIDEO_PLAYED(state, videoID) {
      let playedVideos = state.playedVideos.concat(videoID);
      state.playedVideos = playedVideos;
      window.localStorage.setItem(
        "playedVideos",
        JSON.stringify(state.playedVideos)
      );
    },
  },
  actions: {
    async loadVideos({ commit }) {
      let response = await Api().get("/videos");
      let videos = response.data.data;
      let tags = response.data.included.filter((i) => i.type === "tags");
      tags.forEach((t) => {
        t.attributes.id = t.id;
        t.attributes.video_ids = t.relationships.videos.data.map((v) => v.id);
      });
      videos.forEach((v) => {
        v.attributes.id = v.id;
        v.attributes.tag_ids = v.relationships.tags.data.map((t) => t.id);
      });
      console.log(tags);
      commit(
        "SET_VIDEOS",
        videos.map((v) => v.attributes)
      );
      commit(
        "SET_TAGS",
        tags.map((t) => t.attributes)
      );
      let playedVideos = JSON.parse(window.localStorage.playedVideos);
      commit("SET_PLAYED_VIDEOS", playedVideos);
    },
    markPlayed({ commit }, videoID) {
      commit("MARK_VIDEO_PLAYED", videoID);
    },
  },
  modules: {},
  getters: {
    getTag: (state) => (id) => {
      return state.tags.find((t) => t.id == id);
    },
  },
});
