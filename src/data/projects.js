// Project images - using real user-provided assets
import softSpaVideo from '../assets/projects/3d/SoftSpa_Unboxing_2.mp4';
import superflapperVideo from '../assets/projects/3d/FM_SuperFlapper_Explode_2024_ANI.mp4';
import abandonedLake from '../assets/projects/3d/Abandoned Lake-1_Edit.jpg';
import superflapper from '../assets/projects/packaging/SuperFlapper_PlasticUpdate_090924.jpg';
import superflapperKit from '../assets/projects/packaging/SuperFlapperKit_PlasticUpdate_090924.jpg';
import sidelineBanterApp from '../assets/projects/digital/Side Line Banter Mock app_edited.jpg';
import philanthropyStickers from '../assets/projects/digital/Philanthropy Stickers_edited.jpg';
import philTshirt from '../assets/projects/digital/phil tshirt mock_edited.jpg';
import badHabitsCard from '../assets/projects/digital/Bad Habits Card.jpg';

// Soft Spa images
import softSpaBidet from '../assets/projects/3d/soft-spa-bidet.jpg';
import softSpaStyleSheet1 from '../assets/projects/digital/SoftSpa-StyleSheet-1-01.png';
import softSpaStyleSheet2 from '../assets/projects/digital/SoftSpa-StyleSheet-1-02.png';
import softSpaStyleSheet3 from '../assets/projects/digital/SoftSpa-StyleSheet-1-03.png';
import softSpaFabric1 from '../assets/projects/3d/SoftSpaFabric_Ani-IS0253.jpg';
import softSpaFabric2 from '../assets/projects/3d/SoftSpa_Ani_IS0597.jpg';
import softSpaFabric3 from '../assets/projects/3d/SoftSpa_Ani_IS0864.jpg';
import softSpaFabric4 from '../assets/projects/3d/SoftSpa_Ani_IS1360.jpg';

// 3D Environment images
import alienObjectHero from '../assets/projects/3d/alien-object/hero.png';
import cubeHero from '../assets/projects/3d/cube/hero.png';
import cubeRender1 from '../assets/projects/3d/cube/render-1.png';
import swordHero from '../assets/projects/3d/sword-in-stone/hero.png';
import swordRender1 from '../assets/projects/3d/sword-in-stone/render-1.png';
import swordRender2 from '../assets/projects/3d/sword-in-stone/render-2.png';
import swordRender3 from '../assets/projects/3d/sword-in-stone/render-3.png';
import triangleHallway from '../assets/projects/3d/triangle-hallway/TriangleHall.jpg';
import cubeAnimation from '../assets/projects/3d/cube/Cube_Animation.mp4';
import alienObjectAnimation from '../assets/projects/3d/alien-object/Alien_Object.mp4';
import triangleHallwayAnimation from '../assets/projects/3d/triangle-hallway/TriangleHall.mp4';

// Bad Habits Wine images
import badHabitsMock from '../assets/projects/digital/Bad_Habits_BrandBook.jpg';

// Branding Collection images
import brunoParadigmEdited from '../assets/projects/digital/Bruno Paradigm Mockup_edited.jpg';
import brunoParadigm from '../assets/projects/digital/Bruno Paradigm Mockup_edited.jpg';
import oasisMock from '../assets/projects/digital/Oasis digital mock.png';
import sidelineBanterCover from '../assets/projects/digital/SideLineBanter_BrandBook_Cover.jpg';
import sidelineBanterMock from '../assets/projects/digital/SideLineBanter_BrandBook.jpg';
import sidelineBanterPhone from '../assets/projects/digital/SideLineBanter_LogoPhone.jpg';

