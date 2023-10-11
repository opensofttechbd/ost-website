<template>
    <div class="technology">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <subheadline
                        title="Technology"
                        titleStyle="Experts"
                        :ornaments="subheaderFontStyle"
                        extraTitle="In"
                    ></subheadline>
                    <h3 class="mx-auto">We are technology experts, which means we employ professionals with extensive knowledge and experience in a particular field of technology.</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="technology__block">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="technology__block--inner">
                                    <span v-for="(technology,i) in technologies" :key="i">
                                        <img :src="technology.image" :alt="technology.alt" :width="technology.width" :height="technology.height">
                                    </span>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

import figma from '~/assets/svg/figma.svg';
import nodejs from '~/assets/svg/nodejs.svg';
import python from '~/assets/svg/python.svg';
import php from '~/assets/svg/php.svg';
import angular from '~/assets/svg/angular.svg';
import devops from '~/assets/svg/devops.svg';
import aws from '~/assets/svg/aws.svg';
import vuejs from '~/assets/svg/vuejs.svg';
import react from '~/assets/svg/react.svg';
import flutter from '~/assets/svg/flutter.svg';
import laravel from '~/assets/svg/laravel.svg';
import googlecloud from '~/assets/svg/google-cloud.svg';
import elastic from '~/assets/svg/elastic-search.svg';
import mongodb from '~/assets/svg/mongo-db.svg';
import svelte from '~/assets/svg/svelte.svg';

export default {
    name: 'Technology',
    components: {
        "subheadline": () => import("@/components/Common/Subheadline"),
    },    
    data() {
        return {
            subheaderFontStyle,
            technologies: [
                {
                    image: figma,
                    alt: 'Figma',
                    width: 196,
                    height: 202
                },
                {
                    image: nodejs,
                    alt: 'Node Js',
                    width: 196,
                    height: 202
                },
                {
                    image: python,
                    alt: 'Python',
                    width: 196,
                    height: 202
                },
                {
                    image: php,
                    alt: 'PHP',
                    width: 196,
                    height: 202
                },
                {
                    image: angular,
                    alt: 'Angular',
                    width: 196,
                    height: 202
                },
                {
                    image: devops,
                    alt: 'DevIos',
                    width: 196,
                    height: 202
                },
                {
                    image: aws,
                    alt: 'Amazon Web Service',
                    width: 196,
                    height: 202
                },
                {
                    image: vuejs,
                    alt: 'Vue Js',
                    width: 196,
                    height: 202
                },
                {
                    image: react,
                    alt: 'React',
                    width: 196,
                    height: 202
                },
                {
                    image: flutter,
                    alt: 'Flutter',
                    width: 196,
                    height: 202
                },
                {
                    image: laravel,
                    alt: 'Laravel',
                    width: 196,
                    height: 202
                }
                ,
                {
                    image: googlecloud,
                    alt: 'Google Cloud',
                    width: 196,
                    height: 202
                },
                {
                    image: elastic,
                    alt: 'Elastic Search',
                    width: 196,
                    height: 202
                },
                {
                    image: mongodb,
                    alt: 'Mongo DB',
                    width: 196,
                    height: 202
                },
                {
                    image: svelte,
                    alt: 'Svelte',
                    width: 196,
                    height: 202
                }                
            ]
        }
    }
}
</script>