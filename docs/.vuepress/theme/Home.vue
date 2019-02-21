<template>
  <div class="home">
    <div class="hero">
      <img v-if="data.heroImage"
           :src="$withBase(data.heroImage)"
           alt="hero">

      <h3>{{ data.heroText || $title || 'Hello' }}</h3>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p class="action"
         v-if="data.actionText && data.actionLink">
        <NavLink class="action-button"
                 :item="actionLink" />
      </p>
    </div>

    <div class="features"
         v-if="data.features && data.features.length">
      <div class="feature"
           v-for="(feature, index) in data.features"
           :key="index">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content custom />

    <div class="foot">
      <div class="links"
           v-if="data.links">
        <div class="link"
             v-for="link in data.links">
          <a :href="link.url"
             target="_blank"
             v-if="link.link==='Github'"
             class="icon-github"></a>
          <a :href="link.url"
             target="_blank"
             v-if="link.link==='Weibo'"
             class="icon-sina-weibo"></a>

          <a :href="'mailto:'+link.url"
             v-if="link.link==='Email'"
             class="icon-email"></a>
          <a :href="'mailto:'+link.url"
             v-if="link.link==='Google'"
             class="icon-google-plus"></a>
          <a :href="link.url"
             target="_blank"
             v-if="link.link==='Facebook'"
             class="icon-facebook"></a>
          <a :href="link.url"
             target="_blank"
             v-if="link.link==='Twitter'"
             class="icon-twitter"></a>
        </div>
      </div>
      <div class="footer"
           v-if="data.footer">
        {{ data.footer }}
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl';

.home {
  padding: $navbarHeight 2rem 0;
  max-width: 960px;
  margin: 0px auto;

  .hero {
    text-align: center;

    img {
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 2rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.2rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: lighten($accentColor, 30%);
      padding: 0.5rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid $accentColor;

      &:hover {
        background-color: lighten($accentColor, 50%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .foot {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);

    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.2rem;

      .link {
        margin-right: 0.8rem;
      }

      a {
        color: #f5f5f5;
        cursor: pointer;
        font-size: 1.2rem;

        &:hover {
          text-shadow: 0 0 20px #f5f5f5;
          // color: darken(#f5f5f5, 10%);
        }
      }
    }

    .footer {
      font-size: 0.8rem;
      color: #f5f5f5;
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.5rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
