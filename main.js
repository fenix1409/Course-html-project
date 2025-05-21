const categoryFilter = document.getElementById('categoryFilter')
const courseSearch = document.getElementById('courseSearch')
const coursesGrid = document.getElementById('coursesGrid')
const selectedCategory = document.getElementById('selectedCategory')
const courseCount = document.getElementById('courseCount')

const coursesData = [
  { id: 1, name: "Android-разработка", category: "programming" },
  { id: 2, name: "Разработка игр на Unreal Engine", category: "programming" },
  { id: 3, name: "Python-разработка", category: "programming" },
  { id: 4, name: "Web-разработка", category: "programming" },
  { id: 5, name: "Frontend-разработка", category: "programming" },
  { id: 6, name: "Информационная безопасность", category: "programming" },
  { id: 7, name: "Мобильная разработка", category: "programming" },
  { id: 8, name: "Разработка игр на Unity", category: "programming" },
  { id: 9, name: "Golang-разработка", category: "programming" },
  { id: 10, name: "JavaScript-разработка", category: "programming" },
  { id: 11, name: "Разработка на C#", category: "programming" },
  { id: 12, name: "Разработка на Swift", category: "programming" },
  { id: 13, name: "Java-разработка", category: "programming" },
  { id: 14, name: "PHP-разработка", category: "programming" },
  { id: 15, name: "1C-разработка", category: "programming" },
  { id: 16, name: "Разработка игр", category: "programming" },
  { id: 17, name: "DevOps", category: "programming" },
  { id: 18, name: "VR/AR разработка", category: "programming" },
  { id: 19, name: "Создание сайтов", category: "programming" },
  { id: 20, name: "IOS-разработка", category: "programming" },
  { id: 21, name: "Фреймворк Laravel", category: "programming" },
  { id: 22, name: "Системное администрирование", category: "programming" },
  { id: 23, name: "Верстка на HTML/CSS", category: "programming" },
  { id: 24, name: "QA-тестирование", category: "programming" },
  { id: 25, name: "Разработка на C++", category: "programming" },
  { id: 26, name: "Цифровой маркетинг", category: "marketing" },
  { id: 27, name: "SMM", category: "marketing" },
  { id: 28, name: "Контент-маркетинг", category: "marketing" },
  { id: 29, name: "UX/UI дизайн", category: "design" },
  { id: 30, name: "Графический дизайн", category: "design" },
  { id: 31, name: "Веб-аналитика", category: "analytics" },
  { id: 32, name: "Data Science", category: "analytics" }
]

let currentCategory = 'all'
let currentSearch = ''

function init() {
  renderCourses()
  setupEventListeners()
}

// Render course part
function renderCourses() {
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = currentCategory === 'all' || course.category === currentCategory
    const matchesSearch = course.name.toLowerCase().includes(currentSearch.toLowerCase())
    return matchesCategory && matchesSearch
  })

  coursesGrid.innerHTML = filteredCourses.map(course => `
    <div class="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <h4 class="font-medium">${course.name}</h4>
      <p class="text-sm text-gray-500 mt-1">${getCategoryName(course.category)}</p>
    </div>
  `).join('')

  courseCount.textContent = filteredCourses.length;
  selectedCategory.textContent = currentCategory === 'all' ? 'Все курсы' : getCategoryName(currentCategory)
}

function getCategoryName(category) {
  const names = {
    'programming': 'Программирование',
    'marketing': 'Маркетинг',
    'design': 'Дизайн',
    'analytics': 'Аналитика'
  }
  return names[category] || category
}

function setupEventListeners() {
  categoryFilter.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      document.querySelectorAll('#categoryFilter button').forEach(btn => {
        btn.classList.remove('bg-white')
        btn.classList.add('bg-gray-100', 'hover:bg-gray-200')
      })
      e.target.classList.add('bg-white')
      e.target.classList.remove('bg-gray-100', 'hover:bg-gray-200')

      currentCategory = e.target.dataset.category
      renderCourses()
    }
  })

  // Search input
  courseSearch.addEventListener('input', (e) => {
    currentSearch = e.target.value
    renderCourses()
  })
}

document.addEventListener('DOMContentLoaded', init)

// Icons part
const ArrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
    </svg>`

const LupaIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>`

const VideoIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
    </svg>`

const InformationIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`

const FilterIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
    </svg>`

// Header Section
const Header = () => {
  const list = [
    { id: 1, title: "Курсы", path: "/courses" },
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
          <a href="/phone">${ArrowIcon}</a>
          <label class="flex items-center">
            ${LupaIcon}
            <input type="text" class="w-[300px] max-lg:w-[120px] pl-[15px] outline-none" placeholder="Искать курсы">
          </label>
        </div>
      `
}

// Hero section
const Hero = () => {
  return `
        <div class="w-[515px] max-sm:w-full">
          <h1 class="text-[36px] max-sm:text-[26px] leading-[100%] max-lg:leading-[44px] max-lg:mb-[12px] max-sm:leading-[40px] font-black">
            Агрегатор онлайн-курсов
          </h1>
          <p class="text-[18px] leading-[30px] max-lg:text-[16px] max-lg:leading-[28px] max-sm:text-[14px] max-sm:leading-[24px]">
            Сравниваем онлайн-курсы по digital и IT. Мы — каталог-отзовик курсов. Выбирайте курсы по отзывам, цене, продолжительности и другим критериям!
          </p>
        </div>
        <img src="/images/hero-img.png" alt="image" width="730" height="510" class="max-lg:hidden">
        <img src="/images/hero-img.png" alt="image" width="380" height="310" class="max-lg:block xl:hidden">
      `
}


