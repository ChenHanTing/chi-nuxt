import pkg from './package'

export default {
  mode: 'universal',
  router: {
    middleware: ['website']
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title'  , property: 'og:title', content: '心之所向' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      // { hid: 'og:url', property: 'og:url', content: 'https://chenhanting.github.io/'},
      // { hid: 'og:image' , property: 'og:image' , content: 'https://chenhanting.github.io/'},
      { hid: 'og:type' , property: 'og:type' , content: 'website'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/mixins/base.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/window-resize.js', mode: 'client' },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-fontawesome',
  ],
  redirect: [
    { from: '^/achievement/109y_10school.html', to: '/exhibitions' }
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  }
}
