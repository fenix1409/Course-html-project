// ICons part
const ArrowIcon = `<svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_832)"> <path d="M27.7071 15.2929L20.7069 8.29273C20.3163 7.90225 19.6832 7.90237 19.2927 8.29296C19.1052 8.48047 18.9999 8.73465 18.9999 8.99979V11.9998H11.9997C11.4474 11.9998 10.9997 12.4476 10.9997 12.9999C10.9997 13.5522 11.4474 13.9999 11.9997 13.9999H19.9999C20.5522 13.9999 21 13.5522 21 12.9999V11.4138L25.586 15.9999L21 20.586V18.9999C21 18.4476 20.5522 17.9999 19.9999 17.9999H8.99969V14.9998C8.99957 14.4475 8.55173 13.9999 7.99948 14C7.73439 14.0001 7.48015 14.1054 7.29265 14.2928L0.292568 21.293C-0.0978483 21.6835 -0.0978483 22.3165 0.292568 22.707L7.29271 29.7071C7.48021 29.8947 7.73451 30.0001 7.99971 30.0001C8.13114 30.0005 8.26139 29.9747 8.38269 29.9241C8.75629 29.7692 8.99981 29.4046 8.99969 29.0001V26H15.9998C16.5521 26 16.9999 25.5523 16.9999 25C16.9999 24.4477 16.5521 24 15.9998 24H7.99971C7.4474 24 6.99967 24.4477 6.99967 25V26.5861L2.41358 22L6.99967 17.4139V18.9999C6.99967 19.5522 7.4474 19.9999 7.99971 19.9999H18.9999V23C19 23.5523 19.4478 23.9999 20.0001 23.9998C20.2652 23.9997 20.5194 23.8944 20.7069 23.707L27.7071 16.7069C28.0974 16.3163 28.0974 15.6833 27.7071 15.2929Z" fill="#2B2B2B" /></g>
<circle cx="23.5" cy="7.5" r="7.5" fill="#00D254" /><path d="M21.4 9.3C21.4867 9.36667 21.6 9.45 21.74 9.55C21.88 9.65 22.1333 9.78333 22.5 9.95C22.8667 10.11 23.1933 10.19 23.48 10.19C23.8467 10.19 24.1567 10.1 24.41 9.92C24.67 9.74 24.8 9.48667 24.8 9.16C24.8 8.78 24.65 8.49333 24.35 8.3C24.05 8.1 23.6433 8 23.13 8L22.62 8L22.62 7.1L23.13 7.1C23.61 7.1 23.9767 6.99667 24.23 6.79C24.49 6.58333 24.62 6.30667 24.62 5.96C24.62 5.68667 24.51 5.48333 24.29 5.35C24.07 5.21 23.8 5.14 23.48 5.14C23.1867 5.14 22.8733 5.21667 22.54 5.37C22.2133 5.52333 21.96 5.67333 21.78 5.82L21.5 6.05L21.7 4.83C21.72 4.81 21.7467 4.78667 21.78 4.76C21.8133 4.72667 21.89 4.67333 22.01 4.6C22.13 4.52 22.2567 4.45 22.39 4.39C22.5233 4.33 22.6967 4.27667 22.91 4.23C23.13 4.18333 23.3533 4.16 23.58 4.16C24.2733 4.16 24.8167 4.32333 25.21 4.65C25.61 4.97 25.81 5.39 25.81 5.91C25.81 6.32333 25.6867 6.66 25.44 6.92C25.1933 7.17333 24.9267 7.35667 24.64 7.47C24.7733 7.50333 24.91 7.55667 25.05 7.63C25.19 7.70333 25.3333 7.80667 25.48 7.94C25.6333 8.06667 25.7567 8.24 25.85 8.46C25.9433 8.68 25.99 8.93 25.99 9.21C25.99 9.78333 25.7733 10.2533 25.34 10.62C24.9067 10.9867 24.32 11.1733 23.58 11.18C23.1667 11.1867 22.7767 11.1367 22.41 11.03C22.05 10.9233 21.7933 10.8133 21.64 10.7L21.4 10.54L21.4 9.3Z" fill="white" /><defs><clipPath id="clip0_1_832"><rect width="28" height="28" fill="white" transform="translate(0 5)" /></clipPath></defs></svg>`

const LupaIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`

const MenuIcon = `
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
`

const CloseIcon = `
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
`
// Header Section

// Header Section
const Header = () => {
    const list = [
        { id: 1, title: "Курсы", path: "./online-courses/courses.html" },
        { id: 2, title: "Школы", path: "/schools" },
        { id: 3, title: "Отзывы о школах", path: "/reviews" },
        { id: 4, title: "Акции школ", path: "/discounts" },
        { id: 5, title: "Блог", path: "/blog" }
    ]

    return `
        <div class="flex items-center gap-[71px] max-lg:gap-[20px]">
            <a href="/" class="text-[24px] leading-[100%] font-black">Logo</a>            
            <nav class="flex items-center gap-[40px] max-sm:hidden">
                ${list.map(item => `
                    <a href="${item.path}" class="text-[14px] leading-[100%] font-bold transition-colors duration-200 hover:text-[#01E45C] 
                    ${window.location.pathname === item.path ? 'text-[#01E45C] font-bold underline underline-offset-8 decoration-2' : 'text-gray-700'}">
                        ${item.title}
                    </a>
                `).join('')}
            </nav>            
        </div>
        
        <div class="flex items-center gap-[44px] max-lg:gap-[27px]">
            <a href="/phone" class="">${ArrowIcon}</a>
            <label class="flex items-center">
                ${LupaIcon}
                <input type="text" class="w-[300px] max-lg:w-[120px] pl-[15px] outline-none" placeholder="Искать курсы max-sm:hidden">
            </label>
        </div>
        <button id="mobile-menu-button" class="sm:hidden text-gray-700">
            ${MenuIcon}
        </button>
        
        <!-- Menu -->
        <div id="mobile-menu" class="hidden fixed right-0 top-0 bg-white z-0 pt-[15px] h-[105vh] px-4 w-[70%] shadow-[0 1px 50px 0px]">
            <div class="flex justify-end mb-6">
                <button id="mobile-menu-close" class="text-gray-700">${CloseIcon}</button>
            </div>
            <nav class="flex flex-col gap-6">
                ${list.map(item => `
                    <a href="${item.path}" class="text-[16px] font-bold transition-colors duration-200 hover:text-[#01E45C] 
                    ${window.location.pathname === item.path ? 'text-[#01E45C]' : 'text-gray-700'}">
                        ${item.title}
                    </a>
                `).join('')}
            </nav>
        </div>
    `
}

// Mobile menu part
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const mobileMenuClose = document.getElementById('mobile-menu-close')
    const mobileMenu = document.getElementById('mobile-menu')

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden')
            document.body.style.overflow = 'hidden'
        })
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden')
            document.body.style.overflow = 'auto'
        })
    }
})

// Render header
document.getElementById('header').innerHTML = Header()


// Sample data
const courses = [
    { id: 1, title: "Веб-разработчик", profession: "Профессия", school: "Skillbox", rating: 4.5, reviewCount: 58, price: 66800, pricePerMonth: 4745, duration: 3, level: "Начальный", hasDiploma: true, hasInternship: true },
    { id: 2, title: "Исследователь клиентского опыта", profession: "Профессия", school: "Skillbox", rating: 4.5, reviewCount: 58, price: 66800, pricePerMonth: 4745, duration: 3, level: "Профи", hasDiploma: false, hasInternship: true, },
    { id: 3, title: "Специалист по продвижению на маркетплейсах", profession: "Профессия", school: "Skillbox", rating: 4.5, reviewCount: 58, price: 66800, pricePerMonth: 4745, duration: 3, level: "Начальный", hasDiploma: false, hasInternship: false, },
    { id: 4, title: "Веб-разработчик", profession: "Профессия", school: "Skillbox", rating: 4.5, reviewCount: 58, price: 66800, pricePerMonth: 4745, duration: 3, level: "Начальный", hasDiploma: true, hasInternship: true, },
    { id: 5, title: "Веб-разработчик", profession: "Профессия", school: "Skillbox", rating: 4.5, reviewCount: 58, price: 66800, pricePerMonth: 4745, duration: 3, level: "Начальный", hasDiploma: true, hasInternship: false, },
]

// Categories
const categories = ["Программирование", "Маркетинг", "Дизайн", "Аналитика", "Финансы", "Управление", "Контент-маркетинг", "Иностранные языки", "Личностный рост",]

// Schools
const schools = ["Skillbox", "Geekbrains", "IPIBA", "LetSchool", "ConvertMonster"]

// Levels
const levels = ["Начальный", "Средний", "Профессиональный", "Для детей"]

// Filter state
let filters = {
    price: { min: 0, max: 157800, paid: false, free: false, },
    schools: { Skillbox: false, Geekbrains: false, IPIBA: false, LetSchool: false, ConvertMonster: false, },
    levels: { Начальный: false, Средний: false, Профессиональный: false, "Для детей": false, },
    duration: { min: 0, max: 36, },
    hasInternship: false,
    hasCertificate: false,
}

let activeCategory = "Дизайн"

document.addEventListener('DOMContentLoaded', () => {
    renderCategories()
    renderSchoolsFilter()
    renderLevelsFilter()
    renderBadges()
    renderCourses()
    updateCourseCount()

    document.getElementById('reset-filters').addEventListener('click', resetFilters)
    document.getElementById('price-range').addEventListener('input', handlePriceChange)
    document.getElementById('duration-range').addEventListener('input', handleDurationChange)
    document.getElementById('paid').addEventListener('change', () => handleCheckboxChange('price', 'paid'))
    document.getElementById('free').addEventListener('change', () => handleCheckboxChange('price', 'free'))
    document.getElementById('internship').addEventListener('change', () => handleSpecialFilterChange('hasInternship'))
    document.getElementById('certificate').addEventListener('change', () => handleSpecialFilterChange('hasCertificate'))

    if (window.lucide) {
        lucide.createIcons()
    }
})

// Render categories
function renderCategories() {
    const container = document.getElementById('categories-container')
    container.innerHTML = categories.map(category => `
        <button class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? "bg-green-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
        }" onclick="handleCategoryChange('${category}')">
            ${category}
        </button>
    `).join('')
}

// Render schools filter
function renderSchoolsFilter() {
    const container = document.getElementById('schools-filter')
    container.innerHTML = schools.map(school => `
        <div class="flex items-center">
            <input type="checkbox" id="school-${school}" class="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                ${filters.schools[school] ? 'checked' : ''} onchange="handleCheckboxChange('schools', '${school}')">
            <label for="school-${school}" class="ml-2 text-sm text-gray-700">${school}</label>
        </div>
    `).join('')
}

// Render levels filter
function renderLevelsFilter() {
    const container = document.getElementById('levels-filter')
    container.innerHTML = levels.map(level => `
        <div class="flex items-center">
            <input type="checkbox" id="level-${level}" class="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                ${filters.levels[level] ? 'checked' : ''} onchange="handleCheckboxChange('levels', '${level}')">
            <label for="level-${level}" class="ml-2 text-sm text-gray-700">${level}</label>
        </div>
    `).join('')
}

// Render badges
function renderBadges() {
    const container = document.getElementById('filter-badges')
    container.innerHTML = `
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300">
            Курс <span class="ml-1">▼</span>
        </span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300">
            Школа <span class="ml-1">▼</span>
        </span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300">
            Цена <span class="ml-1">▼</span>
        </span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300">
            Длительность <span class="ml-1">▼</span>
        </span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300">
            Особенности <span class="ml-1">▼</span>
        </span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300">
            Ссылка на курс
        </span>
    `
}

// Render courses
function renderCourses(coursesToRender = courses) {
    const container = document.getElementById('courses-container')
    container.innerHTML = coursesToRender.map(course => `
        <div class="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row mb-4">
            <div class="flex-1">
                <div class="mb-2">
                    <div class="text-gray-600 text-sm">${course.profession}</div>
                    <h3 class="font-medium text-lg">${course.title}</h3>
                </div>

                <div class="flex items-center mb-2">
                    <div class="font-medium mr-2">${course.school}</div>
                    <div class="flex items-center">
                        <i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>
                        <span class="ml-1 text-sm font-medium">${course.rating}</span>
                    </div>
                    <div class="ml-2 text-sm text-green-500">Отзывов о школе ${course.reviewCount}</div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
                <div class="text-right max-sm:text-center">
                    <div class="text-sm text-gray-500 line-through">85 000 руб</div>
                    <div class="font-bold text-lg">${course.price.toLocaleString('ru-RU')} руб</div>
                    <div class="text-sm text-gray-500">от ${course.pricePerMonth.toLocaleString('ru-RU')} руб./месяц</div>
                </div>

                <div class="text-center md:text-right">
                    <div class="flex items-center mb-1">
                        <div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                            <span class="text-xs">⏱</span>
                        </div>
                        <span class="text-sm">В любое время</span>
                    </div>

                    <div class="flex items-center mb-1">
                        <div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                            <span class="text-xs">📅</span>
                        </div>
                        <span class="text-sm">${course.duration} месяца</span>
                    </div>

                    <div class="flex items-center mb-1">
                        <div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                            <span class="text-xs">📊</span>
                        </div>
                        <span class="text-sm">${course.level}</span>
                    </div>

                    ${course.hasDiploma ? `
                    <div class="flex items-center mb-1">
                        <div class="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                            <span class="text-xs">🎓</span>
                        </div>
                        <span class="text-sm">Диплом</span>
                    </div>
                    ` : ''}
                </div>

                <div class="flex flex-col gap-2">
                    <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">На сайт курса</button>
                    <button class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">Подробнее</button>
                    <button class="text-xs text-gray-500 underline mt-1">Добавить в сравнение</button>
                </div>
            </div>
        </div>
    `).join('')

    if (window.lucide) {
        lucide.createIcons()
    }
}

// Update course count
function updateCourseCount(count = courses.length) {
    document.getElementById('course-count').textContent = `Найдено ${count} курсов`
}

// Event handlers
function handleCategoryChange(category) {
    activeCategory = category
    renderCategories()
    renderCourses()
}

function handleCheckboxChange(filterType, value) {
    if (filterType === 'price') {
        filters.price[value] = !filters.price[value]
    } else if (filterType === 'schools') {
        filters.schools[value] = !filters.schools[value]
    } else if (filterType === 'levels') {
        filters.levels[value] = !filters.levels[value]
    }
    applyFilters()
}

function handleSpecialFilterChange(filterType) {
    filters[filterType] = !filters[filterType]
    document.getElementById(filterType).checked = filters[filterType]
    applyFilters()
}

function handlePriceChange(e) {
    const value = parseInt(e.target.value)
    filters.price.min = value
    filters.price.max = 157800 - value
    document.getElementById('min-price').textContent = filters.price.min
    document.getElementById('max-price').textContent = filters.price.max
    applyFilters()
}

function handleDurationChange(e) {
    const value = parseInt(e.target.value)
    filters.duration.min = value
    filters.duration.max = 36 - value
    document.getElementById('min-duration').textContent = filters.duration.min
    document.getElementById('max-duration').textContent = filters.duration.max
    applyFilters()
}

function resetFilters() {
    filters = {
        price: { min: 0, max: 157800, paid: false, free: false },
        schools: { Skillbox: false, Geekbrains: false, IPIBA: false, LetSchool: false, ConvertMonster: false },
        levels: { Начальный: false, Средний: false, Профессиональный: false, "Для детей": false },
        duration: { min: 0, max: 36 },
        hasInternship: false,
        hasCertificate: false,
    }

    // Reset ui part
    document.getElementById('paid').checked = false
    document.getElementById('free').checked = false
    document.getElementById('internship').checked = false
    document.getElementById('certificate').checked = false
    document.getElementById('price-range').value = 0
    document.getElementById('duration-range').value = 0
    document.getElementById('min-price').textContent = '0'
    document.getElementById('max-price').textContent = '157800'
    document.getElementById('min-duration').textContent = '0'
    document.getElementById('max-duration').textContent = '36'

    renderSchoolsFilter()
    renderLevelsFilter()
    applyFilters()
}

function applyFilters() {
    const filteredCourses = courses.filter(course => {
        if (filters.price.paid && course.price === 0) {
            return false
        }
        if (filters.price.free && course.price !== 0) {
            return false
        }

        if (course.price < filters.price.min || course.price > filters.price.max) {
            return false
        }

        let schoolMatch = false
        for (const school in filters.schools) {
            if (filters.schools[school] && course.school === school) {
                schoolMatch = true
                break
            }
        }
        if (Object.values(filters.schools).some(value => value === true) && !schoolMatch) {
            return false
        }

        let levelMatch = false
        for (const level in filters.levels) {
            if (filters.levels[level] && course.level === level) {
                levelMatch = true
                break
            }
        }
        if (Object.values(filters.levels).some(value => value === true) && !levelMatch) {
            return false
        }

        if (course.duration < filters.duration.min || course.duration > filters.duration.max) {
            return false
        }

        if (filters.hasInternship && !course.hasInternship) {
            return false
        }

        if (filters.hasCertificate && !course.hasCertificate) {
            return false
        }

        return true
    })

    renderCourses(filteredCourses)
    updateCourseCount(filteredCourses.length)
}

// other categories part
const programmingCategories = ["Рython-разработка", "Web-разработка", "Мобильная разработка", "JavaScript-разработка", "Java-разработка", "Разработка игр", "Создание сайтов", "Системное администрирование", "QA-тестирование", "Управление разработкой и IT"]
const categoryList2 = ["Android-разработка", "Frontend-разработка", "Разработка игр на Unity", "Разработка на C#", "PHP-разработка", "DevOps", "Верстка на HTML/CSS", "IOS-разработка", "Разработка на C++", "Фреймворк Django"]
const categoryList3 = ["Разработка игр на Unreal Engine", "Фреймворк Node.js", "Разработка на Kotlin", "Информационная безопасность", "Golang-разработка", "Разработка на Swift", "Фреймворк ReactJS", "Фреймворк Spring", "VR/AR разработка", "1C-разработка"]
const categoryList4 = ["Фреймворк Laravel", "Фреймворк Flutter", "Работа с GIT"]

const otherCategories = () => {
    return `
    <div class="flex gap-[69px] max-sm:[0] max-lg:gap-[40px] max-sm:flex-wrap max-sm:gap-[5px]">
        <div class="flex flex-col items-start gap-[4px]">
            ${programmingCategories.map(category =>
        `<button class="whitespace">${category}</button>`
    ).join('')}
        </div>
        <div class="flex flex-col items-start gap-[4px]">
            ${categoryList2.map(category =>
        `<button class="whitespace">${category}</button>`
    ).join('')}
        </div>
        <div class="flex flex-col items-start gap-[4px]">
            ${categoryList3.map(category =>
        `<button class="whitespace">${category}</button>`
    ).join('')}
        </div>
        <div class="flex flex-col items-start gap-[4px]">
            ${categoryList4.map(category =>
        `<button class="whitespace">${category}</button>`
    ).join('')}
        </div>
    </div>
    `
}
document.getElementById('other-categories').innerHTML = otherCategories()

// Footer part 
const Footer = () => {
  const categoryList = [
    { id: 1, title: "Программирование" },
    { id: 2, title: "Маркетинг" },
    { id: 3, title: "Дизайн" },
    { id: 4, title: "Управление" },
    { id: 5, title: "Контент-маркетинг" }
  ];

  const schoolList = [
    { id: 1, title: "Skillbox" },
    { id: 2, title: "Geekbrains" },
    { id: 3, title: "Netology" },
    { id: 4, title: "Skillfactory" },
    { id: 5, title: "Convertmonster" }
  ];

  const reviewsList = [
    { id: 1, title: "Отзывы о Skillbox" },
    { id: 2, title: "Отзывы о Skillfactory" },
    { id: 3, title: "Отзывы о Geekbrains" },
    { id: 4, title: "Отзывы о Netology" },
    { id: 5, title: "Отзывы о Convertmonster" }
  ];

  const coursesList = [
    { id: 1, title: "C дипломом" },
    { id: 2, title: "C трудоустройством" },
    { id: 3, title: "Платные" },
    { id: 4, title: "Бесплатные" },
    { id: 5, title: "Ближайшие по дате старта" }
  ];

  const levelsList = [
    { id: 1, title: "Начальный" },
    { id: 2, title: "Средний" },
    { id: 3, title: "Профессиональный" },
    { id: 4, title: "Для детей" }
  ];

   return `
    <div class="container mx-auto text-white">
      <div class="mb-6">
        <h1 class="text-2xl font-bold">LOGO</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <!-- Categories -->
        <div class="max-sm:hidden">
          <h2 class="font-bold text-lg mb-4">КАТЕГОРИИ</h2>
          <ul class="space-y-2">
            ${categoryList.map(item => `
              <li><a href="#" class="hover:text-blue-300 text-white">${item.title}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Schools -->
        <div class="max-sm:hidden">
          <h2 class="font-bold text-lg mb-4 flex items-center">ШКОЛЫ</h2>
          <ul class="space-y-2">
            ${schoolList.map(item => `
              <li><a href="#" class="hover:text-blue-300 text-white">${item.title}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Reviews -->
        <div class="max-sm:hidden">
          <h2 class="font-bold text-lg mb-4 flex items-center">ОТЗЫВЫ О ШКОЛАХ</h2>
          <ul class="space-y-2">
            ${reviewsList.map(item => `
              <li><a href="#" class="hover:text-blue-300 text-white">${item.title}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Courses -->
        <div class="max-sm:hidden">
          <h2 class="font-bold text-lg mb-4 flex items-center">КУРСЫ</h2>
          <ul class="space-y-2">
            ${coursesList.map(item => `
              <li><a href="#" class="hover:text-blue-300 text-white">${item.title}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Levels -->
        <div class="max-sm:hidden">
          <h2 class="font-bold text-lg mb-4 flex items-center">УРОВЕНЬ СЛОЖНОСТИ</h2>
          <ul class="space-y-2">
            ${levelsList.map(item => `
              <li><a href="#" class="hover:text-blue-300 text-white">${item.title}</a></li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Mobile version part -->
      <div class="md:hidden space-y-4 mb-6">
        <div class="pb-4 mobile-accordion">
          <button type="button" class="flex justify-between items-center w-full font-bold text-lg text-white">
            КАТЕГОРИИ
            <span>+</span>
          </button>
          <div class="hidden mt-2 pl-2">
            ${categoryList.map(item => `
              <div class="py-1"><a href="#" class="text-[#A6A6A6] hover:text-blue-300">${item.title}</a></div>
            `).join('')}
          </div>
        </div>

        <div class="pb-4 mobile-accordion">
          <button type="button" class="flex justify-between items-center w-full font-bold text-lg text-white">
            ШКОЛЫ
            <span>+</span>
          </button>
          <div class="hidden mt-2 pl-2">
            ${schoolList.map(item => `
              <div class="py-1"><a href="#" class="text-[#A6A6A6] hover:text-blue-300">${item.title}</a></div>
            `).join('')}
          </div>
        </div>

        <div class="pb-4 mobile-accordion">
          <button type="button" class="flex justify-between items-center w-full font-bold text-lg text-white">
            ОТЗЫВЫ О ШКОЛАХ
            <span>+</span>
          </button>
          <div class="hidden mt-2 pl-2">
            ${reviewsList.map(item => `
              <div class="py-1"><a href="#" class="text-[#A6A6A6] hover:text-blue-300">${item.title}</a></div>
            `).join('')}
          </div>
        </div>

        <div class="pb-4 mobile-accordion">
          <button type="button" class="flex justify-between items-center w-full font-bold text-lg text-white">
            КУРСЫ
            <span>+</span>
          </button>
          <div class="hidden mt-2 pl-2">
            ${coursesList.map(item => `
              <div class="py-1"><a href="#" class="text-[#A6A6A6] hover:text-blue-300">${item.title}</a></div>
            `).join('')}
          </div>
        </div>

        <div class="pb-4 mobile-accordion">
          <button type="button" class="flex justify-between items-center w-full font-bold text-lg text-white">
            УРОВЕНЬ СЛОЖНОСТИ
            <span>+</span>
          </button>
          <div class="hidden mt-2 pl-2">
            ${levelsList.map(item => `
              <div class="py-1"><a href="#" class="text-[#A6A6A6] hover:text-blue-300">${item.title}</a></div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Footer botton -->
      <div class="pt-6 border-t border-gray-300">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <a href="#" class="text-gray-300 hover:text-blue-300 mb-2 md:mb-0">Пользовательское соглашение</a>
          <div class="text-gray-300">© 2021 Logo. Все права защищены</div>
        </div>
      </div>
    </div>
  `
}
document.getElementById('footer').innerHTML = Footer()