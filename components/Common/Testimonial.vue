<template>
    <div class="testimonial">
        <div class="container">
            <div class="row">
                <div class="testimonial__slider">
                    <client-only>
                        <ul class="controls" id="testimonial-customize-controls" aria-label="Carousel Navigation" tabindex="0">
                            <li class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">
                                <img src="~/assets/svg/testimonial-left.svg" alt="Prev">
                            </li>
                            <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">
                                <img src="~/assets/svg/testimonial-right.svg" alt="Next">   
                            </li>
                        </ul>                
                        <vue-tiny-slider v-bind="tinySliderOptions">
                            <div class="col-lg-12" v-for="testimonial in testimonials" :key="testimonial.id">
                                <div class="testimonial__block mx-auto">
                                    <div class="testimonial__block--inner">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <img :src="testimonial.personImg" :alt="testimonial.personAlt" width="113" height="110"/>
                                            </li>
                                            <li class="mt-5">
                                                <img :src="testimonial.companyImg" :alt="testimonial.companyAlt" width="109" height="30"/>
                                            </li>
                                        </ul>
                                        <ul class="list-unstyled testimonial__content">
                                            <li>
                                                <div class="testimonial__quote">
                                                    <img :src="quote_left" alt="Quote" width="49" height="48">
                                                </div>
                                                <p>"{{ testimonial.testimonialText }}"</p>
                                                <div class="testimonial__author mt-5">
                                                    <div class="testimonial__author--name">
                                                        &mdash; {{ testimonial.authorName }}
                                                    </div>
                                                    <div class="testimonial__author--company ms-2">
                                                        {{ testimonial.authorPosition }}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>                       
                                </div>                        
                            </div>                    
                        </vue-tiny-slider>                    
                    </client-only>                    
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial__company">
                        <span v-for="(logo,i) in logos" :key="i">
                            <img :src="logo.img" :alt="logo.alt" :width="logo.width" :height="logo.height">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import logo01 from '~/assets/images/fox-hub.png';
import logo02 from '~/assets/images/aven.png';
import logo03 from '~/assets/images/circle.png';
import logo04 from '~/assets/images/code-lab.png';
import logo05 from '~/assets/images/earth-2.png';
import quote from '~/assets/svg/quote.svg';

import testimonial01 from '~/assets/images/testimonial-01.png';
import companyimg01 from '~/assets/images/circle-2.png';

export default {
    name: 'Testimonial',
    data() {
        return {
            quote_left: quote,
            tinySliderOptions: {
            mouseDrag: true,
            loop: true,
            items: 1,
            gutter: 0,
            controlsContainer: "#testimonial-customize-controls",
            navPosition: "bottom",
            responsive: {
                768: {
                    gutter: 0,
                    items: 1,
                    nav: false,
                    controls: true,
                    autoHeight: true
                },
                320: {
                    edgePadding: 0,
                    gutter: 0,
                    items: 1,
                    nav: true,
                    controls: false
                }                
            }
        },             
            testimonials: [
                {
                    personImg: testimonial01,
                    personAlt: "Jacob Jones",
                    companyImg: companyimg01,
                    companyAlt: "Circle-2",
                    testimonialText: "I am really satisfied with it. I'm good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    authorName: "Jacob Jones",
                    authorPosition: " CEO & Co-Founder"
                },
                {
                    personImg: testimonial01,
                    personAlt: "Jacob Jones",
                    companyImg: companyimg01,
                    companyAlt: "Circle-2",
                    testimonialText: "I am really satisfied with it. I'm good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    authorName: "Jacob Jones",
                    authorPosition: " CEO & Co-Founder"
                }                
            ],              
            logos: [
                {
                    img: logo01,
                    alt: 'Fox Hub',
                    width: 145,
                    height: 40
                },
                {
                    img: logo02,
                    alt: 'Aven',
                    width: 145,
                    height: 40                    
                },
                {
                    img: logo03,
                    alt: 'Circle',
                    width: 145,
                    height: 40                    
                },
                {
                    img: logo04,
                    alt: 'Code Lab',
                    width: 145,
                    height: 40                    
                },
                {
                    img: logo05,
                    alt: 'Earth',
                    width: 145,
                    height: 40                    
                }
            ]
        }
    }
}
</script>

<style>

.testimonial__slider .controls {
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
.testimonial__slider .controls li.prev {
    position: absolute;
    left: -10px;
    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(16, 24, 40, 0.06);
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 24px; 
    cursor: pointer;   
}
.testimonial__slider .controls li.next {
    position: absolute;
    right: -10px;
    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(16, 24, 40, 0.06);
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 24px;   
    cursor: pointer;  
}
.testimonial__slider .tns-nav {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -40px;
}
.testimonial__slider .tns-nav button {
    padding: 4px;
    border-radius: 4px;
    background: #AAAAB3;
    margin-right: 12px;
    border: transparent;
}
.testimonial__slider .tns-nav-active {
    background: #4583E6 !important;
}

</style>