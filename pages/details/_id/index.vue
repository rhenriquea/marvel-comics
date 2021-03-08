<template>
  <div class="details-page">
    <v-btn href="/" text nuxt color="accent" class="my-2" role="link"> &larr; Back</v-btn>

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
      <v-row>
        <v-col xs="12" sm="3" v-for="event of events" :key="event.id">
          <event-card
            :title="event.title"
            :description="event.description"
            :img-path="`${event.thumbnail.path}/standard_fantastic.${event.thumbnail.extension}`"
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import MarvelService from '@/services/MarvelService';
import CharacterDetails from '@/components/CharacterDetails';
import EventCard from '@/components/EventCard';
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters(['loading']),
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
