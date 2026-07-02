// gen = 0 공통, 1/2/3 기수
const members = [
  {gen:1, name:"장현진", role:"1기 · 회장", channels:[
    {ch:"추억한장(Family by the sea)", url:"https://www.youtube.com/@Familybythesea-vk8uf", desc:"가족과의 추억 이야기"}
  ]},
  {gen:1, name:"박남진", role:"1기 · 총무", channels:[
    {ch:"은빛남지니", url:"https://www.youtube.com/@은빛남지니", desc:"조기은퇴 후 일상을 공유하는 v-log"}
  ]},
  {gen:1, name:"김지나", role:"1기 · 서기", channels:[
    {ch:"하농울텃 Catkko garden", url:"https://www.youtube.com/@Farmer_Catkko", desc:"게으른 농부 켓꼬(Catkko)의 텃밭 이야기"},
    {ch:"공원냥모리 MORI", url:"https://www.youtube.com/@FromMORI", desc:"공원에서 납치된 고양이 '모리' 이야기"}
  ]},
  {gen:1, name:"임지연", role:"1기 · SNS관리", channels:[
    {ch:"Moonlight_sweetdream", url:"https://www.youtube.com/@Moonlight_sweetdream", desc:"대화없는 ASMR 채널"}
  ]},
  {gen:1, name:"김후남", role:"1기 · 정회원", channels:[
    {ch:"카카와 초콜릿 스튜디오", url:"https://www.youtube.com/@kakawachocolate", desc:"초콜릿 전문 채널"}
  ]},
  {gen:1, name:"이지형", role:"1기 · 정회원", channels:[
    {ch:"정리못난이", url:"https://www.youtube.com/@happyorganize", desc:"정리못난이에서 정리왕되기"}
  ]},
  {gen:2, name:"공화영", role:"2기 · 기수장", channels:[
    {ch:"집나간 엘리", url:"https://www.youtube.com/@ellie_magic", desc:"엘리만의 마법 같은 여행 속으로"}
  ]},
  {gen:2, name:"노태희", role:"2기 · 정회원", channels:[
    {ch:"오늘 the 반짝", url:"https://www.youtube.com/@꽁쿡쿡-k4z", desc:"평범한 하루, 그 안의 작은 반짝임을 기록"}
  ]},
  {gen:2, name:"박시원", role:"2기 · 정회원", channels:[
    {ch:"parksisis", url:"https://www.youtube.com/@parksisisi", desc:"삼남매와 엄마의 말레이시아 정착기"},
    {ch:"시원쏘콜", url:"https://www.youtube.com/@siwon_socool", desc:"시원 아줌마의 인생 성장 채널"}
  ]},
  {gen:2, name:"방재샘", role:"2기 · 정회원", channels:[
    {ch:"요르신", url:"https://www.youtube.com/@yorsin83", desc:"아빠를 위해 딸이 요리를 가르쳐주는 채널"},
    {ch:"새샘 밀프렙", url:"https://www.youtube.com/@sae.saem.mealprep", desc:"게으른 주부의 꼼수 집밥 밀프렙!"}
  ]},
  {gen:2, name:"유명자", role:"2기 · 정회원", channels:[
    {ch:"작은하루큰이야기", url:"https://www.youtube.com/@작은하루큰이야기", desc:"엄마와 아들의 일상기록 이야기"}
  ]},
  {gen:2, name:"정해선", role:"2기 · 정회원", channels:[
    {ch:"빵우리의 놀이터", url:"https://www.youtube.com/@빵우리의놀이터", desc:"AI 활용 유튜브채널 (음악, 영상, 그림)"},
    {ch:"sunnyJone-써니제이원", url:"https://www.youtube.com/@sunnyJone-써니제이원", desc:"써니제이원의 여행 일기"}
  ]},
  {gen:3, name:"김욱진", role:"3기 · 정회원", channels:[
    {ch:"안녕! 욱진", url:"https://www.youtube.com/@wookjin_daily", desc:"감성 브이로그 & 팟캐스트"}
  ]},
  {gen:3, name:"김홍수", role:"3기 · 정회원", channels:[
    {ch:"취미랄라", url:"https://www.youtube.com/@korhobbylife", desc:"취미 생활 채널"}
  ]},
  {gen:3, name:"성일경", role:"3기 · 정회원", channels:[
    {ch:"달걀지도사", url:"https://www.youtube.com/@달걀지도사", desc:"소상공인/자영업자를 위한 현실형 경영컨설팅 채널"}
  ]},
  {gen:3, name:"윤혜민", role:"3기 · 정회원", channels:[
    {ch:"렛츠드럼", url:"https://www.youtube.com/@letsdrum", desc:"렛츠드럼 공식 채널"}
  ]},
  {gen:3, name:"이채영", role:"3기 · 정회원", channels:[
    {ch:"자캉로그", url:"https://www.youtube.com/@자캉이-f9c", desc:"일상 브이로그"}
  ]},
  {gen:3, name:"최유환", role:"3기 · 정회원", channels:[
    {ch:"숲과놀자", url:"https://www.youtube.com/@forestwith", desc:"숲 전문 채널"}
  ]},
  {gen:3, name:"이상훈", role:"3기 · 정회원", channels:[
    {ch:"훈훈생생 은퇴이야기", url:"https://www.youtube.com/@hoonretirementstory", desc:"은퇴(인생 후반전)자를 위한 정보채널"}
  ]},
  {gen:3, name:"김세민", role:"3기 · 기수장", channels:[
    {ch:"베이글 에디터 | Bagel editor", url:"https://www.youtube.com/@BagelEditor", desc:"일상 브이로그"}
  ]},
  {gen:3, name:"유경아", role:"3기 · 정회원", channels:[
    {ch:"라이크이슬 LIKE ISL", url:"https://www.youtube.com/@LIKE_ISL", desc:"운동, 일상 브이로그"}
  ]},
  {gen:3, name:"김정란", role:"3기 · 정회원", channels:[
    {ch:"김정란채널", url:"https://www.youtube.com/@김정란-x4f", desc:"일상 브이로그"}
  ]},
];

