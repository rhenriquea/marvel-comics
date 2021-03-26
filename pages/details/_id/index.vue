<template>
  <div class="details-page">
    <section>
      <character-details
        :id="character.id"
        :name="character.name"
        :description="character.description"
        :stories="character.stories"
        :comics="character.comics"
        :events="character.events"
        :img-path="`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`"
      />
    </section>

    <section class="lists" v-if="events.length > 0">
      <scrollable-row title="Events" :list="events">
        <template v-slot="props">
          <img
            :src="`${props.item.thumbnail.path}/portrait_uncanny.${props.item.thumbnail.extension}`"
            :alt="props.item.title"
            @click="showEventInfo(props.item)"
          />
        </template>
      </scrollable-row>
    </section>

    <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay">
      <div class="overlay d-md-flex" v-if="selectedEvent">
        <div class="overlay--cover" :style="overlayCover"></div>
        <div class="overlay--content">
          <h2>{{ selectedEvent.title }}</h2>
          <time class="blue-grey--text text-caption text--lighten-2">
            {{ convertDate(selectedEvent.start) }} - {{ convertDate(selectedEvent.end) }}
          </time>
          <p class="text-body-2 ma-0 font-weight-light">{{ selectedEvent.description }}</p>
          <v-chip-group column>
            <chip title="Characters" :count="selectedEvent.characters.available" />
            <chip title="Comics" :count="selectedEvent.comics.available" />
            <chip title="Creators" :count="selectedEvent.creators.available" />
            <chip title="Series" :count="selectedEvent.series.available" />
            <chip title="Stories" :count="selectedEvent.stories.available" />
          </v-chip-group>
          <div class="d-flex flex-row-reverse mt-5">
            <v-btn outlined color="white lighten-2 " @click="closeEventInfo"> Close </v-btn>
          </div>
        </div>
      </div>
    </v-overlay>
  </div>
</template>

<script>
import MarvelService from '@/services/MarvelService';
import CharacterDetails from '@/components/CharacterDetails';
import ScrollableRow from '@/components/ScrollableRow';
import Chip from '@/components/Chip';
import EventCard from '@/components/EventCard';
import { mapGetters } from 'vuex';

export default {
  components: {
    Chip,
    CharacterDetails,
    ScrollableRow,
    EventCard,
  },
  async asyncData({ $axios, params, $config }) {
    const characterData = await new MarvelService($axios, $config).fetchData(
      `/characters/${params.id}`
    );

    let events = [];
    const character = characterData.results[0];

    if (character.events.available > 0) {
      const { results } = await new MarvelService($axios, $config).fetchData(
        `/characters/${params.id}/events`
      );
      events = results;
    }

    return { character, events };
  },
  data: () => ({
    absolute: true,
    opacity: 0.8,
    overlay: false,
    selectedEvent: null,
  }),
  computed: {
    ...mapGetters(['loading']),
    overlayCover() {
      return {
        backgroundImage:
          'linear-gradient(75deg, rgba(171,195,221,0.5508578431372548) 10%, rgba(34,33,32,.98) 85%),url(' +
          `${this.selectedEvent.thumbnail.path}/portrait_uncanny.${this.selectedEvent.thumbnail.extension}` +
          ')',
      };
    },
  },
  methods: {
    showEventInfo(event) {
      this.selectedEvent = event;
      console.log(this.selectedEvent);
      this.overlay = true;
    },
    closeEventInfo() {
      this.overlay = false;
      this.selectedEvent = null;
    },
    convertDate(date) {
      const arr = date.slice(0, 10).split('-');
      return `${arr[2]}/${arr[1]}/${arr[0]}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.details-page {
  h2 {
    margin: 15px;
  }

  .overlay {
    background: #222120;
    border-radius: 16px;
    box-shadow: 1px 0 8px 0 #444;
    color: #fff;
    margin: 0 20vw;

    &--content {
      padding: 15px;
      h2 {
        font-weight: 600;
        margin: 0;
        text-transform: uppercase;
      }
    }

    &--cover {
      background-position: center;
      background-size: cover;
      border-radius: 15px 0 0 15px;
      margin-right: -8px;
      width: 100%;
    }
  }
}
</style>
