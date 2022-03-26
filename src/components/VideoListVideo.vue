<template>
  <v-card
    width="400"
    height="400"
    class="ma-2"
    :to="{ name: 'video-watch', params: { id: video.id } }"
  >
    <v-img :src="video.thumbnail" />
    <v-card-title>{{ video.name }}</v-card-title>
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTag"]),
  },
  props: ["video"],
};
</script>
