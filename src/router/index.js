import Vue from 'vue'
import Router from 'vue-router'
import Plain from '../components/_verPlain'
import SingleFileComponents from '../components/_verSingleFileComponents'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/plain',
            name: 'PomodoroPlain',
            component: Plain
        },
        {
            path: '/singlefile',
            name: 'ShoppingListSingleFileComponents',
            component: SingleFileComponents
        },
        {
            path: '/',
            name: 'Homepage',
            component: SingleFileComponents
        }
    ]
})
