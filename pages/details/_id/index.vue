<template>
  <div>
    <section>
      <character-details
        :id="character.id"
        :name="character.name"
        :description="character.description"
        :img-path="`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`"
      />
    </section>

    <section>
      <div class="grid">
        <event-card
          v-for="event of events"
          :key="event.id"
          :title="event.title"
          :description="event.description"
          :img-path="`${event.thumbnail.path}/portrait_medium.${event.thumbnail.extension}`"
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
    return { character: characterData.results[0], events: eventsData.results };
  },
};
</script>

<style></style>
