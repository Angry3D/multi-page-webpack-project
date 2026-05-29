import './index.less'

const navItems = [
    {
        selector: '.tab-item.home',
        isActive: (pathname) => pathname.endsWith('/') || pathname.endsWith('/index.html')
    },
    {
        selector: '.tab-item.about',
        isActive: (pathname) => pathname.endsWith('/about.html')
    }
]

function setActiveTab(selector) {
    const element = document.querySelector(selector)

    if (!element) {
        return
    }

    element.classList.add('active')
    element.setAttribute('aria-current', 'page')
}

function setCurrentNavItem() {
    const { pathname } = location
    const currentItem = navItems.find((item) => item.isActive(pathname))

    if (currentItem) {
        setActiveTab(currentItem.selector)
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setCurrentNavItem)
} else {
    setCurrentNavItem()
}
