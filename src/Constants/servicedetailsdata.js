import { bannerInformationServicesDetails } from "./bannerinformation";
import { banner_3 } from "../assets/images";

export const servicedetailsdata = {
    
    solar_installation: {

        hero_banner: {
            ...bannerInformationServicesDetails,
            imageSrc: banner_3,
            title: 'Solar Installation',
            currentLink: 'Solar Installation',
        },

        service_details: {
            title: `Harness the Power of the Sun`,
            title_content: 'At Trinitwin, we specialize in providing tailored solar energy solutions that help you lower electricity costs while promoting a cleaner, greener environment. Whether for your home or business, our expert team ensures that you enjoy reliable, renewable energy designed to meet your unique needs.',
            service_highlights: [
                {
                    id: 'collapseExample',
                    number: '01',
                    highlight_title: 'Solar Panel Installation: Solar Panel',
                    highlight_subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni excepturi veritatis distinctio expedita quibusdam voluptatibus. Quis voluptas voluptates vel consequatur?',
                    content: [
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni excepturi veritatis distinctio expedita quibusdam voluptatibus. Quis voluptas voluptates vel consequatur?',
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni excepturi veritatis distinctio expedita quibusdam voluptatibus. Quis voluptas voluptates vel consequatur?'
                    ]
                },
                {
                    id: 'collapseExample2',
                    number: '02',
                    highlight_title: 'Solar Panel Installation: Solar Paneka',
                    highlight_subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni excepturi veritatis distinctio expedita quibusdam voluptatibus. Quis voluptas voluptates vel consequatur?',
                    content: [
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni excepturi veritatis distinctio expedita quibusdam voluptatibus. Quis voluptas voluptates vel consequatur?',
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni excepturi veritatis distinctio expedita quibusdam voluptatibus. Quis voluptas voluptates vel consequatur?'
                    ]
                },
            ],
        

        }

    },
};
