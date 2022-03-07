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
      <button>{{ getTag(tag_id).name }}</button>
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
