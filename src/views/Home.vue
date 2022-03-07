<template>
  <div class="home">
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="(video, index) in videos" :key="index">
        <VideoListVideo :video="video" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import VideoListVideo from "../components/VideoListVideo";
export default {
  name: "Home",
  components: { VideoListVideo },
  computed: {
    ...mapState(["videos", "tags"]),
    ...mapGetters(["getTag"]),
  },
};
</script>
