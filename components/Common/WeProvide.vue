<template>
    <div class="weprovide position-relative">
        <img :src="plus_01" alt="Ornaments" class="position-absolute weprovide__ornament1 d-none d-xxl-block pulse" width="30" height="30"/>
        <img :src="plus_02" alt="Ornaments" class="position-absolute weprovide__ornament2 d-none d-lg-block bounce" width="20" height="20"/>
        <img :src="round_01" alt="Ornaments" class="position-absolute weprovide__ornament3 d-none d-xxl-block float" width="20" height="20"/>
        <img :src="ornament_4" alt="Ornaments" class="position-absolute weprovide__ornament4 d-none d-lg-block float" width="97" height="74"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <subheadline
                        title="What We"
                        titleStyle="Provide"
                        :ornaments="subheaderFontStyle"
                    ></subheadline>
                    <h3>We offer a range of services that can be tailored to meet the specific needs of our clients. Some of the most common services provided by our company include:</h3>
                </div>
            </div>
            <div class="weprovide__services">
                <div class="row">   
                    <client-only>
                        <ul class="controls" id="customize-controls" aria-label="Carousel Navigation" tabindex="0">
                            <li class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">
                                <img src="~/assets/svg/testimonial-left.svg" alt="Prev">
                            </li>
                            <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">
                                <img src="~/assets/svg/testimonial-right.svg" alt="Next">   
                            </li>
                        </ul>                        
                        <vue-tiny-slider v-bind="tinySliderOptions">
                            <div class="col-lg-3" v-for="service in services" :key="service.id">
                                <div class="weprovide__services--block text-center">
                                    <h4>{{ service.name }}</h4> 
                                    <span class="weprovide__services--icon">
                                        <img :src="service.image" :alt="service.alt" class="d-block mx-auto img-fluid" :width="service.width" :height="service.height"/>
                                        <img :src="service.imagehover" :alt="service.alt" class="d-block mx-auto img-fluid" :width="service.width" :height="service.height"/>                                    
                                    </span>
                                    <p>{{ service.content }}</p>   
                                    <div class="weprovide__services--btn">
                                        <NuxtLink :to="service.link" class="btn-white">
                                            <div class="d-flex align-items-center">
                                                Continue reading
                                                <span class="weprovide__services--read">
                                                    <img :src="read_more" alt="Read more" width="16" height="16"/>
                                                    <img :src="read_more_hover" alt="Read more" width="16" height="16"/>
                                                </span>
                                            </div>
                                        </NuxtLink>                                
                                    </div>                                
                                </div>
                            </div>
                        </vue-tiny-slider> 
                    </client-only>         
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import offShoreTeam from '~/assets/svg/offshore-team.svg';
import offShoreTeamHover from '~/assets/svg/offshore-team-hover.svg';
import softwareDevelopment from '~/assets/svg/software-development.svg';
import softwareDevelopmentHover from '~/assets/svg/software-development-hover.svg';
import designDevelopment from '~/assets/svg/design-development.svg';
import designDevelopmentHover from '~/assets/svg/design-development-hover.svg';
import mobileApplication from '~/assets/svg/mobile-application.svg';
import mobileApplicationHover from '~/assets/svg/mobile-application-hover.svg';
import devOps from '~/assets/svg/dev-ops.svg';
import devOpsHover from '~/assets/svg/dev-ops-hover.svg';
import digitalMarketing from '~/assets/svg/digital-marketing.svg';
import digitalMarketingHover from '~/assets/svg/digital-marketing-hover.svg';
import readMore from '~/assets/svg/read-more.svg';
import readMoreHover from '~/assets/svg/read-more-hover.svg';
import plus01 from '~/assets/svg/plus-big.svg';
import plus02 from '~/assets/svg/plus-small.svg';
import round01 from '~/assets/svg/round01.svg';
import ornament4 from '~/assets/svg/ornament-4.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'WhatWeProvide',   
    components: {     
        "subheadline": () => import("@/components/Common/Subheadline"),
    },
    data() {
        return {  
            tinySliderOptions: {
            mouseDrag: true,
            loop: true,
            items: 4,
            gutter: 20,
            controlsContainer: "#customize-controls",
            navPosition: "bottom",
            responsive: {
                1199: {
                    gutter: 20,
                    items: 4,
                    nav: false,
                    controls: true
                },
                991: {
                    gutter: 20,
                    items: 3,
                    nav: false,
                    controls: true                    
                },
                768: {
                    gutter: 20,
                    items: 2,
                    nav: false,
                    controls: true
                },
                320: {
                    edgePadding: 15,
                    gutter: 20,
                    items: 1,
                    nav: true,
                    controls: false
                }                
            }
        },                       
            read_more: readMore,
            read_more_hover: readMoreHover,
            plus_01: plus01,
            plus_02: plus02,
            round_01: round01,
            ornament_4: ornament4,
            subheaderFontStyle,

            services: [
                {
                    name: 'Offshore Team',
                    image: offShoreTeam,
                    imagehover: offShoreTeamHover,
                    alt: 'Offshore Team',
                    content: 'Building your tech team is just one click away.',
                    link: '/offshore-team',
                    width: 80,
                    height: 80
                },
                {
                    name: 'Design & Development',
                    image: designDevelopment,
                    imagehover: designDevelopmentHover,
                    alt: 'Design & Development',
                    content: 'Experienced UI/UX designer who can create aesthetic mockups.',
                    link: '/design-development',
                    width: 80,
                    height: 80
                },
                {
                    name: 'Software Development',
                    image: softwareDevelopment,
                    imagehover: softwareDevelopmentHover,
                    alt: 'Software Development',
                    content: 'World-class tech team where various types of stacks are available.',
                    link: '/software-development',
                    width: 80,
                    height: 80
                },
                {
                    name: 'Mobile Application',
                    image: mobileApplication,
                    imagehover: mobileApplicationHover,
                    alt: 'Mobile Application',
                    content: 'Experienced Flutter & React Native developers can help scale your business.',
                    link: '/mobile-application',
                    width: 80,
                    height: 80
                }, 
                {
                    name: 'DevOps',
                    image: devOps,
                    imagehover: devOpsHover,
                    alt: 'DevOps',
                    content: 'End-to-end DevOps services for better IT performance and continuous output!',
                    link: '/devops',
                    width: 80,
                    height: 80
                },
                {
                    name: 'Digital Marketing',
                    image: digitalMarketing,
                    imagehover: digitalMarketingHover,
                    alt: 'Digital Marketing',
                    content: 'High-quality web marketing options to help businesses increase online visibility.',
                    link: '/digital-marketing',
                    width: 80,
                    height: 80
                },                                                                                   
            ]
        }
    }
}
</script>

<style>
.weprovide .controls {
    z-index: 5;
    list-style: none;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    top: 50%;
    transform: translatey(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;    
}
.weprovide .controls li.prev {
    position: absolute;
    left: -20px;
    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(16, 24, 40, 0.06);
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 24px; 
    cursor: pointer;   
}
.weprovide .controls li.next {
    position: absolute;
    right: -20px;
    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(16, 24, 40, 0.06);
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 24px;   
    cursor: pointer;  
}
.weprovide .tns-nav {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -40px;
}
.weprovide .tns-nav button {
    padding: 4px;
    border-radius: 4px;
    background: #AAAAB3;
    margin-right: 12px;
    border: transparent;
}
.weprovide .tns-nav-active {
    background: #4583E6 !important;
}
</style>