<template>
  <div class="home">
    <h1>Videos</h1>
    <div class="video-container">
      <div v-for="(video, index) in videos" :key="index">
        <router-link :to="{ name: 'video-watch', params: { id: video.id } }">
          <div class="video-box">
            <img :src="video.thumbnail" />
            <div>
              <h3>{{ video.name }}</h3>
              <div v-html="video.description"></div>
              <span
                class="tag-button"
                v-for="(tag_id, index) in video.tag_ids"
                :key="index"
              >
                <button>{{ getTag(tag_id).name }}</button>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["videos", "tags"]),
    ...mapGetters(["getTag"]),
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
