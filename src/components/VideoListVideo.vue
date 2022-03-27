<template>
  <v-card
    width="400"
    height="400"
    class="ma-2"
    :to="{ name: 'video-watch', params: { id: video.id } }"
  >
    <v-img :src="video.thumbnail" />
    <v-card-title>{{ video.name }}</v-card-title>
    <v-card-text>
      <div class="green" v-if="isPlayed">
        <font-awesome-icon icon="check" />
        Played
      </div>
    </v-card-text>
    <v-card-actions>
      <span v-for="(tag_id, index) in video.tag_ids" :key="index">
        <v-btn
          color="success"
          @mousedown.stop
          :to="{ name: 'tag', params: { id: tag_id } }"
        >
          {{ getTag(tag_id).name }}
        </v-btn>
      </span>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  props: ["video"],
  computed: {
    ...mapGetters(["getTag"]),
    ...mapState(["playedVideos"]),
    isPlayed() {
      for (const element of this.playedVideos)
        if (element == this.video.id) return true;
      return false;
    },
  },
};
</script>
