<template>
    <div class="ourservices">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6 col-xl-4 col-xxl-4 g-4 " v-for="service in ourservices" :key="service.id">
                    <div class="ourservices__services--block text-center">
                        <h4>{{ service.name }}</h4>
                        <span class="ourservices__services--icon">
                            <img :src="service.image" :alt="service.alt" class="d-block mx-auto img-fluid">
                            <img :src="service.imagehover" :alt="service.alt" class="d-block mx-auto img-fluid">                                    
                        </span>
                        <p>{{ service.content }}</p>
                        <div class="ourservices__services--btn">
                            <NuxtLink :to="service.link" class="btn-white">
                                <div class="d-flex align-items-center">
                                    Continue reading
                                    <span class="ourservices__services--read">
                                        <img :src="read_more" alt="Read more">
                                        <img :src="read_more_hover" alt="Read more">
                                    </span>
                                </div>
                            </NuxtLink>                                
                        </div>                                
                    </div>
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

export default {
    name: 'Services',
    data() {
        return {
            read_more: readMore,
            read_more_hover: readMoreHover,
            plus_01: plus01,
            plus_02: plus02,
            ourservices: [
                {
                    name: 'Offshore Team',
                    image: offShoreTeam,
                    imagehover: offShoreTeamHover,
                    alt: 'Offshore Team',
                    content: 'Access top talent, reduce operational costs, increase efficiency, and focus on core business priorities.',
                    link: '/offshore-team'
                },
                {
                    name: 'Design & Development',
                    image: designDevelopment,
                    imagehover: designDevelopmentHover,
                    alt: 'Design & Development',
                    content: 'A talented group of professionals who are dedicated to creating visually stunning, user-centric, and impactful designs.',
                    link: '/design-development'
                },
                {
                    name: 'Software Development',
                    image: softwareDevelopment,
                    imagehover: softwareDevelopmentHover,
                    alt: 'Software Development',
                    content: 'Committed to delivering high-quality, innovative software solutions that drive your business forward.',
                    link: '/software-development'
                },
                {
                    name: 'Mobile Application',
                    image: mobileApplication,
                    imagehover: mobileApplicationHover,
                    alt: 'Mobile Application',
                    content: 'Deep understanding of mobile app development frameworks, programming languages, and industry best practices.',
                    link: '/mobile-application'
                },
                {
                    name: 'DevOps',
                    image: devOps,
                    imagehover: devOpsHover,
                    alt: 'DevOps',
                    content:'Streamline your software development processes, improve collaboration, enhance efficiency, and drive business value.',
                    link: '/devops'
                },
                {
                    name: 'Digital Marketing',
                    image: digitalMarketing,
                    imagehover: digitalMarketingHover,
                    alt: 'Design & Development',
                    content: 'Driving your online presence, increasing brand visibility, and achieving your marketing goals.',
                    link: '/digital-marketing'
                }                                                                            
            ]                        
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';
.ourservices {
    @include padding(100px,0px,100px,0px);
    &__services {
        margin-top: 65px;
        &--block {
            background: #F5F9FE;
            border: 1px solid rgba(66, 133, 244, 0.5);
            border-radius: 8px;
            @include padding(40px,20px,40px,20px);
            transition: all 0.2s ease;
            position: relative;
            min-height: 400px;
            height: 400px;           
            h4 {
                @include font($base-font,$heading-5,$font-weight-3,26px);
                color: $black-1000;
                letter-spacing: 0.01em;
            }
            img {
                @include margin(24px,0px,24px,0px);
            }
            p {
                @include font($base-font,$base-font-size,$font-weight-1,$line-height-5);
                color: $black-900;
                margin-bottom: 0;
            }
            &:hover {
                border: 1px solid rgb(219 219 219 / 50%);
                background: linear-gradient(93.59deg, #E6FAF5 -12.1%, #FAF3E6 110.31%) !important;
                transition: all 0.2s ease;
                cursor: pointer;
                .ourservices__services--read {
                    img:first-child {
                        display: none;
                    }
                    img:last-child {
                        display: block;
                    }
                }
                .ourservices__services--icon {
                    img:first-child {
                        display: none !important;
                    }
                    img:last-child {
                        display: block !important;
                    }
                }
                .btn-white {
                    color: $white-100;
                    background-color: $secondary-11;                    
                }
            }
        }
        &--icon {
            img:last-child {
                display: none !important;
            }
        }
        &--btn {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 35px;
            .btn-white {
                @include font($base-font,$base-font-size,$font-weight-2,20px);
                text-decoration: none;        
            }                       
        }
        &--read {
            img:last-child {
                display: none;
            }
        }
    }       
}

// Media Queries

$max-width: 767px;

@media (max-width: $max-width) {
    .ourservices {
        @include padding(35px,0px,35px,0px);
    }
}

</style>

