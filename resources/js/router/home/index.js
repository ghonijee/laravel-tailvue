function page (path) {
    return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
    {
        path:"/",
        component: page('home/index.vue'),
        // meta: {
        //     middleware: log,
        // },
    }
]