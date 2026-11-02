import Footer from "../components/Footer.tsx";

const features = [
  {
    title: "自由定制棋盘",
    text: "支持快速改写规则、任务、场景和结局，适合情侣互动、朋友聚会与线上活动。",
  },
  {
    title: "多阶段互动内容",
    text: "内置恋爱、情趣、放松、挑战等不同风格，轻松切换不同氛围与玩法节奏。",
  },
  {
    title: "一键接入平台",
    text: "可配合小程序、公众号、App 和个人网站使用，适合作为轻量化商业化落地方案。",
  },
];

const games = [
  {
    name: "飞行棋",
    href: "/fxq/index.html",
    description: "经典盘面玩法，适合轻松的陪伴和欢笑。",
  },
  {
    name: "任务卡牌",
    href: "/card",
    description: "抽卡完成任务，增加互动节奏和惊喜。",
  },
  {
    name: "姿势卡牌",
    href: "/position",
    description: "适合情趣、亲密与派对氛围的随机玩法。",
  },
  {
    name: "姿势大全",
    href: "/positions",
    description: "快速查看和使用各类互动内容，方便开局。",
  },
];

export default function Home() {
  return (
    <div class="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white">
      <header class="border-b border-pink-200/30 bg-pink-900/10 backdrop-blur-sm">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" class="flex items-center gap-3 font-black tracking-wide">
            <img src="/logo.png" class="h-12 w-12 rounded-full border-2 border-white/60" />
            <span>17fei.fun</span>
          </a>
          <nav class="hidden items-center gap-6 text-sm md:flex">
            <a href="/card" class="hover:text-pink-100">任务卡牌</a>
            <a href="/position" class="hover:text-pink-100">姿势卡牌</a>
            <a href="/about" class="hover:text-pink-100">关于</a>
          </nav>
        </div>
      </header>

      <main class="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <section class="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div class="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium">
              情侣互动 · 轻游戏 · 自由定制
            </div>
            <h1 class="text-4xl font-black leading-tight md:text-6xl">
              让陪伴更轻松，
              <span class="text-pink-100">让游戏更有趣</span>
            </h1>
            <p class="mt-5 max-w-xl text-base text-pink-50 md:text-lg">
              17fei.fun 提供一套适合情侣、朋友与小圈子使用的互动玩法集合。
              结合飞行棋、任务卡牌与姿势卡牌，让每次开局更有惊喜、更容易开始。
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <a
                href="/fxq/index.html"
                class="rounded-full bg-white px-6 py-3 font-bold text-pink-600 shadow-lg transition hover:scale-[1.02]"
              >
                进入游戏
              </a>
              <a
                href="/about"
                class="rounded-full border border-white/50 bg-pink-500/20 px-6 py-3 font-bold transition hover:bg-pink-500/30"
              >
                了解更多
              </a>
            </div>

            <div class="mt-8 flex flex-wrap gap-6 text-sm text-pink-50">
              <div>
                <div class="text-2xl font-black">4</div>
                <div>经典玩法</div>
              </div>
              <div>
                <div class="text-2xl font-black">100%</div>
                <div>前端轻量</div>
              </div>
              <div>
                <div class="text-2xl font-black">3+</div>
                <div>场景模板</div>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
            <img src="/demo.jpeg" alt="17fei game preview" class="h-full w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section class="mt-20">
          <div class="mb-8 text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">GAME LIST</p>
            <h2 class="mt-2 text-3xl font-black md:text-4xl">精选玩法</h2>
          </div>

          <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {games.map((game) => (
              <a
                key={game.name}
                href={game.href}
                class="rounded-2xl border border-white/20 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15"
              >
                <div class="mb-3 text-2xl font-black text-pink-100">{game.name}</div>
                <p class="text-sm leading-7 text-pink-50">{game.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section class="mt-20">
          <div class="mb-8 text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">FEATURES</p>
            <h2 class="mt-2 text-3xl font-black md:text-4xl">为什么选择它</h2>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} class="rounded-2xl border border-white/20 bg-pink-900/10 p-6">
                <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-black">
                  ✓
                </div>
                <h3 class="mb-3 text-xl font-bold">{feature.title}</h3>
                <p class="text-sm leading-7 text-pink-50">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section class="mt-20 rounded-3xl border border-white/20 bg-pink-900/20 p-8 text-center shadow-xl">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">READY TO START</p>
          <h2 class="mt-3 text-3xl font-black md:text-4xl">开启一场轻松愉快的互动体验</h2>
          <p class="mx-auto mt-4 max-w-2xl text-pink-50">
            适合情侣、朋友或个人经营，无需数据库即可直接部署，快速上线并持续使用。
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/fxq/index.html" class="rounded-full bg-white px-6 py-3 font-bold text-pink-600">立即体验</a>
            <a href="/about" class="rounded-full border border-white/50 px-6 py-3 font-bold">查看详情</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
