<template>
  <div>
    <video width="400" controls>
      <source :src="video.url" />
      Your browser does not support HTML video.
    </video>
    <br />
    <span
      class="tag-button"
      v-for="(tag_id, index) in video.tag_ids"
      :key="index"
    >
      <router-link :to="{ name: 'tag', params: { id: tag_id } }">
        <button>{{ getTag(tag_id).name }}</button>
      </router-link>
    </span>
    <h1>{{ video.name }}</h1>
    <div v-html="video.description"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTag"]),
    video() {
      return this.$store.state.videos.find(
        (vid) => vid.id == this.$route.params.id
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 50%;
}
</style>

<style lang="scss">
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
