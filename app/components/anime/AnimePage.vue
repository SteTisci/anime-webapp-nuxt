<script setup lang="ts">
const props = defineProps<{ data: Anime }>()

const animeInfo = {
  author: props.data.author,
  releaseYear: props.data.releaseYear,
  status: props.data.status!.charAt(0) + props.data.status!.slice(1).toLowerCase(),
  lang: props.data.lang!.charAt(0) + props.data.lang!.slice(1).toLowerCase(),
  type: props.data.type,
  numberOfEpisodes: props.data.numberOfEpisodes ? props.data.numberOfEpisodes : '??',
  rating: props.data.rating,
}
</script>

<template>
  <div class="content">
    <AnimePageBanner :banner-image="props.data.bannerImage" :title="props.data.title" />

    <div class="info-wrapper">
      <div class="thumbnail">
        <img :src="props.data.thumbnail" :alt="props.data.title + 'thumbnail'" />
      </div>

      <div class="info">
        <div class="info-top">
          <h1>{{ props.data.title }}</h1>
          <p>{{ props.data.description }}</p>
        </div>

        <div class="info-bottom">
          <AnimePageItem v-for="(value, key) in animeInfo" :key="key" :name="key" :value="value" />
        </div>
      </div>
    </div>

    <div class="bottom-wrapper">
      <AnimePageTags :tags="props.data.tags" />
      <AnimePageEpisodes :number-of-episodes="props.data.episodes?.length!" />
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  width: 100%;
}

.info-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 40px 0 30px;
  cursor: default;
}

.thumbnail,
.info-top,
.info-bottom {
  background-color: #262626;
  padding: 20px;
  border-radius: 3px;
  line-height: normal;
  color: #ffffff;
}

.thumbnail {
  margin-right: 10px;
  height: 310px;
}

.thumbnail img {
  width: 180px;
  height: 270px;
  border-radius: 3px;
}

.info-top,
.info-bottom {
  width: 960px;
}

.info-top {
  margin-bottom: 10px;
  height: 220px;
}

.info-top h1 {
  margin-bottom: 20px;
  font-size: 2.3rem;
}

.info-top p {
  text-wrap: wrap;
  font-size: 0.95rem;
  overflow: hidden;
}

.info-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.bottom-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin-bottom: 40px;
}
</style>
