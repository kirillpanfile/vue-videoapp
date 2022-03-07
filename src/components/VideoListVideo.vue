<template>
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
          <router-link :to="{ name: 'tag', params: { id: tag_id } }">
            <button>{{ getTag(tag_id).name }}</button>
          </router-link>
        </span>
      </div>
    </div>
  </router-link>
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
