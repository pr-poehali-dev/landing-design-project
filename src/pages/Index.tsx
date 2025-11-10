import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    niche: '',
    comment: '',
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4B8BD6] rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">&lt;&gt;</span>
              </div>
              <div>
                <div className="font-bold text-base text-[#111318]">LP genius</div>
                <div className="text-[10px] text-[#6B7280]">Лендинги под ключ</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#experts" className="text-xs font-semibold text-[#111318] hover:text-[#2F74C0] transition uppercase">Эксперты</a>
              <a href="#portfolio" className="text-xs font-semibold text-[#111318] hover:text-[#2F74C0] transition uppercase">Портфолио</a>
              <a href="#brief" className="text-xs font-semibold text-[#111318] hover:text-[#2F74C0] transition uppercase">Онлайн-бриф</a>
              <a href="#blog" className="text-xs font-semibold text-[#111318] hover:text-[#2F74C0] transition uppercase">Блог</a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-gray-100">
                  <Icon name="Send" size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-gray-100">
                  <Icon name="MessageCircle" size={16} />
                </Button>
              </div>
              <div className="hidden lg:block">
                <a href="tel:+79996571969" className="text-sm font-semibold text-[#111318] hover:text-[#2F74C0] transition block leading-tight">
                  +7 (999) 657 19 69
                </a>
                <div className="flex items-center gap-1.5 text-[10px] text-[#28C76F]">
                  <span className="w-1.5 h-1.5 bg-[#28C76F] rounded-full"></span>
                  Сейчас онлайн
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-16 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-bold text-[42px] leading-[1.2] text-[#111318] mb-6">
                Разрабатываем <span className="text-[#2F74C0]">любые лендинги</span> под ваши <span className="text-[#2F74C0]">товары и услуги</span>.
              </h1>
              <p className="text-base text-[#6B7280] mb-2 leading-relaxed">
                От 40 000 ₽ за 7–21 день с гарантией. Анализ конкурентов → структура → дизайн → адаптивная верстка → аналитика, поддержка, SEO и Яндекс.Директ.
              </p>
              <p className="text-sm text-[#6B7280] mb-8 leading-relaxed">
                Без шаблонов. Полный цикл. Профессионально.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#2F74C0] hover:bg-[#2861a3] text-white px-6 h-11 rounded-xl font-semibold" data-cta="hero-telegram">
                  Написать в Telegram
                </Button>
                <Button variant="outline" className="border-2 border-[#2F74C0] text-[#2F74C0] hover:bg-[#2F74C0] hover:text-white px-6 h-11 rounded-xl font-semibold" data-cta="hero-whatsapp">
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/b2805837-52d2-410a-b88e-deb75d2ed8b7.jpg"
                alt="Специалист LP genius"
                className="w-full h-auto rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#4B8BD6]">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-bold text-2xl text-white text-center mb-6">
            Заказать сайт на Tilda — это очень просто
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'Заполнить бриф',
              'Получить консультацию',
              'Согласовать макет',
              'Запустить за 7–21 день',
              'Заполнить анкету онлайн',
              'Внести предоплату',
              'Начать разработку',
              'Получить готовый сайт'
            ].map((step) => (
              <Badge key={step} className="px-4 py-2 text-xs font-medium bg-white text-[#4B8BD6] border-0 rounded-full">
                {step}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="process">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-bold text-3xl text-[#111318] text-center mb-4">
            Процесс работы <span className="font-normal">состоит из нескольких шагов</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: '01',
                title: 'БРИФ',
                description: 'Брифицирование. Определяем цель, ЦА, KPI. Анализируем конкурентов и нишу. Формируем УТП.',
                color: 'text-[#2F74C0]'
              },
              {
                number: '02',
                title: 'ПРОТОТИП',
                description: 'Прототипирование. Создаём структуру и логику. Продумываем воронку и UX.',
                color: 'text-[#2F74C0]'
              },
              {
                number: '03',
                title: 'СОГЛАСОВАНИЕ',
                description: 'Согласование. Правки, обсуждение. Утверждение концепции и структуры.',
                color: 'text-[#2F74C0]'
              },
              {
                number: '04',
                title: 'ДИЗАЙН',
                description: 'Дизайн. UI-концепт и финальные макеты страниц. Адаптив под все устройства.',
                color: 'text-[#2F74C0]'
              },
              {
                number: '05',
                title: 'РАЗРАБОТКА И ВЕРСТКА',
                description: 'Верстка. Адаптивная разработка, скорость загрузки, тесты на разных устройствах.',
                color: 'text-[#2F74C0]'
              },
              {
                number: '06',
                title: 'ЗАПУСК',
                description: 'Аналитика и запуск. Настройка целей, событий. Официальный релиз и передача проекта.',
                color: 'text-[#2F74C0]'
              }
            ].map((step) => (
              <div key={step.number} className="relative">
                <div className={`text-6xl font-black ${step.color} mb-3 opacity-20`}>
                  {step.number}
                </div>
                <h3 className="font-bold text-sm text-[#111318] mb-2 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-lg text-[#6B7280] mb-2">
                <span className="font-bold text-2xl text-[#111318]">Стоимость</span> разработки сайта
              </p>
              <p className="font-bold text-4xl text-[#2F74C0]">от 40 000 ₽</p>
              <p className="text-sm text-[#6B7280] mt-1">За полный цикл. Обсудить проект?</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-[#2F74C0] hover:bg-[#2861a3] text-white px-6 h-11 rounded-xl font-semibold" data-cta="price-telegram">
                Написать в Telegram
              </Button>
              <Button className="bg-[#28C76F] hover:bg-[#24b263] text-white px-6 h-11 rounded-xl font-semibold" data-cta="price-whatsapp">
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="about">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/files/b2805837-52d2-410a-b88e-deb75d2ed8b7.jpg"
                alt="О нас"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              <h2 className="font-bold text-3xl text-[#111318] mb-8">О нас</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-base text-[#111318] mb-2">Профессионализм</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    Команда опытных специалистов. Каждый проект — индивидуальный подход и внимание к деталям.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#111318] mb-2">Индивидуальный подход</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    Изучаем вашу нишу, конкурентов, целевую аудиторию. Создаём решение под ваши задачи.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#111318] mb-2">Без шаблонов</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    Уникальный дизайн и структура. Никаких готовых решений — только авторская работа.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#111318] mb-2">Результат, а не процесс</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    Фокус на конверсию и продажи. Делаем лендинги, которые работают на ваш бизнес.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-bold text-3xl text-[#111318] text-center mb-12">
            Работаем по предоплате, <span className="font-normal">делим на этапы</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-[#2F74C0] rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="font-black text-5xl text-[#2F74C0] mb-4">25%</div>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Анализ, бриф, прототип и согласование структуры
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#2F74C0] rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="font-black text-5xl text-[#2F74C0] mb-4">25%</div>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Дизайн макетов и утверждение визуальной концепции
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#2F74C0] rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="font-black text-5xl text-[#2F74C0] mb-4">50%</div>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Верстка, тесты, аналитика и финальный запуск проекта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="team">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-bold text-3xl text-[#111318] text-center mb-4">
            В команде только <span className="font-normal">опытные специалисты</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-4"></div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-12">
            <Button className="bg-[#2F74C0] hover:bg-[#2861a3] text-white px-6 h-11 rounded-xl font-semibold" data-cta="team-telegram">
              Написать в Telegram
            </Button>
            <Button className="bg-[#28C76F] hover:bg-[#24b263] text-white px-6 h-11 rounded-xl font-semibold" data-cta="team-whatsapp">
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]" id="services">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-bold text-3xl text-[#111318] text-center mb-12">Дополнительные услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Settings',
                title: 'Техническое сопровождение',
                description: 'Обновления, правки контента, техническая поддержка сайта'
              },
              {
                icon: 'TrendingUp',
                title: 'Настройка Яндекс.Директ',
                description: 'Запуск и ведение рекламных кампаний с отчётами'
              },
              {
                icon: 'Search',
                title: 'SEO-оптимизация',
                description: 'Подготовка сайта для поисковых систем и продвижение'
              },
              {
                icon: 'BarChart',
                title: 'A/B-тесты',
                description: 'Тестирование гипотез и улучшение конверсии страниц'
              }
            ].map((service) => (
              <Card key={service.title} className="border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#D8E8F7] rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-[#2F74C0]" />
                  </div>
                  <h3 className="font-bold text-base text-[#111318] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <p className="text-lg text-[#6B7280] mb-6">
            Остались вопросы? Просто напишите в <span className="font-semibold text-[#111318]">WhatsApp</span> или <span className="font-semibold text-[#111318]">Telegram</span>
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button className="bg-[#2F74C0] hover:bg-[#2861a3] text-white px-6 h-11 rounded-xl font-semibold" data-cta="cta-telegram">
              Написать в Telegram
            </Button>
            <Button className="bg-[#28C76F] hover:bg-[#24b263] text-white px-6 h-11 rounded-xl font-semibold" data-cta="cta-whatsapp">
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#4B8BD6]">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-bold text-3xl text-white text-center mb-12">
            Почему мы выбираем Tilda
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Простота и скорость',
                description: 'Быстрый запуск без программирования. Удобный редактор для обновления контента.'
              },
              {
                title: 'Готовые блоки',
                description: 'Библиотека из 550+ готовых блоков для любых задач и ниш.'
              },
              {
                title: 'Адаптивность',
                description: 'Автоматическая адаптация под все устройства и экраны.'
              },
              {
                title: 'Интеграции',
                description: 'CRM, платёжные системы, аналитика — всё подключается за пару кликов.'
              },
              {
                title: 'SEO-дружелюбность',
                description: 'Встроенные инструменты для настройки метатегов и быстрой индексации.'
              },
              {
                title: 'Надёжность',
                description: 'Стабильный хостинг, SSL-сертификаты, автоматические резервные копии.'
              }
            ].map((item) => (
              <Card key={item.title} className="bg-white border-0 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-base text-[#111318] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <div className="aspect-video bg-gray-200 rounded-2xl"></div>
              <div className="aspect-video bg-gray-200 rounded-2xl"></div>
              <div className="aspect-video bg-gray-200 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="font-bold text-3xl text-[#111318] mb-8">Структура лендинга</h2>
              <div className="space-y-4">
                {[
                  { icon: 'Layout', title: 'Шапка сайта', desc: 'Логотип, меню, контакты' },
                  { icon: 'Zap', title: 'Оффер', desc: 'Главное предложение и CTA' },
                  { icon: 'Award', title: 'Преимущества', desc: 'Почему выбирают вас' },
                  { icon: 'DollarSign', title: 'Прайс-лист', desc: 'Цены и пакеты услуг' },
                  { icon: 'HelpCircle', title: 'FAQ', desc: 'Ответы на вопросы' },
                  { icon: 'Mail', title: 'Форма заявки', desc: 'Сбор контактов клиентов' },
                  { icon: 'Star', title: 'Отзывы', desc: 'Социальное доказательство' },
                  { icon: 'Box', title: 'Футер', desc: 'Контакты и политика' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#D8E8F7] rounded-lg flex items-center justify-center shrink-0">
                      <Icon name={item.icon as any} size={20} className="text-[#2F74C0]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#111318] mb-1">{item.title}</h3>
                      <p className="text-xs text-[#6B7280]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-bold text-3xl text-[#111318] text-center mb-4">
            Заголовок текстового блока
          </h2>
          <h3 className="text-xl text-[#6B7280] text-center mb-12">Текст Прилипал</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-sm text-[#6B7280] leading-relaxed">
            <p>
              Создание лендинга — это комплексный процесс, который требует глубокого понимания целевой аудитории, анализа конкурентов и построения эффективной воронки продаж. Мы используем проверенные методики и инструменты, чтобы ваш лендинг не просто красиво выглядел, но и приносил реальные заявки и продажи.
            </p>
            <p>
              Наш подход основан на анализе данных, тестировании гипотез и постоянной оптимизации. Мы работаем на результат: каждый элемент страницы продуман с точки зрения конверсии. От первого экрана до формы заявки — всё направлено на то, чтобы посетитель совершил целевое действие.
            </p>
            <p>
              После запуска мы не бросаем проект: предоставляем аналитику, консультации по улучшению показателей и техническую поддержку. Ваш успех — наш успех.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#111318] text-white py-12">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#4B8BD6] rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">&lt;&gt;</span>
                </div>
                <div>
                  <div className="font-bold text-base">LP genius</div>
                  <div className="text-[10px] text-gray-400">Лендинги под ключ</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4 uppercase">Эксперты</h3>
              <nav className="flex flex-col gap-2 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">О команде</a>
              </nav>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4 uppercase">Портфолио</h3>
              <nav className="flex flex-col gap-2 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">Наши работы</a>
              </nav>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-4 uppercase">Онлайн-бриф</h3>
              <nav className="flex flex-col gap-2 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">Заполнить бриф</a>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <span>© 2024 LP genius</span>
              <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+79996571969" className="text-sm font-semibold hover:text-[#4B8BD6] transition">
                +7 (999) 657 19 69
              </a>
              <Button className="bg-[#2F74C0] hover:bg-[#2861a3] text-white px-6 h-10 rounded-xl text-sm font-semibold">
                Написать в Telegram
              </Button>
              <Button className="bg-[#28C76F] hover:bg-[#24b263] text-white px-6 h-10 rounded-xl text-sm font-semibold">
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
