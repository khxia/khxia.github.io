import React from 'react';

export const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Other Names',
        accessor: 'otherNames',
    },
    {
        filterable: 'false',
        Header: 'Links',
        accessor: 'links',
        Cell: e => <a href={e.value}>Link</a>,
    },
    {
        Header: 'Tags',
        accessor: 'tags',
    },
];

export const data = [
    {
        name: 'My Hero Academia',
        otherNames: '僕のヒーローアカデミア',
        links: 'https://bokunoheromanga.com',
        tags: 'Action, Comedy, School, Shounen, Super Power',
    },
    {
        name: 'Kaguya-sama: Love is War',
        otherNames: 'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
        links: 'https://guya.moe',
        tags: ' Comedy, Psychological, Romance, School, Seinen',
    },
    {
        name: 'Tokyo Ghoul',
        otherNames: '東京喰種-トーキョーグール-',
        links: 'https://tokyo-ghoul-new.com/',
        tags: 'Action, Mystery, Horror, Psychological, Supernatural, Drama, Seinen',
    },
    {
        name: 'Vinland Saga',
        otherNames: 'ヴィンランド・サガ',
        links: 'https://readvinlandsaga.com/',
        tags: 'Action, Adventure, Drama, Historical, Seinen',
    },
    {
        name: 'Hunter x Hunter',
        otherNames: 'HxH',
        links: 'https://hunterxhunter-manga.com/',
        tags: 'Action, Adventure, Fantasy, Shounen, Super Power',
    },
    {
        name: 'Food Wars! Shokugeki no Soma',
        otherNames: '食戟のソーマ',
        links: 'https://shokugeki-nosomamanga.com/manga',
        tags: 'Ecchi, School, Shounen',
    },
    {
        name: 'ReLIFE',
        otherNames: 'リライフ',
        links: 'https://relifemanga.com/',
        tags: ' Comedy, Drama, Romance, School, Slice of Life',
    },
    {
        name: 'Komi-san wa, Comyushou desu',
        otherNames: '古見さんは、コミュ症です',
        links: 'https://komi-san.com/',
        tags: 'Comedy, School, Shounen',
    },
    {
        name: 'Kumo desu ga, Nani ka?',
        otherNames: '蜘蛛ですが、なにか？',
        links: 'https://myanimelist.net/manga/95353/Kumo_desu_ga_Nani_ka',
        tags: 'Adventure, Comedy, Fantasy',
    },
    {
        name: 'Runway de Waratte',
        otherNames: 'ランウェイで笑って',
        links: 'https://myanimelist.net/manga/108696/Runway_de_Waratte',
        tags: 'Slice of Life, Drama, School, Shounen',
    },
];