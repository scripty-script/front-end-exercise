export default function handler(req, res) {
    res.status(200).json({
        overview, trending
    })
}

const overview = {
    title: 'Kimetsu no Yaiba',
    description: 'Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. ' +
        'It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.',
    category: 'Adventure fiction, Dark fantasy, Martial Arts',
    rating: '5.0'
}

const trending = [
    {
        title: 'Attack On Titan',
        description: 'When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks.'
            + ' But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers,'
            + ' causing a flood of the giants into what had been the human…',
        category: 'Adventure fiction, Dark fantasy, Martial Arts',
        rating: '5.0',
        img: 'http://localhost:3000/tw-1.png',
        episodes: [
            {
                no: 1,
                description: "The citizens worry they will be at the Titans' mercy after many years of peace.",
                thumbnail: 'http://localhost:3000/ep1-aot.png'
            },
            {
                no: 2,
                description: "The Shiganshina citizens are under attack from the Titans.",
                thumbnail: 'http://localhost:3000/ep2-aot.png'
            },
            {
                no: 3,
                description: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment."
                    + " Berholt and Reiner help Eren learn during training.",
                thumbnail: 'http://localhost:3000/ep3-aot.png'
            },
        ]
    },
    {
        title: 'Jujutsu Kaisen',
        description: 'Attackkkkkkkkk!!',
        category: 'Adventure fiction, Martial Arts',
        rating: '5.0',
        img: 'http://localhost:3000/tw-2.png'
    },
    {
        title: 'One Piece',
        description: 'Attackkkkkkkkk!!',
        category: 'Adventure fiction, Comedy, Family',
        rating: '5.0',
        img: 'http://localhost:3000/tw-3.png'
    }
]