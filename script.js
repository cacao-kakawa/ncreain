// gen = 0 공통, 1/2/3 기수
const members = [
  {gen:1, name:"장현진", role:"1기 · 회장", channels:[
    {ch:"추억한장(Family by the sea)", url:"https://www.youtube.com/@Familybythesea-vk8uf", desc:"가족과의 추억 이야기", avatar:"https://yt3.googleusercontent.com/kCiPv6XI--qCx_-1UKAJ3IjSHdUMSh0Af_CcITXPDRa4VyNZOQmX41RDbynbey6mjwAzZ_jCMQ=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:1, name:"박남진", role:"1기 · 총무", channels:[
    {ch:"은빛남지니", url:"https://www.youtube.com/@은빛남지니", desc:"조기은퇴 후 일상을 공유하는 v-log", avatar:"https://yt3.googleusercontent.com/z338MBlBonm0_co6MUZ9L_Ex3FzV0BYbbI_UnDEsak7AFSzjZOKwFxQM-nAr9LXuYLdCUho1ig=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:1, name:"김지나", role:"1기 · 서기", channels:[
    {ch:"하농울텃 Catkko garden", url:"https://www.youtube.com/@Farmer_Catkko", desc:"게으른 농부 켓꼬(Catkko)의 텃밭 이야기", avatar:"https://yt3.googleusercontent.com/i33wgpy2i9tfcPZu19w5azcTOa2mRCQdcR8Xied1xs-p0RV8hkEZy092ONh9S9baCn8p_f3maQ=s160-c-k-c0x00ffffff-no-rj"},
    {ch:"공원냥모리 MORI", url:"https://www.youtube.com/@FromMORI", desc:"공원에서 납치된 고양이 '모리' 이야기", avatar:"https://yt3.googleusercontent.com/IYNSVGuodarZc3zIK-hlVR4J7zds9CfzES5bfTPX7PFJ3sdNhUJRHnI4mdVsHcZntUkLB29qxw=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:1, name:"임지연", role:"1기 · SNS관리", channels:[
    {ch:"Moonlight_sweetdream", url:"https://www.youtube.com/@Moonlight_sweetdream", desc:"대화없는 ASMR 채널", avatar:"https://yt3.googleusercontent.com/04gtxKm6Bh035JXSTa9bGN_jdyarxuUgd7u4d6XBcsyFRJ9-NeSwoXeEZ9n2btPDKCVCCmOn=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:1, name:"김후남", role:"1기 · 정회원", channels:[
    {ch:"카카와 초콜릿 스튜디오", url:"https://www.youtube.com/@kakawachocolate", desc:"초콜릿 전문 채널", avatar:"https://yt3.googleusercontent.com/5NTR2u53HXeE2Zb4mYQ-AOF8UMu_Ru1R1bSj9Y59jkUIZCoYifarRSQzfA2f20dUG8bw-s3Z=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:1, name:"이지형", role:"1기 · 정회원", channels:[
    {ch:"정리못난이", url:"https://www.youtube.com/@happyorganize", desc:"정리못난이에서 정리왕되기", avatar:"https://yt3.googleusercontent.com/k0bT1Qub9cIjmDL2KE31um0vMNE3g1UtFUoEjCOgnh-6xXOQJ4CUAWDnb-51XKBtkyvGh6BRGQ=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:2, name:"공화영", role:"2기 · 기수장", channels:[
    {ch:"집나간 엘리", url:"https://www.youtube.com/@ellie_magic", desc:"엘리만의 마법 같은 여행 속으로", avatar:"https://yt3.googleusercontent.com/tClcBi9eyZyeHYZR5u1vEBwNBsn_ovA-QJ6A5w6o63jK3mf-XQExy9Ic15e_gihBwNjJ7bMF=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:2, name:"노태희", role:"2기 · 정회원", channels:[
    {ch:"오늘 the 반짝", url:"https://www.youtube.com/@꽁쿡쿡-k4z", desc:"평범한 하루, 그 안의 작은 반짝임을 기록", avatar:"https://yt3.googleusercontent.com/sAhEBdTfLl36WIoCRPWD2BpUmmBdAjlV2Cdl6nUk3pEvTGGRsV08galCdA99ZfXTvhIuTn01=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:2, name:"박시원", role:"2기 · 정회원", channels:[
    {ch:"parksisis", url:"https://www.youtube.com/@parksisisi", desc:"삼남매와 엄마의 말레이시아 정착기", avatar:"https://yt3.googleusercontent.com/ZthNy-LUU9cgNbzlmrVzS3TtpAmxObUdUk5wUiYJygKDyXTS0b9oQxzQsz91LqQsPl9qgPGCSBw=s160-c-k-c0x00ffffff-no-rj"},
    {ch:"시원쏘콜", url:"https://www.youtube.com/@siwon_socool", desc:"시원 아줌마의 인생 성장 채널", avatar:"https://yt3.googleusercontent.com/RKhbc2OZhM-vi8DwX8HjPngCNwGGy7HFolhfh9as-q7a1oLnDt6vkEplF_4c7MRDtTyM03lA=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:2, name:"방재샘", role:"2기 · 정회원", channels:[
    {ch:"요르신", url:"https://www.youtube.com/@yorsin83", desc:"아빠를 위해 딸이 요리를 가르쳐주는 채널", avatar:"https://yt3.googleusercontent.com/6q4yk18KRUAcMXowZcQf6SgYtt4w2GkOla_vTDUbZUO1N_x_55auyQr9H4DcmtyjZmOZGxzH=s160-c-k-c0x00ffffff-no-rj"},
    {ch:"새샘 밀프렙", url:"https://www.youtube.com/@sae.saem.mealprep", desc:"게으른 주부의 꼼수 집밥 밀프렙!", avatar:"https://yt3.googleusercontent.com/1kA2yeAPTMsoCKn3D5c_tJZfe9m_DyAlfAcAzYLff5VP9yGPYqhfZ9fesyiXoWkWrd9nFkDv=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:2, name:"유명자", role:"2기 · 정회원", channels:[
    {ch:"작은하루큰이야기", url:"https://www.youtube.com/@작은하루큰이야기", desc:"엄마와 아들의 일상기록 이야기", avatar:"https://yt3.googleusercontent.com/BxpgCpMaBrB7JF4PDM-YiZQBc5P5OzZFIgnF06QtWKRMe6I1eQKTRxAIsQ1dEg6UohQMN1983Iw=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:2, name:"정해선", role:"2기 · 정회원", channels:[
    {ch:"빵우리의 놀이터", url:"https://www.youtube.com/@빵우리의놀이터", desc:"AI 활용 유튜브채널 (음악, 영상, 그림)", avatar:"https://yt3.googleusercontent.com/lmWE9bB-U6jafoAXBSWJfq80euQ5o7r1SX6859LlT_kSTI45_JtGsq3BeppPMnhRu1ba_fILoA=s160-c-k-c0x00ffffff-no-rj"},
    {ch:"sunnyJone-써니제이원", url:"https://www.youtube.com/@sunnyJone-써니제이원", desc:"써니제이원의 여행 일기", avatar:"https://yt3.googleusercontent.com/oN75ldLQtXmBWu3kOTAiqUWR3HNY5vBuFowkQEpCocsxUgfpc17s2rnjFmB-MLbYBzSSZ0i6FA=s160-c-k-c0x00ffffff-no-rj"}
  ]},
   {gen:3, name:"김세민", role:"3기 · 기수장", channels:[
    {ch:"베이글 에디터 | Bagel editor", url:"https://www.youtube.com/@BagelEditor", desc:"일상 브이로그", avatar:"https://yt3.googleusercontent.com/weV18Rd9-lAyLgEeA00Ol0zAMn1JRkhetXoIlrxSTvfjK5ei-E2W1BptQyJZ3MUUikBGCSwC-A=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:3, name:"김욱진", role:"3기 · 정회원", channels:[
    {ch:"안녕! 욱진", url:"https://www.youtube.com/@wookjin_daily", desc:"감성 브이로그 & 팟캐스트", avatar:"https://yt3.googleusercontent.com/rKSoicJtjp_pJR081NqXAFAIRoJNLbn7yYe0Yff7Q8xihvMB6RXaNcbWDDptBGw4Cea6FGPwPw=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:3, name:"김홍수", role:"3기 · 정회원", channels:[
    {ch:"취미랄라", url:"https://www.youtube.com/@korhobbylife", desc:"취미 생활 채널", avatar:"https://yt3.googleusercontent.com/z7sNZ31IOZiyFQq5whtYigNnnxpWcboRNU_OPNILJQK81LGdcqTCPo7463_PjwrZRZQnbv7AbA=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:3, name:"성일경", role:"3기 · 정회원", channels:[
    {ch:"달걀지도사", url:"https://www.youtube.com/@달걀지도사", desc:"소상공인/자영업자를 위한 현실형 경영컨설팅 채널", avatar:"https://yt3.googleusercontent.com/Nmycyw2zi6T4jQULwaYXrLQR3JtenjVAzAPML1EVq6ObO2OmfO8qlKdOVkW37VazJpRXXwgOiQ=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:3, name:"윤혜민", role:"3기 · 정회원", channels:[
    {ch:"렛츠드럼", url:"https://www.youtube.com/@letsdrum", desc:"렛츠드럼 공식 채널", avatar:"https://yt3.googleusercontent.com/BlRntoOZcN_e0E84GAYopVIVpXydlOD87qNjdyL02HGxGOGLHF6nC7GCgUy1nZ8IUIC_g9-Iag=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:3, name:"이채영", role:"3기 · 정회원", channels:[
    {ch:"자깡로그", url:"https://www.youtube.com/@자깡이-f9c", desc:"일상 브이로그", avatar:"https://yt3.googleusercontent.com/pf8u3GJ_z64co4CUjOssrm6S3dGt0R2aATJlEMQnYBycf0q10LI73FpwEJzxJpwj9nNGqe6Q4w=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:3, name:"최유환", role:"3기 · 정회원", channels:[
    {ch:"숲과놀자", url:"https://www.youtube.com/@forestwith", desc:"숲 전문 채널", avatar:"https://yt3.googleusercontent.com/J6yDzzyS0n1dswVI2t-zn3D9eSgIjFQzNAxghYlmhXqanzOSnWApJZhLPNLtQ0eL6C5VXTOM=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:3, name:"이상훈", role:"3기 · 정회원", channels:[
    {ch:"훈훈생생 은퇴이야기", url:"https://www.youtube.com/@hoonretirementstory", desc:"은퇴(인생 후반전)자를 위한 정보채널", avatar:"https://yt3.googleusercontent.com/pkzWH3ifyEGcv2ZS1oq8yDBj7PbFkAemerXqCpHg_K8IB4pdK8ZFBEjlRjyLvzFVonqxFPF37g=s160-c-k-c0x00ffffff-no-rj"}
  ]},

  {gen:3, name:"유경아", role:"3기 · 정회원", channels:[
    {ch:"라이크이슬 LIKE ISL", url:"https://www.youtube.com/@LIKE_ISL", desc:"운동, 일상 브이로그", avatar:"https://yt3.googleusercontent.com/0x9OgRmal-seFB2CI_nNACZT160y-zdgPLigjWTrUUIse632AoKbztkFoCW9Hb2zkU0eaZsD=s160-c-k-c0x00ffffff-no-rj"}
  ]},
  {gen:3, name:"김정란", role:"3기 · 정회원", channels:[
    {ch:"김정란채널", url:"https://www.youtube.com/@김정란-x4f", desc:"일상 브이로그", avatar:"https://yt3.googleusercontent.com/FXzV_qkkmIcOf5CU83nuAHAK2QuX90QBZflwOtcTCwlbRn4v7rcR8BN7f3uJHvUObj-pXr4kx9g=s160-c-k-c0x00ffffff-no-rj"}
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
      cards.push({gen:m.gen, role:m.role, ch:c.ch, url:c.url, desc:c.desc, avatar:c.avatar});
    });
  });

  grid.innerHTML = cards.map(c=>{
    const color = genColor[c.gen];
    const avatarHtml = c.avatar
      ? `<img class="avatar" src="${c.avatar}" alt="" loading="lazy">`
      : `<span class="avatar avatar-fallback">${c.ch.charAt(0)}</span>`;
    return `
    <div class="card-slot">
      <a class="card" style="--band:${color}" href="${c.url}" target="_blank" rel="noopener">
        <span class="badge${c.gen===2?' on-yellow':''}" style="--band:${color}">${genLabel[c.gen]}</span>
        ${avatarHtml}
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
