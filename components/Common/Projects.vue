<template>
    <div class="featured position-relative">
        <img :src="round_01" alt="Ornaments" class="position-absolute featured__ornament1 d-none d-xxl-block float" width="20" height="20"/>
        <img :src="plus_01" alt="Ornaments" class="position-absolute featured__ornament2 d-none d-xxl-block bounce" width="20" height="20"/>
        <img :src="plus_02" alt="Ornaments" class="position-absolute featured__ornament3 d-none d-xxl-block pulse" width="20" height="20"/>                
        <img :src="ornament_4" alt="Ornaments" class="position-absolute featured__ornament4 d-none d-xxl-block float" width="97" height="74"/>
        <img :src="round_02" alt="Ornaments" class="position-absolute featured__ornament5 d-none d-xxl-block float" width="15" height="15"/>
        <img :src="plus_03" alt="Ornaments" class="position-absolute featured__ornament6 d-none d-xxl-block pulse" width="20" height="20"/>     
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <subheadline
                        title="Featured"
                        titleStyle="Projects"
                        :ornaments="subheaderFontStyle"
                    ></subheadline>
                    <h4>We make the people and interface interaction more intensive and exciting.</h4>
                </div>
            </div>             
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="featured__project">
                        <div v-for="(project,i) in projects" :key="i" class="row">
                            <div class="col-lg-6">
                                <h4>{{ project.category }}</h4>
                                <h5>{{ project.description }}</h5>
                                <NuxtLink :to="project.link" class="btn-link">
                                    <div class="d-flex align-items-center">
                                        View Project<img :src="view_project" alt="Arrow" width="16" height="16">
                                    </div>
                                </NuxtLink>                                                                
                            </div>
                            <div class="col-lg-6">
                                <img :src="project.image" :alt="project.alt" class="img-fluid" :width="project.width" :height="project.height"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-0 gx-lg-5">
                <div v-for="(subproject,i) in subprojects" :key="i" class="col-lg-6">
                    <div class="featured__project">
                        <div class="row">
                            <div class="col-lg-12">
                                <h4>{{ subproject.category }}</h4>
                                <h5>{{ subproject.description }}</h5>
                                <NuxtLink :to="subproject.link" class="btn-link">
                                    <div class="d-flex align-items-center">
                                        View Project<img :src="view_project" alt="Arrow" width="16" height="16">
                                    </div>
                                </NuxtLink>                                
                                <img :src="subproject.image" :alt="subproject.alt" class="img-fluid float-end" :width="subproject.width" :height="subproject.height"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="featured__project--view text-center">
                        <NuxtLink to="/projects" class="btn-white-no-icon">
                            <div class="d-flex align-items-center">
                                View All Projects
                            </div>
                        </NuxtLink>                        
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>

import viewProject from '~/assets/svg/read-more.svg';
import round01 from '~/assets/svg/round01.svg';
import round02 from '~/assets/svg/round02.svg';
import plus01 from '~/assets/svg/plus-small.svg';
import plus02 from '~/assets/svg/plus-small.svg';
import plus03 from '~/assets/svg/plus-orange.svg';
import ornament4 from '~/assets/svg/ornament-4.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

import smartproperty from '~/assets/svg/smart-property.svg';
import threefold from '~/assets/svg/threefold.svg';
import pactfi from '~/assets/svg/pactfi.svg';
import toads from '~/assets/svg/toads.svg';
import legacylock from '~/assets/svg/legacy-lock.svg';

export default {
    name: 'Projects',
    components: {     
        "subheadline": () => import("@/components/Common/Subheadline"),
    },    
    data() {
        return {
            
            view_project: viewProject,
            round_01: round01,
            plus_01: plus01,
            plus_02: plus02,
            plus_03: plus03,
            ornament_4: ornament4, 
            round_02: round02,
            subheaderFontStyle,
            projects: [
                {
                    category: 'Web Design & Development',
                    description: 'Smart Property',
                    link: '/smart-property',
                    image: smartproperty,
                    alt: 'Smart Property',
                    width: 595,
                    height: 374
                }
            ],
            subprojects: [
                {
                    category: 'Web Design & Development',
                    description: 'Thr3efold',
                    link: '/threefold',
                    image: threefold,
                    alt: 'Thr3efold',
                    width: 508,
                    height: 319                    
                },
                {
                    category: 'Web Design & Development',
                    description: 'PactFi',
                    link: '/pactfi',
                    image: pactfi,
                    alt: 'Pactfi',
                    width: 508,
                    height: 319
                },
                {
                    category: 'Web Design & Development',
                    description: 'Toads',
                    link: '/toads',
                    image: toads,
                    alt: 'Toads',
                    width: 508,
                    height: 319
                },
                {
                    category: 'Web & Mobile Application',
                    description: 'Legacy Lock',
                    link: '/legacy-lock',
                    image: legacylock,
                    alt: 'Legacy Lock',
                    width: 508,
                    height: 319
                }                                                                
            ]           
        }
    }
}
</script>