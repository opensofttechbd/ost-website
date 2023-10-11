<template>
  <section>
    <Nav />
    <header-inner
      headline="Frequently Asked "
      headlineStyle="Questions"
      :ornaments="headlineFontStyle"
      subheadline="Below you will find answers to the questions we get asked the most!"
    ></header-inner>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 lg-offset-1 mx-auto">
          <div class="accordion__block">
            <vsa-list>
              <vsa-item v-for="item in accordionItems" :key="item.id">
                <vsa-heading>
                  {{ item.title }}
                </vsa-heading>

                <vsa-icon>
                  <span class="open">
                    <img :src="plusIcon" alt="Plus">
                  </span>
                  <span class="close">
                    <img :src="minusIcon" alt="Minus">
                  </span>
                </vsa-icon>

                <vsa-content>
                  {{ item.value }}
                </vsa-content>
              </vsa-item>
            </vsa-list>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Nav from "~/components/Nav";
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon,
} from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";
import Footer from "~/components/Footer";

import headlineFontStyle from "~/assets/svg/contact-ornament.svg";
import plusIcon from "~/assets/svg/plus.svg";
import minusIcon from "~/assets/svg/minus.svg";

export default {
  name: "FAQ",
  components: {
    Nav,
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
    Footer,
    "header-inner": () => import("@/components/Common/HeaderInner"),
  },
  data() {
    return {
      headlineFontStyle,
      plusIcon,
      minusIcon,
      accordionItems: [
        {
          title: "What is the meaning of web hosting?",
          value:
            "Web hosting is an online service that makes your websites content accessible on the internet. When you purchase a hosting plan, you are renting space on a physical server to store all the websites files and data.",
        },
        {
          title: "How do I register domain name?",
          value:
            "You can register a domain name from any of the top domain registrars that are authorized by ICANN to register domain names.",
        },
        {
          title: "What after-sales service do you offer?",
          value:
            "We fully support any website we develop or design and are always available whenever you encounter any problems or require new enhancements. Bitsware also offers website maintenance and quality assurance.",
        },
        {
          title: "Do you guarantee that my site will always be available?",
          value:
            "Bitsware web development service has been up 100% of the time since we started. We have the necessary backups in place to deal with the issue quickly whenever our servers have any problems in the future.",
        },
        {
          title: "Do you redesign existing websites?",
          value:
            "Yes. We can redesign existing sites and retain your organization's style or give you a completely new look. Bitsware also can provide a free website evaluation. We will show you how your site can take advantage of the latest Web technologies.",
        },
        {
          title: "Why should I choose Bitsware for my website?",
          value:
            "Bitsware is an established web development company that has been delivering projects at all levels of complexity to clients across the United States. Our clients range from small businesses to large enterprises. We have developed a sophisticated style and a deep understanding of website requirements since our founding. So you should choose Bitsware for your website.",
        },
      ],
    };
  },
};
</script>