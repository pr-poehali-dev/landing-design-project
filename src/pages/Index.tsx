import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
    <div className="min-h-screen bg-background font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">&lt;&gt;</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-foreground">LP genius</div>
                <div className="text-xs text-muted-foreground">Лендинги под ключ</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#experts" className="text-sm font-medium text-foreground hover:text-primary transition">ЭКСПЕРТЫ</a>
              <a href="#portfolio" className="text-sm font-medium text-foreground hover:text-primary transition">ПОРТФОЛИО</a>
              <a href="#brief" className="text-sm font-medium text-foreground hover:text-primary transition">ОНЛАЙН-БРИФ</a>
              <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition">БЛОГ</a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
              <div className="hidden lg:block">
                <a href="tel:+79996571969" className="font-medium text-foreground hover:text-primary transition">
                  +7 (999) 657 19 69
                </a>
                <div className="flex items-center gap-1.5 text-xs text-accent">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  Сейчас онлайн
                </div>
              </div>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="#2F74C0" fill="none" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-foreground mb-6 leading-tight">
                Разрабатываем продающие лендинги под ваши товары и услуги
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Анализ конкурентов → структура → дизайн → адаптивная верстка → аналитика, поддержка, SEO и Яндекс.Директ
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 font-semibold" data-cta="hero-telegram">
                  <Icon name="Send" size={20} />
                  Написать в Telegram
                </Button>
                <Button size="lg" variant="outline" className="gap-2 font-semibold" data-cta="hero-whatsapp">
                  <Icon name="MessageCircle" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/files/b2805837-52d2-410a-b88e-deb75d2ed8b7.jpg"
                  alt="Специалист LP genius"
                  className="w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Анализ ниши', 'Прототип и структура', 'Индивидуальный дизайн', 'Адаптивная верстка', 'Базовое SEO', 'Поддержка и реклама'].map((item) => (
              <Badge key={item} variant="secondary" className="px-4 py-2 text-sm font-medium">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-10">
            Заказать сайт — это просто
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Заполнить бриф',
              'Получить консультацию',
              'Согласовать проект',
              'Утвердить структуру',
              'Одобрить дизайн',
              'Протестировать',
              'Запуск за 7–21 день',
              'Поддержка'
            ].map((step) => (
              <Badge key={step} variant="outline" className="px-5 py-2.5 text-sm font-medium bg-white text-primary border-white/20">
                {step}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="process">
        <div className="container mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center text-foreground mb-16">
            Процесс работы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Брифицирование',
                description: 'Определяем цель, целевую аудиторию и KPI проекта'
              },
              {
                number: '02',
                title: 'Прототип',
                description: 'Создаём структуру и логику взаимодействия'
              },
              {
                number: '03',
                title: 'Согласование',
                description: 'Правки, обсуждение и утверждение концепции'
              },
              {
                number: '04',
                title: 'Дизайн',
                description: 'UI-концепт и финальные макеты страниц'
              },
              {
                number: '05',
                title: 'Верстка',
                description: 'Адаптивная разработка, скорость, тесты'
              },
              {
                number: '06',
                title: 'Аналитика и запуск',
                description: 'Настройка целей, событий и официальный релиз'
              }
            ].map((step) => (
              <Card key={step.number} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-6xl font-heading font-black text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl lg:text-2xl text-foreground mb-3">
              Стоимость разработки сайта — <span className="font-heading font-bold text-3xl lg:text-4xl text-primary">от 40 000 ₽</span>
            </p>
            <p className="text-lg text-muted-foreground mb-6">Обсудить проект?</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2" data-cta="price-telegram">
                <Icon name="Send" size={20} />
                Telegram
              </Button>
              <Button size="lg" variant="outline" className="gap-2" data-cta="price-whatsapp">
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="packages">
        <div className="container mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center text-foreground mb-16">
            Пакеты и стоимость
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Start',
                price: 'от 40 000 ₽',
                duration: '7–14 дней',
                features: [
                  'Анализ конкурентов',
                  'Прототип структуры',
                  'Индивидуальный дизайн',
                  'Адаптивная верстка',
                  'Базовое SEO',
                  'Подключение форм',
                  'Настройка аналитики'
                ],
                popular: false
              },
              {
                name: 'Growth',
                price: 'от 60 000 ₽',
                duration: '+ 1 месяц поддержки',
                features: [
                  'Всё из пакета Start',
                  'Техническая поддержка',
                  'Правки контента',
                  'Обновление информации',
                  'Мониторинг работы',
                  'Консультации',
                  'Приоритетная связь'
                ],
                popular: true
              },
              {
                name: 'Performance',
                price: 'от 75 000 ₽',
                duration: '+ Яндекс.Директ',
                features: [
                  'Всё из пакета Growth',
                  'Настройка кампаний',
                  'Подбор ключевых слов',
                  'Создание объявлений',
                  'Оптимизация бюджета',
                  'Отчёты по рекламе',
                  'Еженедельная оптимизация'
                ],
                popular: false
              }
            ].map((pkg) => (
              <Card key={pkg.name} className={`relative ${pkg.popular ? 'border-2 border-primary shadow-xl' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground font-semibold px-4 py-1">
                      Популярно
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <div className="text-3xl font-heading font-bold text-primary mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {pkg.duration}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={18} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? 'default' : 'outline'}
                    data-cta={`package-${pkg.name.toLowerCase()}`}
                  >
                    Обсудить проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="portfolio">
        <div className="container mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center text-foreground mb-16">
            Портфолио и кейсы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                niche: 'Онлайн-школа',
                result: '+43% заявок',
                metric: '196 лидов за 2 недели'
              },
              {
                niche: 'Медицинский центр',
                result: '−45% CPL',
                metric: 'Снижение стоимости лида'
              },
              {
                niche: 'B2B услуги',
                result: '+67% конверсия',
                metric: 'Рост целевых действий'
              }
            ].map((caseItem, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer" data-cta={`case-${idx}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/40 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="font-heading font-black text-4xl text-primary mb-2 group-hover:scale-110 transition-transform">
                        {caseItem.result}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {caseItem.metric}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {caseItem.niche}
                  </h3>
                  <Button variant="ghost" size="sm" className="gap-2 px-0 hover:gap-3 transition-all">
                    Смотреть кейс
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="experts">
        <div className="container mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center text-foreground mb-16">
            Команда специалистов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                name: 'Александр',
                role: 'Стратег и аналитик',
                skills: 'Анализ ниши, структура, прототипы'
              },
              {
                name: 'Мария',
                role: 'UI/UX дизайнер',
                skills: 'Дизайн-система, макеты, анимации'
              },
              {
                name: 'Дмитрий',
                role: 'Фронтенд-разработчик',
                skills: 'Верстка, оптимизация, интеграции'
              }
            ].map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/40 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.skills}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2" data-cta="team-telegram">
              <Icon name="Send" size={20} />
              Telegram
            </Button>
            <Button size="lg" variant="outline" className="gap-2" data-cta="team-whatsapp">
              <Icon name="MessageCircle" size={20} />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="faq">
        <div className="container mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center text-foreground mb-16">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                {
                  q: 'Какие сроки разработки?',
                  a: 'В среднем лендинг готов за 7–21 день в зависимости от сложности: брифинг и прототип — 2–3 дня, дизайн — 3–5 дней, верстка и тесты — 5–10 дней.'
                },
                {
                  q: 'Делаете ли правки после запуска?',
                  a: 'Да, в течение 14 дней после запуска включены бесплатные правки по ТЗ. Дополнительные правки и поддержка — в рамках пакета Growth или по отдельному соглашению.'
                },
                {
                  q: 'Что нужно от клиента?',
                  a: 'Заполненный бриф, доступ к хостингу/домену (или помощь с регистрацией), логотип, фирменные цвета (при наличии), тексты и фото (либо мы подберём).'
                },
                {
                  q: 'Как происходит оплата?',
                  a: '25% — старт (анализ и прототип), 25% — после утверждения дизайна, 50% — перед запуском. Работаем по договору.'
                },
                {
                  q: 'Настраиваете рекламу и бюджет?',
                  a: 'Да, в пакете Performance входит настройка Яндекс.Директ, подбор ключевых слов, создание объявлений и еженедельная оптимизация. Рекламный бюджет оплачивается отдельно.'
                },
                {
                  q: 'Есть ли поддержка после запуска?',
                  a: 'В пакете Start — 14 дней гарантии. В Growth и Performance — полноценная поддержка: правки, обновления, консультации и мониторинг.'
                },
                {
                  q: 'Гарантируете ли SEO-результат?',
                  a: 'Мы делаем базовую SEO-подготовку: метатеги, микроразметку, оптимизацию скорости. Гарантировать позиции невозможно — это зависит от конкуренции и бюджета на продвижение.'
                }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} data-cta={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="brief">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-foreground mb-4">
                Получите бесплатный аудит
              </h2>
              <p className="text-lg text-muted-foreground">
                Проанализируем текущий сайт или дадим консультацию по структуре будущего лендинга
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Имя <span className="text-destructive">*</span>
                    </label>
                    <Input
                      required
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Телефон или Telegram <span className="text-destructive">*</span>
                    </label>
                    <Input
                      required
                      placeholder="+7 (999) 123-45-67 или @username"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Ниша или сайт
                    </label>
                    <Input
                      placeholder="Например: онлайн-школа, example.com"
                      value={formData.niche}
                      onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Комментарий
                    </label>
                    <Textarea
                      placeholder="Опишите вашу задачу или вопрос"
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="agree"
                      required
                      checked={formData.agreed}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                    />
                    <label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Согласен с{' '}
                      <a href="#" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>{' '}
                      и обработкой персональных данных
                    </label>
                  </div>
                  <Button type="submit" size="lg" className="w-full" data-cta="lead-submit">
                    Получить аудит
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Готов обсудить ваш проект?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Отвечаю в течение 10–30 минут
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2 font-semibold" data-cta="final-telegram">
              <Icon name="Send" size={20} />
              Telegram
            </Button>
            <Button size="lg" variant="outline" className="gap-2 font-semibold border-white text-white hover:bg-white/10" data-cta="final-whatsapp">
              <Icon name="MessageCircle" size={20} />
              WhatsApp
            </Button>
            <a href="tel:+79996571969" className="inline-block">
              <Button size="lg" variant="outline" className="gap-2 font-semibold border-white text-white hover:bg-white/10" data-cta="final-phone">
                <Icon name="Phone" size={20} />
                +7 (999) 657 19 69
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">&lt;&gt;</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-foreground">LP genius</div>
                  <div className="text-xs text-muted-foreground">Лендинги под ключ</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Создаём лендинги, которые приводят клиентов. Полный цикл: от анализа до запуска и поддержки.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-foreground mb-4">Навигация</h3>
              <nav className="flex flex-col gap-2">
                <a href="#experts" className="text-sm text-muted-foreground hover:text-primary transition">Эксперты</a>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition">Портфолио</a>
                <a href="#brief" className="text-sm text-muted-foreground hover:text-primary transition">Онлайн-бриф</a>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition">FAQ</a>
              </nav>
            </div>

            <div>
              <h3 className="font-heading font-bold text-foreground mb-4">Контакты</h3>
              <div className="space-y-3">
                <a href="tel:+79996571969" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
                  <Icon name="Phone" size={18} />
                  +7 (999) 657 19 69
                </a>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon">
                    <Icon name="Send" size={18} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="MessageCircle" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <div>© 2024 LP genius. Все права защищены</div>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-primary transition">Политика конфиденциальности</a>
                <a href="#" className="hover:text-primary transition">Согласие на обработку данных</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
