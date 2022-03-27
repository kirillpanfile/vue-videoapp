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
        <div class="green" v-if="isPlayed">
          <font-awesome-icon icon="check" />
          Played
        </div>
        <div class="green" v-else>
          <v-btn size="x-small" @click="markPlayed()">Mark as played</v-btn>
        </div>
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
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTag"]),
    ...mapState(["playedVideos", "videos"]),
    video() {
      return this.videos.find((vid) => vid.id == this.$route.params.id);
    },
    isPlayed() {
      for (const element of this.playedVideos)
        if (element == this.video.id) return true;
      return false;
    },
  },
  methods: {
    markPlayed() {
      this.$store.dispatch("markPlayed", this.video.id);
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
.green {
  color: green;
}
</style>
