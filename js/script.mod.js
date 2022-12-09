// search
const pcSearch = document.querySelector('.search-pc')
const pcSearchIcn = pcSearch.querySelector('.search')
const pcSearchClose = pcSearch.querySelector('.search-close')
const initSearchWidth = pcSearch.offsetWidth + 'px'
let pcSearchState = false
pcSearch.style.width = initSearchWidth

const calcSearch = () => {
  pcSearch.classList.toggle('search-open')
  pcSearchState = !pcSearchState
  pcSearch.style.width = pcSearchState ? pcSearch.querySelector('form').offsetWidth + 'px' : initSearchWidth
}

pcSearchIcn.addEventListener('click', calcSearch)

pcSearchClose.addEventListener('click', calcSearch)

// header mega adjustment
const megamenu = document.querySelectorAll('.mega-menu')
megamenu.forEach(item => {
  item.querySelector('.content').style.marginLeft = item.parentElement.querySelector('a').offsetLeft + 'px'
})

// hover active
const primarymenu = document.querySelectorAll('nav.pc .primary > li')
primarymenu.forEach(item => {
  item.addEventListener('mouseenter', _ => {
    item.classList.add('active')
    document.querySelector('.backdrop').classList.add('active')
  })
  item.addEventListener('mouseleave', _ => {
    item.classList.remove('active')
    document.querySelector('.backdrop').classList.remove('active')
  })
})

// mobile search
const mobileSearch = document.querySelector('nav.mb .search')
const mobileSearchContainer = document.querySelector('.mb.search')
const mobileSearchClose = document.querySelector('.mb.search .close-search')
mobileSearch.addEventListener('click', _ => mobileSearchContainer.classList.toggle('active'))
mobileSearchClose.addEventListener('click', _ => mobileSearchContainer.classList.toggle('active'))

// mobile menu
const main = document.querySelector('main')
const accIcon = document.querySelector('.accordion-menu')
const accDrawer = document.querySelector('.mb.acc-drawer')
const closeAccord = document.querySelector('.close-accordion')
const navMb = document.querySelector('nav.mb')
main.style.paddingTop = document.querySelector('header').offsetHeight + 'px'
accDrawer.style.paddingTop = document.querySelector('header').offsetHeight + 'px'
const accordFun = _ => {
  if (!document.body.classList.toString().includes('open')) {
    window.currentScroll = window.scrollY
  }
  accDrawer.classList.toggle('active')
  navMb.classList.toggle('open-accord')
  document.body.classList.toggle('open')
  if (!document.body.classList.toString().includes('open')) {
    window.scrollTo(0, window.currentScroll)
  }
}
accIcon.addEventListener('click', accordFun)
closeAccord.addEventListener('click', accordFun)

// fullwh
if (window.innerWidth > 991) {
  document.querySelectorAll('.full-wh').forEach(item => {
    item.style.height = (window.innerHeight - document.querySelector('header').offsetHeight) + 'px'
  })
}

// home model carousel
$('.home-model-slider ul').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    },
  ]
})

// home news text splitting
const textSplitting = (count = 80) => {
  const homeNewTitles = document.querySelectorAll('.home-news .new-title')
  homeNewTitles.forEach(item => {
    let txt = item.innerHTML
    console.log(txt.length)
    if (txt.length > 80) {
      item.innerHTML = txt.slice(0, count) + '...'
    }
  })
}
if (window.innerWidth <= 1180 && window.innerWidth >= 992) textSplitting()

if (window.innerWidth <= 767) textSplitting()

if (window.innerWidth <= 600) textSplitting(30)

// animate 
let animate_nodes = document.querySelectorAll(".animate-trigger")
const animate_fun = _ => {
  animate_nodes.forEach(item => {
    item.setAttribute('offset', item.offsetTop)
    if (item.offsetTop <= window.scrollY + (Number(item.getAttribute('offset-range') || (window.innerHeight - 50)))) {
      item.classList.remove('animate-trigger')
    }
  })
}

animate_fun()

window.addEventListener('scroll', animate_fun)