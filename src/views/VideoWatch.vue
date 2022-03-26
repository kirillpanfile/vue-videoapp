<template>
  <v-container>
    <v-row>
      <v-col md="9" cols="12">
        <video width="600" controls>
          <source :src="video.url" />
          Your browser does not support HTML video.
        </video>
      </v-col>
      <v-col md="3" cols="12">
        <div class="display-1">{{ video.name }}</div>
        <div v-html="video.description"></div>
        <span v-for="tag_id in video.tag_ids" :key="tag_id">
          <v-btn
            :to="{ name: 'tag', params: { id: tag_id } }"
            color="green lighten-2"
            class="mr-1 mb-2"
          >
            {{ getTag(tag_id).name }}
          </v-btn>
        </span>
      </v-col>
    </v-row>
  </v-container>
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
