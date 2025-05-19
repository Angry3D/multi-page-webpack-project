import './index.less'
import $ from 'jquery'

$(function () {
    const { pathname } = location
    if (pathname.endsWith('/') || pathname.endsWith('/index.html')) {
        $('.tab-item.home').addClass('active')
    } else if (pathname.endsWith('/about.html')) {
        $('.tab-item.about').addClass('active')
    }
})