const genColor = {1:"var(--c1)",2:"var(--c2)",3:"var(--c3)"};
const genLabel = {1:"1기",2:"2기",3:"3기"};

const grid = document.getElementById('grid');
const emptyMsg = document.getElementById('emptyMsg');
const countNum = document.getElementById('countNum');
let activeGen = "all";
let query = "";

function render(){
  const filtered = members.filter(m=>{
    const genOk = activeGen==="all" || String(m.gen)===activeGen;
    if(!genOk) return false;
    if(!query) return true;
    const q = query.toLowerCase();
    if(m.name.toLowerCase().includes(q)) return true;
    return m.channels.some(c=>c.ch.toLowerCase().includes(q));
  });

  const cards = [];
  filtered.forEach(m=>{
    m.channels.forEach(c=>{
      cards.push({gen:m.gen, role:m.role, ch:c.ch, url:c.url, desc:c.desc});
    });
  });

  grid.innerHTML = cards.map(c=>{
    const color = genColor[c.gen];
    return `
    <div class="card-slot">
      <a class="card" style="--band:${color}" href="${c.url}" target="_blank" rel="noopener">
        <span class="badge${c.gen===2?' on-yellow':''}" style="--band:${color}">${genLabel[c.gen]}</span>
        <p class="role">${c.role}</p>
        <p class="channel-name">${c.ch}</p>
        <p class="desc">${c.desc}</p>
      </a>
    </div>`;
  }).join('');

  countNum.textContent = cards.length;
  emptyMsg.style.display = cards.length===0 ? 'block' : 'none';
}

document.getElementById('filters').addEventListener('click', (e)=>{
  const btn = e.target.closest('.chip');
  if(!btn) return;
  activeGen = btn.dataset.key;
  document.querySelectorAll('.chip').forEach(c=>c.dataset.active = (c===btn));
  render();
});

document.getElementById('searchInput').addEventListener('input', (e)=>{
  query = e.target.value.trim();
  render();
});

render();
