import Selection from '@/models/selection';
import ImFeelingConfident from '@/assets/birth-plan-svgs/im-feeling-confident.vue';
import ImFeelingExcited from '@/assets/birth-plan-svgs/im-feeling-excited.vue';
import ImFeelingScared from '@/assets/birth-plan-svgs/im-feeling-scared.vue';
import ImFeelingAnxious from '@/assets/birth-plan-svgs/im-feeling-anxious.vue';
import HomeBirth from '@/assets/birth-plan-svgs/home-birth.vue';
import HospitalBirth from '@/assets/birth-plan-svgs/hospital-birth.vue';



export const lookup = {
    feelings: {
        question: 'How do you feel about the birth?',
    selections: [
        new Selection({
            name: 'confident',
            image: ImFeelingConfident,
            description: 'I\'m feeling confident about the birth',
        }),
        new Selection({
            name: 'excited',
            image: ImFeelingExcited,
            description: 'I\'m feeling excited about the birth',
        }),
        new Selection({
            name: 'scared',
            image: ImFeelingScared,
            description: 'I\'m feeling scared about the birth',
        }),
        new Selection({
            name: 'anxious',
            image: ImFeelingAnxious,
            description: 'I\'m feeling anxious about the birth',
        }),
    ]},
    where: {
        question: 'Where do you want to give birth?',
        selections: [
        new Selection({
            name: 'home birth',
            image: HomeBirth,
            description: 'I want to give birth at home',
        }),
        new Selection({
            name: 'hospital birth',
            image: HospitalBirth,
            description: 'I want to give birth in a hospital',
        }),
    ]},
};
