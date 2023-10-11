<template>
    <div class="team position-relative">
        <img :src="ornament_7" alt="Ornaments" class="position-absolute team__ornament1 d-none d-xxl-block" width="189" height="100"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <subheadline
                        title="Our Top Talent"
                        titleStyle="Tech Team"
                        :ornaments="subheaderFontStyle2"
                    ></subheadline>                    
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9">
                    <h3>Having a top-talent tech team can give your organization a significant competitive advantage, as they can drive innovation, streamline processes, and create cutting-edge solutions that meet your business needs.</h3>                       
                </div>
                <div class="col-lg-3">
                    <div class="team__view text-start text-lg-end">
                        <NuxtLink to="/about" class="btn-white-no-icon">
                            <div class="d-flex align-items-center">
                                View Full Team
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="team__block">
                <div class="row">
                    <div v-for="(team,i) in teams" :key="i" class="col-lg-3 col-md-6">
                        <div :class="team.teamClass" class="team__block--info mt-3">
                            <h4 class="text-center mb-1">{{ team.name }}</h4>
                            <h5 class="text-center mb-1">{{ team.position }}</h5>
                            <div class="team__block--social text-center">
                                <ul class="list-inline text-center">
                                    <li v-for="(social,i) in socials" :key="i" class="list-inline-item">
                                        <a :href="social.link" :aria-label="social.label" target="_blank"><i :class="[social.social,social.socialClass]"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="team__block--img">
                                <img :src="team.img" :alt="team.alt" class="d-block mx-auto img-fluid" :width="team.width" :height="team.height"/>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>

import subheaderFontStyle2 from '~/assets/svg/subheader-font-style2.svg';
import team01 from '~/assets/images/team01.png';
import team02 from '~/assets/images/team02.png';
import team03 from '~/assets/images/team03.png';
import team04 from '~/assets/images/team04.png';
import ornament7 from '~/assets/svg/ornament-7.svg';

export default {
    name: 'Team',
    components: {
        "subheadline": () => import("@/components/Common/Subheadline"),
    },
    data() {
        return {
            subheaderFontStyle2,
            ornament_7: ornament7,
            teams: [
                {
                    name: 'Alfonso George',
                    position: 'UI/UX Designer',
                    img: team01,
                    alt: 'Alfonso George',
                    teamClass: 'team__block--color1',
                    width: 225,
                    height: 225
                },
                {
                    name: 'Wilson Westervelt',
                    position: 'Senior Designer',
                    img: team02,
                    alt: 'Wilson Westervelt',
                    teamClass: 'team__block--color2',
                    width: 225,
                    height: 225
                },
                {
                    name: 'Kaylynn Herwitz',
                    position: 'Programmer',
                    img: team03,
                    alt: 'Kaylynn Herwitz',
                    teamClass: 'team__block--color3',
                    width: 225,
                    height: 225
                },
                {
                    name: 'Brandon Korsgaard',
                    position: 'Front-end Developer',
                    img: team04,
                    alt: 'Brandon Korsgaard',
                    teamClass: 'team__block--color4',
                    width: 225,
                    height: 225
                }                                                
            ],
            socials: [
                {
                    social: 'fa fa-facebook',
                    socialClass: 'facebook',
                    label: 'facebook',
                    link: '#'
                },
                {
                    social: 'fa fa-linkedin',
                    socialClass: 'linkedin',
                    label: 'linkedin',
                    link: '#'
                },
                {
                    social: 'fa fa-dribbble',
                    socialClass: 'dribbble',
                    label: 'dribble',
                    link: '#'
                },
                {
                    social: 'fa fa-twitter',
                    socialClass: 'twitter',
                    label: 'twitter',
                    link: '#'
                }
            ]
        }
    }
}
</script>