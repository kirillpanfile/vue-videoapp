<template>
  <div>
    <video width="400" controls>
      <source ref="videoRef" />
      Your browser does not support HTML video.
    </video>

    <h1>{{ video.name }}</h1>
    <div v-html="video.description"></div>
  </div>
</template>
<script>
export default {
  computed: {
    video() {
      return this.$store.state.videos.find(
        (vid) => vid.id == this.$route.params.id
      );
    },
  },
  mounted: function () {
    this.$refs.videoRef.src = this.video.videoUrl;
  },
};
</script>

<style scoped>
img {
  max-width: 50%;
}
</style>
