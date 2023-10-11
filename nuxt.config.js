
export default async () => {
  return {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // Target: https://go.nuxtjs.dev/config-target

    render: {
      static: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
    },    

    // 404 fallback
    generate: {
      fallback: true
    }, 
      
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      titleTemplate: '%s',
      title: 'Bitsware',
      htmlAttrs: {
        lang: 'en-US'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],      
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        },      
      ]
    },

    // Google Fonts: https://google-fonts.nuxtjs.org/
    googleFonts: {
      display: 'swap',
      families: {
        Jost: {
          wght: [400,500,600,700]
        }
      }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '~/assets/scss/style.scss',
      '~/assets/css/tiny-slider.css',
      'bootstrap/dist/css/bootstrap.min.css'
    ],

    script: [
      {
        src: 'bootstrap/dist/js/bootstrap.bundle.min.js',
        type: 'text/javascript'
      }
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      { src: '~/plugins/v-lightbox.js', ssr: false },
      { src: '~/plugins/vue-tiny-slider.js', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      '@nuxt/postcss8',
      '@nuxtjs/google-fonts',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/sitemap',
      '@nuxtjs/robots'
    ],

    robots: {
      UserAgent: "*",
      Disallow: "/_nuxt/",
      Sitemap: "https://bitsware.org/sitemap.xml"
    },

    sitemap: {
      hostname: 'https://bitsware.org',
      gzip: true,
    },
    
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },
    
    env: {
      projectUrl: 'https://www.bitsware.org/'
    },    
  }
}
