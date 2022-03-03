<template>
  <div class="home">
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="(video, index) in videos" :key="index">
        <router-link :to="{ name: 'video-watch', params: { id: video.id } }">
          <div class="video-box">
            <img :src="video.attributes.thumbnail" />
            <div>
              <h3>{{ video.attributes.name }}</h3>
              <div v-html="video.attributes.description"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../services/api";
export default {
  name: "Home",
  components: {},
  methods: {
    async loadVideos() {
      let response = await Api().get("/videos");
      this.videos = await response.data.data;
    },
  },
  mounted() {
    this.loadVideos();
  },
  data() {
    return {
      videos: [],
    };
  },
};
</script>

<style scoped lang="scss">
.video-container {
  .video-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    img {
      width: 200px;
      padding: 10px;
    }
  }
}
</style>
