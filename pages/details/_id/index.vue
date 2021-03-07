<template>
  <div class="details-page">
    <NuxtLink custom v-slot="{ navigate }" to="/">
      <v-btn color="accent" class="my-2" @click="navigate" role="link"> &larr; Back</v-btn>
    </NuxtLink>
    <section>
      <character-details
        :id="character.id"
        :name="character.name"
        :description="character.description"
        :img-path="`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`"
      />
    </section>

    <section v-if="events.length > 0">
      <h2 class="display-1 mx-0">Events</h2>
      <v-spacer></v-spacer>
      <div class="grid">
        <event-card
          v-for="event of events"
          :key="event.id"
          :title="event.title"
          :description="event.description"
          :img-path="`${event.thumbnail.path}/standard_fantastic.${event.thumbnail.extension}`"
        />
      </div>
    </section>
  </div>
</template>

<script>
import MarvelService from '@/services/MarvelService';
import CharacterDetails from '@/components/CharacterDetails';
import EventCard from '@/components/EventCard';

export default {
  components: {
    CharacterDetails,
    EventCard,
  },
  async asyncData({ $axios, params, $config }) {
    const eventsData = await new MarvelService($axios, $config).fetchData(
      `/characters/${params.id}/events`
    );
    const characterData = await new MarvelService($axios, $config).fetchData(
      `/characters/${params.id}`
    );
    return { character: characterData.results[0], events: eventsData.results, params };
  },
};
</script>

<style lang="scss" scoped>
.details-page {
  h2 {
    margin: 15px;
  }
}
</style>
