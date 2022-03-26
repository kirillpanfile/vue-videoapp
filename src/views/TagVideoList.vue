<template>
  <div>
    <h1 class="display-3 ma-4 d-flex justify-center">
      Videos with Tag "{{ tag.name }}"
    </h1>
    <div class="d-flex flex-wrap">
      <div v-for="(video, index) in videosOnTag" :key="index">
        <VideoListVideo :video="video" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import VideoListVideo from "../components/VideoListVideo";
export default {
  components: { VideoListVideo },
  computed: {
    ...mapGetters(["getTag"]),
    ...mapState(["videos"]),
    tag() {
      return this.getTag(this.$route.params.id);
    },
    videosOnTag() {
      return this.videos.filter((v) =>
        this.tag.video_ids.includes(v.id.toString())
      );
    },
  },
};
</script>
