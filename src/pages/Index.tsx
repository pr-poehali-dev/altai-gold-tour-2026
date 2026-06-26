import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO = 'https://cdn.poehali.dev/projects/716acd90-5df6-418c-9dc5-4828f17b7e9c/files/314dbfcc-23f4-4348-b4c4-e66631244a1f.jpg';

const days = [
  {
    n: 1,
    title: 'Знакомство с Алтаем',
    auto: 100,
    walk: 5,
    spots: ['Этно-музей', 'Камышлинский водопад', 'Манжерок'],
    cover: 'https://cdn.poehali.dev/files/db32ffb9-f542-480d-bae9-af85bad1d8e3.jpeg',
    desc: 'Этно-музей, дегустация алтайских трав, лохматая ферма, мото-рафтинг и стеклянный мост Манжерока.',
  },
  {
    n: 2,
    title: 'Долина горных духов',
    auto: 80,
    walk: 7,
    spots: ['Остров Патмос', 'Водопад Че-Чкыш', 'Зубы дракона'],
    cover: 'https://cdn.poehali.dev/files/4a5603a7-cd79-408d-a253-95a2a5e9bfbe.jpeg',
    desc: 'Остров Патмос, Долина Горных духов, водопад Че-Чкыш, Ороктойский мост и осенние краски Катуни.',
  },
  {
    n: 3,
    title: 'Чуйский тракт',
    auto: 300,
    walk: 5,
    spots: ['Чуйский тракт', 'Каракольская долина', 'Зубровый питомник'],
    cover: 'https://cdn.poehali.dev/files/1f280227-ce8d-4183-8519-f8cdb23b38d7.jpeg',
    desc: 'Легендарный Чуйский тракт, Каракольская долина, зубровый питомник, перевал Чике-Таман и слияние Чуи и Катуни.',
  },
  {
    n: 4,
    title: 'Марс и горловое пение',
    auto: 180,
    walk: 7,
    spots: ['Гейзерное озеро', 'Алтайский Марс', 'Курайская степь'],
    cover: 'https://cdn.poehali.dev/files/e88e1f44-99d7-4abf-81ec-9b468df5b9d2.jpeg',
    desc: 'Гейзерное озеро, Северо-Чуйский хребет, Алтайский Марс, верблюды, Курайская степь и концерт горлового пения.',
  },
];

const team = [
  { name: 'Анна Светлова', role: 'Основатель и гид', icon: 'Mountain' },
  { name: 'Дмитрий Орлов', role: 'Водитель-проводник', icon: 'Car' },
  { name: 'Айгуль Тенгри', role: 'Этнограф', icon: 'Music' },
];

export default function Index() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  return (
    <div className="min-h-screen bg-background grain text-foreground overflow-x-hidden">
      {/* HERO */}
      <header className="relative h-screen flex items-end">
        <img src={HERO} alt="Горный Алтай" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-altai-stone/80 via-altai-stone/20 to-transparent" />
        <div className="relative z-10 container pb-20 md:pb-28 animate-fade-up">
          <p className="text-altai-cream/90 tracking-[0.3em] uppercase text-xs md:text-sm mb-4">Авторские путешествия</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-altai-cream leading-[0.9] font-bold">
            Мечта Тур
          </h1>
          <p className="mt-6 max-w-xl text-altai-cream/90 text-lg md:text-xl text-balance">
            Четыре дня по самым красивым местам Горного Алтая — реки цвета бирюзы, марсианские каньоны и горловое пение под звёздами.
          </p>
          <a href="#days">
            <Button className="mt-8 bg-altai-ochre hover:bg-altai-ochre/90 text-white rounded-full px-8 h-12 text-base">
              Смотреть маршрут
              <Icon name="ArrowDown" className="ml-2" size={18} />
            </Button>
          </a>
        </div>
      </header>

      {/* DAYS */}
      <section id="days" className="container py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-altai-teal tracking-[0.25em] uppercase text-xs mb-3">Программа тура</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">Что вас ждёт</h2>
        </div>

        <div className="space-y-24">
          {days.map((day, i) => (
            <div
              key={day.n}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className="md:[direction:ltr] relative">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img src={day.cover} alt={day.title} className="w-full h-[340px] md:h-[440px] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -top-5 -left-3 md:-left-5 bg-altai-ochre text-white font-display text-3xl font-bold w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg leading-none">
                  <span className="text-[10px] font-sans tracking-wider opacity-80">ДЕНЬ</span>
                  {day.n}
                </div>
              </div>

              <div className="md:[direction:ltr]">
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-4">{day.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 text-balance">{day.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {day.spots.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 bg-altai-teal/10 text-altai-teal px-3 py-1.5 rounded-full text-sm font-medium">
                      <Icon name="MapPin" size={14} />
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Icon name="Car" className="text-altai-ochre" size={20} />
                    <span className="text-sm">На авто <b>{day.auto} км</b></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Footprints" className="text-altai-moss" size={20} />
                    <span className="text-sm">Пешком <b>{day.walk} км</b></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-altai-teal/5 py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-altai-teal tracking-[0.25em] uppercase text-xs mb-3">С вами рядом</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold">Наша команда</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-altai-ochre/15 text-altai-ochre flex items-center justify-center mx-auto mb-4">
                  <Icon name={m.icon} size={28} />
                </div>
                <h3 className="font-display text-2xl font-semibold">{m.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          <div>
            <p className="text-altai-teal tracking-[0.25em] uppercase text-xs mb-3">Связаться</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Поехали с нами</h2>
            <p className="text-muted-foreground text-lg mb-8 text-balance">
              Оставьте заявку — расскажем о ближайших датах, ответим на вопросы и забронируем место.
            </p>
            <div className="space-y-4">
              <a href="tel:+79000000000" className="flex items-center gap-3 text-foreground hover:text-altai-teal transition-colors">
                <span className="w-10 h-10 rounded-full bg-altai-teal/10 text-altai-teal flex items-center justify-center"><Icon name="Phone" size={18} /></span>
                +7 (900) 000-00-00
              </a>
              <a href="mailto:hello@mechtatur.ru" className="flex items-center gap-3 text-foreground hover:text-altai-teal transition-colors">
                <span className="w-10 h-10 rounded-full bg-altai-teal/10 text-altai-teal flex items-center justify-center"><Icon name="Mail" size={18} /></span>
                hello@mechtatur.ru
              </a>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-altai-teal/10 text-altai-teal flex items-center justify-center"><Icon name="MapPin" size={18} /></span>
                Республика Алтай, г. Горно-Алтайск
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-altai-cream rounded-2xl p-8 shadow-sm space-y-4">
            <Input
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="h-12 bg-background border-border"
            />
            <Input
              placeholder="Телефон"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-12 bg-background border-border"
            />
            <Textarea
              placeholder="Когда хотите поехать?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="min-h-28 bg-background border-border"
            />
            <Button className="w-full h-12 bg-altai-ochre hover:bg-altai-ochre/90 text-white text-base rounded-full">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-altai-stone text-altai-cream/80 py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-2xl font-bold text-altai-cream">Мечта Тур</span>
          <span className="text-sm">© 2026 — Авторские путешествия по Горному Алтаю</span>
        </div>
      </footer>
    </div>
  );
}