// Advantage section
const Advantage = () => {
  const cards = [
    {
      id: 1,
      name: "Большой выбор онлайн-курсов",
      icon: VideoIcon,
      text: "Мы аккумулируем большое количество онлайн-курсов по различным направлениям, позволяя сравнивать их, и выбирать то, что вам нравится"
    },
    {
      id: 2,
      name: "Актуальная информация",
      icon: InformationIcon,
      text: "Мы регулярно обновляем наши базы данных, чтобы предоставлять вам только самую свежую информацию о новых курсах, старте обучения, скидках и предложениях от онлайн-школ"
    },
    {
      id: 3,
      name: "Скорость поиска",
      icon: FilterIcon,
      text: "Агрегатор курсов создан для экономии вашего времени. Вы можете с легкостью найти подходящий курс в нашем каталоге по различным фильтрам"
    }
  ]

  return `
        <div>
          <h2 class="text-[30px] leading-[100%] font-black mb-[72px] max-lg:mb-[50px] max-sm:mb-[31px] text-center">
            Наши преимущества
          </h2>
          <div class="flex items-center gap-[70px] max-lg:flex-wrap max-lg:gap-[45px] max-sm:gap-[30px] justify-center">
            ${cards.map(card => `
              <div class="w-[381px] max-lg:w-[339px] max-sm:w-full p-6 bg-gray-50 rounded-lg">
                <div class="flex items-center gap-[25px] max-lg:gap-[20px] max-sm:gap-[15px] mb-[25px] max-lg:mb-[18px] max-sm:mb-[15px]">
                  <div>${card.icon}</div>
                  <h3 class="text-[20px] leading-[27px] font-bold max-lg:text-[18px] max-lg:leading-[24px]">
                    ${card.name}
                  </h3>
                </div>
                <p class="text-[14px] leading-[24px] text-[#7E7E7E]">
                  ${card.text}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      `
}

// Blog section
const Blog = () => {
  const blogs = [
    { id: 1, image: "./images/blog-img.png", title: "Топ-10 онлайн-курсов по интернет-маркетингу Топ-10 онлайн-курсов по интернет-маркетингу", date: "1 сентября" },
    { id: 2, image: "./images/blog-img.png", title: "Топ-10 онлайн-курсов по интернет-маркетингу Топ-10 онлайн-курсов по интернет-маркетингу", date: "1 сентября" },
    { id: 3, image: "./images/blog-img.png", title: "Топ-10 онлайн-курсов по интернет-маркетингу Топ-10 онлайн-курсов по интернет-маркетингу", date: "1 сентября" }
  ]
  return `
  <div class="flex items-center justify-center gap-[22px] max-lg:flex-wrap max-lg:gap-[30px] max-sm:gap-[20px]">
      ${blogs.map(blog => `
           <div class="w-[384px] max-lg:w-[354px] max-sm:w-full bg-white rounded-[5px] border-[1px] border-[#F0F0F0]">
        <img src=${blog.image} alt="image" width="full" height="207px" class="max-lg:!h-[191px] max-sm:!h-[184px] mb-[24px] max-sm:mb-[20px] max-lg-[30px] !w-full">
        <div class="pt-[24px] px-[30px] pb-[31px] max-lg:py-[30px] max-sm:pt-[20px] max-sm:px-[30px] max-sm:pb-[30px]">
          <h3 class="text-[18px] leading-[24px] font-bold text-[#2B2B2B] max-lg:text-[16px] max-lg:leading-[22px] mb-[46px] max-lg:mb-[18px] max-sm:mb-[24px]">
            ${blog.title}
          </h3>
          <div class="flex items-center justify-between">
            <strong class="text-[12px] leading-[100%] text-[#8C8C8C] block">${blog.date}</strong>
            <button class="block w-[115px] py-[10px] px-[30px] bg-transparent border-[1px] border-[#D7D7D7] rounded-[100px] text-[10px] leading-[100%] font-bold text-[#8C8C8C]">Подробнее</button>
          </div>
        </div>
      </div>
        `)}
    </div>
  `
}

// Footer section
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

// Render part 
document.getElementById('header').innerHTML = Header()
document.getElementById('hero').innerHTML = Hero()
document.getElementById('advantage').innerHTML = Advantage()
document.getElementById('blog').innerHTML = Blog()
document.getElementById('footer').innerHTML = Footer()

// Navigation part
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    window.history.pushState({}, '', link.getAttribute('href'))
    document.getElementById('header').innerHTML = Header()
  })
})

// Mobile accordion functionality
document.querySelectorAll('.mobile-accordion button').forEach(button => {
  button.addEventListener('click', function() {
    const content = this.nextElementSibling
    const icon = this.querySelector('span')
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden')
      icon.textContent = '-'
    } else {
      content.classList.add('hidden')
      icon.textContent = '+'
    }
  })
})