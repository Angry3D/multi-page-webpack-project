import './index.less'
import $ from 'jquery'

$(function () {
    const { pathname } = location
    if (pathname == '/' || pathname == '/index.html') {
        $('.tab-item.home').addClass('active')
    } else if (pathname == '/about.html') {
        $('.tab-item.about').addClass('active')
    }
})
