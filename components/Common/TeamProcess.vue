<template>
    <div class="team__process">
        <div class="container">
            <div class="team__process--block">
                <div class="row">
                    <div class="col-lg-12">
                        <h3>Our Team Building Process</h3>
                    </div>
                </div>                
                <div class="row">
                    <div v-for="(process,i) in processes" :key="i" class="col-lg-2 col-md-4 col-6 gy-4 gy-lg-0">
                        <div class="team__process--item">
                            <img :src="process.img" :alt="process.alt" class="d-block mx-auto img-fluid mb-4">
                            <h4 class="text-center">{{ process.title }}</h4>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>

import candidateAssessment from '~/assets/svg/candidate-assessment.svg';
import experienceAnalysis from '~/assets/svg/experience-analysis.svg';
import placement from '~/assets/svg/placement.svg';
import timezoneAdjustment from '~/assets/svg/timezone-adjustment.svg';
import communication from '~/assets/svg/communication.svg';
import socialActivity from '~/assets/svg/social-activity.svg';

export default {
    name: 'TeamProcess',
    data() {
        return {
            candidateAssessment: candidateAssessment,
            experienceAnalysis: experienceAnalysis,
            placement: placement,
            timezoneAdjustment: timezoneAdjustment,
            communication: communication,
            socialActivity: socialActivity,
            processes: [
                {
                    img: candidateAssessment,
                    title: 'Candidate Assessment',
                    alt: 'Candidate Assessment'
                },
                {
                    img: experienceAnalysis,
                    title: 'Experience Analysis',
                    alt: 'Experience Analysis'
                },
                {
                    img: placement,
                    title: 'Placement',
                    alt: 'Placement'
                },
                {
                    img: timezoneAdjustment,
                    title: 'Time Zone Adjustment',
                    alt: 'Time Zone Adjustment'
                },
                {
                    img: communication,
                    title: 'Communication',
                    alt: 'Communication'
                },
                {
                    img: socialActivity,
                    title: 'Social Activity',
                    alt: 'Social Activity'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/style.scss';

.team__process {
    @include padding(80px,0px,80px,0px);
    h3 {
        @include font($base-font,28px,$font-weight-2,39.2px);
        color: $black-900;
        margin-bottom: 40px;
    }
    &--block {
        @include padding(50px,30px,50px,30px);        
        background: linear-gradient(96deg, #E8FCF8 0%, #FAF0E6 100%);
        border-radius: 10px;        
    }
    &--item {
        h4 {
            @include font($base-font,$base-font-size,$font-weight-1,$line-height-6);
            color: $black-900;
            margin-bottom: 0px;
        }
    }
}

// Media Queries: 768px - 991px

$min-width-768: 768px;
$max-width-991: 991px;

@media (min-width: $min-width-768) and (max-width: $max-width-991) {
    .team__process {
        @include padding(70px,0px,0px,0px);
    }
}

// Media Queries

$max-width: 767px;

@media (max-width: $max-width) {
    .team__process {
        @include padding(35px,0px,0px,0px);
        h3 {
            @include font($base-font,24px,$font-weight-2,30px);      
            margin-bottom: 16px;      
        }
    }    
}

</style>