export const projects = [
    {
        id: 'soft-spa-rebrand',
        category: '3d',
        title: "Soft Spa Rebrand",
        description: "A complete rebrand and promotional campaign for the Soft Spa Bidet, centering on a high-impact unboxing video and visual identity overhaul.",
        projectDetails: "The Soft Spa Bidet required a comprehensive rebrand to elevate its market presence. This project encompassed a complete visual identity update and the creation of a promotional unboxing video designed to clearly demonstrate value and drive sales.",
        goals: "Establish a premium brand identity and increase product sales through engaging, high-fidelity video content and cohesive visual assets.",
        role: "Led the rebrand strategy and production. Created the visual identity, style guides, and produced the promotional video from concept to final edit. The rebrand contributed to an ~1800% increase in monthly sales.",
        image: softSpaBidet,
        mainVideo: softSpaVideo,
        previewVideo: softSpaVideo,
        gallery: [
            [softSpaStyleSheet1, softSpaStyleSheet2, softSpaStyleSheet3], // Carousel for style sheets
            softSpaBidet,
            softSpaFabric1,
            softSpaFabric2,
            softSpaFabric3,
            softSpaFabric4
        ],
        featured: true
    },
    {
        id: 'super-flapper-3d',
        category: 'packaging',
        title: "Super Flapper Packaging",
        description: "A photorealistic 3D product render showcasing the Supper Flapper 2/3\" universal fill valve.",
        projectDetails: "This project focused on creating high-fidelity 3D assets for marketing and technical documentation. The Super Flapper is a critical plumbing component, and the goal was to represent it with absolute precision to assist both consumers and installers.",
        goals: "Capture realistic plastic textures, complex reflections, and precise lighting to match professional studio photography.",
        role: "Utilized advanced 3D software to create realistic packaging visualizations, high-quality product renders, and dynamic animations.",
        image: superflapper,
        video: superflapperVideo,
        videoTitle: "3D Animation",
        gallery: [superflapper, superflapperKit],
        featured: true
    },
    {
        id: '3d-environment-work',
        category: '3d',
        title: "3D Environment Work",
        description: "A collection of 3D environment studies, experiments, and atmospheric designs.",
        projectDetails: "This collection showcases various environment studies exploring lighting, texture, and mood. From the abandoned tranquility of a lakeside scene to abstract alien landscapes and architectural studies, these projects demonstrate a range of 3D environmental design skills.",
        goals: "To push the boundaries of atmospheric rendering, material creation, and composition within 3D spaces.",
        role: "Environment Artist. Responsible for all aspects of scene creation including modeling, texturing, lighting, and post-processing.",
        image: abandonedLake,
        gallery: [
            abandonedLake,
            alienObjectHero,
            cubeHero,
            cubeRender1,
            swordHero,
            swordRender1,
            swordRender2,
            swordRender3,
            triangleHallway
        ],
        featured: false
    },
    {
        id: 'bad-habits-wine',
        category: 'digital',
        title: "Bad Habits Wine Co",
        description: "Brand identity and packaging concept for a bold new wine company.",
        projectDetails: "Bad Habits Wine Co represents a break from tradition. The branding is designed to be bold, rebellious, and eye-catching, appealing to a younger demographic that values authenticity and fun over stuffy tradition.",
        goals: "Create a memorable brand identity that stands out on the shelf and communicates a sense of fun and rebellion.",
        role: "Designed the logo, color palette, and packaging concepts.",
        image: badHabitsCard,
        gallery: [
            badHabitsCard,
            badHabitsMock
        ],
        featured: true
    },
    {
        id: 'branding-collection',
        category: 'digital',
        title: "Branding Collection",
        description: "A selection of brand identity projects including Bruno Paradigm, Oasis, and Sideline Banter.",
        projectDetails: "This collection features various branding and identity projects. 'Bruno Paradigm' explores modern minimalist aesthetics. 'Oasis' focuses on refreshing and vibrant visual language. 'Sideline Banter' creates a dynamic sports-oriented identity.",
        goals: "To create distinct and effective visual identities for diverse clients and industries.",
        role: "Lead Designer for all brand identities.",
        image: brunoParadigmEdited,
        gallery: [
            brunoParadigmEdited,
            brunoParadigm,
            oasisMock,
            sidelineBanterCover,
            sidelineBanterApp,
            sidelineBanterMock,
            sidelineBanterPhone
        ],
        featured: false
    }
];

// Masonry Background Assets
// Easy to update: just add/remove items from this array
// Mix of images and videos for dynamic background effect
export const masonryAssets = [
    // 3D Animation Videos
    { src: cubeAnimation, type: 'video' },
    { src: alienObjectAnimation, type: 'video' },
    { src: triangleHallwayAnimation, type: 'video' },

    // Images - 3D Work
    { src: softSpaBidet, type: 'image' },
    { src: abandonedLake, type: 'image' },
    { src: superflapper, type: 'image' },
    { src: superflapperKit, type: 'image' },
    { src: swordHero, type: 'image' },

    // Images - Digital/Branding
    { src: brunoParadigmEdited, type: 'image' },
    { src: badHabitsCard, type: 'image' },
    { src: oasisMock, type: 'image' },
    { src: sidelineBanterCover, type: 'image' },
    { src: sidelineBanterApp, type: 'image' },
    { src: philanthropyStickers, type: 'image' },
    { src: philTshirt, type: 'image' },

    // Soft Spa Style Sheets
    { src: softSpaStyleSheet1, type: 'image' },
    { src: softSpaStyleSheet2, type: 'image' },
    { src: softSpaStyleSheet3, type: 'image' },
];

