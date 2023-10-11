<template>
    <div class="whychoose">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <subheadline
                        title="Why Choose"
                        titleStyle="OpenSoftTech"
                        :ornaments="subheaderFontStyle"
                    ></subheadline>
                    <h3>Our team comprises multidisciplinary digital product experts: experienced product managers, designers, developers, business analysts, UI/ UX Designers and marketing experts.</h3>                   
                    <div class="row">
                        <div v-for="(reason,i) in reasons" :key="i" class="col-lg-6 col-md-6">
                            <div class="whychoose__reason">
                                <div class="d-flex align-items-baseline">
                                    <div class="flex-shrink-0">
                                        <img :src="reason.image" :alt="reason.alt" :width="reason.width" :height="reason.height"/>
                                    </div>
                                    <div class="whychoose__reason--content flex-grow-1">
                                        <h4>{{ reason.title }}</h4>
                                        <p>{{ reason.description }}</p>
                                    </div>
                                </div>                            
                            </div>                        
                        </div>
                    </div>                     
                </div>
                <div class="col-lg-2 offset-lg-1">
                    <div class="whychoose__statistics">
                        <div v-for="(statistic,i) in statistics" :key="i" class="whychoose__statistics--info">
                            <div>{{ statistic.number }}</div>
                            <h3>{{ statistic.info }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>          
    </div>
</template>

<script>

import business_centered_approach from '~/assets/svg/business-centered-approach.svg';
import strong_marketing_tools from '~/assets/svg/strong-marketing-tools.svg';
import close_communication from '~/assets/svg/close-communication.svg';
import meeting_the_deadlines from '~/assets/svg/meeting-the-deadlines.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'WhyChoose',
    components: {
        "subheadline": () => import("@/components/Common/Subheadline"),
    },    
    data() {
        return {
            subheaderFontStyle,
            reasons: [
                {
                    title: 'Business-centered Approach',
                    description: 'Our project approach is entirely based on the client’s requirements. We follow a proper project management process, mainly scrum development, to meet the client\'s expectations and give them a proper business solution.',
                    image: business_centered_approach,
                    alt: 'Business Centered Approach',
                    width: 50,
                    height: 50
                },
                {
                    title: 'Experienced Tech Team',
                    description: 'Our experienced tech team can help businesses stay competitive and thrive in today\'s technology-driven world.',
                    image: strong_marketing_tools,
                    alt: 'Strong Marketing Tools',
                    width: 50,
                    height: 52                    
                },
                {
                    title: 'Close Communication',
                    description: 'Good communication ensures that everyone is on the same page and understands their role in achieving business goals.',
                    image: close_communication,
                    alt: 'Close Communication',
                    width: 50,
                    height: 45                    
                },
                {
                    title: 'Meeting Deadline',
                    description: 'Meeting deadlines is a sign of reliability and professionalism, which can help businesses build a positive reputation among clients and customers.',
                    image: meeting_the_deadlines,
                    alt: 'Meeting the Deadlines',
                    width: 50,
                    height: 50                    
                }                                                   
            ],
            statistics: [
                {
                    number: '50',
                    info: 'Team experts'
                },
                {
                    number: '$10M+',
                    info: 'Startup clients raised'
                },
                {
                    number: '10 years',
                    info: 'of experience'
                }
            ]
        }
    }
}

</script>