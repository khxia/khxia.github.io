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
        name: 'Is It Wrong to Try to Pick Up Girls in a Dungeon?',
        otherNames: 'ダンジョンに出会いを求めるのは間違っているだろうか?',
        links: 'https://myanimelist.net/manga/56743/Dungeon_ni_Deai_wo_Motomeru_no_wa_Machigatteiru_Darou_ka',
        tags: 'Action, Adventure, Comedy, Romance, Fantasy',
    },
    {
        name: 'Haikyuu!!',
        otherNames: 'ハイキュー!!',
        links: 'https://myanimelist.net/anime/20583/Haikyuu',
        tags: 'Comedy, Sports, Drama, School, Shounen',
    },
    {
        name: 'Fate Zero',
        otherNames: 'フェイト/ゼロ',
        links: 'https://myanimelist.net/anime/10087/Fate_Zero',
        tags: 'Action, Supernatural, Magic, Fantasy',
    },
    {
        name: 'The Disastrous Life of Saiki K.',
        otherNames: '斉木楠雄のΨ難',
        links: 'https://myanimelist.net/anime/33255/Saiki_Kusuo_no_%CE%A8-nan',
        tags: 'Comedy, School, Shounen, Slice of Life, Supernatural',
    },
    {
        name: 'My youth romantic comedy is wrong as I expected.',
        otherNames: 'やはり俺の青春ラブコメはまちがっている',
        links: 'https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru',
        tags: 'Slice of Life, Comedy, Drama, Romance, School',
    },
    {
        name: 'Demon Slayer: Kimetsu no Yaiba',
        otherNames: '鬼滅の刃',
        links: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
        tags: 'Action, Demons, Historical, Shounen, Supernatural',
    },
    {
        name: 'Sword Art Online',
        otherNames: 'ソードアート・オンライン',
        links: 'https://myanimelist.net/anime/11757/Sword_Art_Online',
        tags: 'Action, Game, Adventure, Romance, Fantasy',
    },
    {
        name: 'Your Lie in April',
        otherNames: '四月は君の嘘',
        links: 'https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso',
        tags: 'Drama, Music, Romance, School, Shounen',
    },
    {
        name: 'Psycho-Pass',
        otherNames: 'サイコパス',
        links: 'https://myanimelist.net/anime/13601/Psycho-Pass',
        tags: 'Action, Sci-Fi, Police, Psychological',
    },
    {
        name: 'The Saga of Tanya the Evil',
        otherNames: '幼女戦記',
        links: 'https://myanimelist.net/anime/32615/Youjo_Senki',
        tags: 'Action, Military, Magic',
    },
];