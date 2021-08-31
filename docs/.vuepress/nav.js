module.exports = [ //导航栏
    {
        text: '首页',
        link: '/'
    },
    {
        text: '前端',
        items: [
            {
                text: 'HTML-CSS',
                link: '/html-css/'
            },
            {
                text: 'javascript',
                link: '/javascript/'
            },
            {
                text: 'Vue.js',
                link: '/vue/'
            }
        ]
    },
    {
        text: '后端',
        items: [
            {
                text: 'Java',
                link: '/java/'
            },
            {
                text: 'Node.js',
                link: '/node/'
            },
            {
                text: 'Linux',
                link: '/other/linux'
            },
            {
                text: '运维',
                link: '/other/'
            }
        ]
    },
    {
        text: '周围技术',
    //     ariLabel: '/network/',
        items: [ //多级导航栏
            {
                text: '算法篇',
                link: '/alg/'
            },
            {
                text: '网络篇',
                link: '/network/'
            }
        ]
    },
    {
        text: 'Github',
        link: 'https://github.com/elgar17'
    },
]