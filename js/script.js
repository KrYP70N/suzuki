/*
 * icon font class
 * name : icon_font
 * constructor : name, path [for svg file]
 * method :
 * render (render/update svg font)
 * data (basic information for svg font)
 */
var _a;
var ICON_FONT = /** @class */ (function () {
    function ICON_FONT(data) {
        this.data = data;
    }
    ICON_FONT.prototype.render = function () {
        this.data.map(function (item) {
            fetch(item.path)
                .then(function (res) { return res.text(); })
                .then(function (data) {
                var renderItemList = document.querySelectorAll("span.ico-".concat(item.name));
                renderItemList.forEach(function (item) {
                    item.innerHTML = data;
                });
            });
        });
    };
    return ICON_FONT;
}());
var font = new ICON_FONT([
    {
        name: 'globe',
        path: './assets/img/suzuki-myanmar-global-icon.svg',
    },
    {
        name: 'search',
        path: './assets/img/suzuki-myanmar-search-icon.svg'
    },
    {
        name: 'stack',
        path: './assets/img/suzuki-myanmar-drawer-icon.svg'
    }
]).render();
/*
 * PC header
 */
var searchEle = document.querySelector('.search--pc');
if (searchEle) {
    var searchOpen_1 = searchEle.querySelector('a');
    var searchClose = document.querySelector('.search__close');
    searchClose === null || searchClose === void 0 ? void 0 : searchClose.addEventListener('click', function () { return searchEle.classList.remove('active'); });
    setTimeout(function () {
        var initSearchWidth = searchEle.offsetWidth;
        searchEle.setAttribute('style', "width: ".concat(initSearchWidth, "px"));
        searchOpen_1 === null || searchOpen_1 === void 0 ? void 0 : searchOpen_1.addEventListener('click', function (e) {
            e.preventDefault();
            searchEle.classList.add('active');
        });
    }, 500);
}
// header adjustment with screen
document.body.style.paddingTop = ((_a = document.querySelector('header')) === null || _a === void 0 ? void 0 : _a.offsetHeight) + 'px';
// model
var headerModel = document.querySelector('.nav-list .car-model');
if (headerModel) {
    var modelContainer = headerModel.querySelectorAll('.car-model');
    modelContainer.forEach(function (item) {
        var ele = item;
        ele.style.width = window.innerWidth - (headerModel.offsetLeft * 2) + 'px';
    });
}
// sub nav
var subNav = document.querySelectorAll('.sublink');
subNav.forEach(function (item) {
    var _a, _b, _c, _d;
    var ele = item;
    ele.style.transform = "translateX(".concat(((_d = (_c = (_b = (_a = ele.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.x) || 1, "px)");
});
// sc-animate
var scrollanimate = document.querySelectorAll('.scroll-animate');
var _loop_1 = function (i) {
    var ele = scrollanimate[i];
    var scrollTop = ele.offsetTop - 150;
    if (scrollTop < window.scrollY) {
        ele.querySelectorAll('.item').forEach(function (list) {
            list.classList.add('active');
        });
    }
    else {
        ele.querySelectorAll('.item').forEach(function (list) {
            list.classList.remove('active');
        });
    }
    window.addEventListener('scroll', function (e) {
        if (scrollTop < window.scrollY) {
            ele.querySelectorAll('.item').forEach(function (list) {
                list.classList.add('active');
            });
        }
        else {
            ele.querySelectorAll('.item').forEach(function (list) {
                list.classList.remove('active');
            });
        }
    });
};
for (var i = 0; i < scrollanimate.length; i++) {
    _loop_1(i);
}
