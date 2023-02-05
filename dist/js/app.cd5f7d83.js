(function(){"use strict";var e={8132:function(e,t,a){var i=a(9242),n=a(3396),s=a(7139),o=a(4870);const r={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},l=(0,n._)("path",{d:"M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"},null,-1),c=[l];function u(e,t){return(0,n.wg)(),(0,n.iD)("svg",r,c)}var h=a(89);const d={},p=(0,h.Z)(d,[["render",u]]);var f=p;const v={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},m=(0,n._)("path",{d:"M18.5 32h3V16h-3Zm8 0h3V16h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"},null,-1),g=[m];function w(e,t){return(0,n.wg)(),(0,n.iD)("svg",v,g)}const k={},y=(0,h.Z)(k,[["render",w]]);var _=y;const b={xmlns:"http://www.w3.org/2000/svg",height:"48",width:"48"},S=(0,n._)("path",{d:"M22.55 41.9q-6.15-.5-10.35-5.05Q8 32.3 8 26.05q0-3.85 1.775-7.25t4.975-5.55l2.15 2.15q-2.8 1.65-4.35 4.525Q11 22.8 11 26.05q0 5 3.3 8.65 3.3 3.65 8.25 4.2Zm3 0v-3q5-.6 8.25-4.225 3.25-3.625 3.25-8.625 0-5.45-3.775-9.225Q29.5 13.05 24.05 13.05h-1l3 3-2.15 2.15-6.65-6.65L23.9 4.9l2.15 2.15-3 3h1q6.7 0 11.35 4.675 4.65 4.675 4.65 11.325 0 6.25-4.175 10.8Q31.7 41.4 25.55 41.9Z"},null,-1),T=[S];function Z(e,t){return(0,n.wg)(),(0,n.iD)("svg",b,T)}const z={},C=(0,h.Z)(z,[["render",Z]]);var q=C,U=a(7327),Q=a.p+"media/countdown.047640be.wav";const x=new Audio(Q);class O{constructor(){(0,U.Z)(this,"options",{workTime:10,breakTime:20}),(0,U.Z)(this,"state",(0,o.iH)("stopping")),(0,U.Z)(this,"isBreakTime",!1),(0,U.Z)(this,"currentCounter",(0,o.iH)(this.options.workTime)),(0,U.Z)(this,"_interval",void 0),(0,U.Z)(this,"_timeout",void 0)}start(){this._clear(),x.play(),this.state.value="prepare",this._timeout=setTimeout((()=>{this.state.value="running",this._interval=setInterval((()=>{this.currentCounter.value<=0?(this.isBreakTime=!this.isBreakTime,this.isBreakTime?this.currentCounter.value=this.options.breakTime:this.currentCounter.value=this.options.workTime):4===this.currentCounter.value&&x.play(),this.currentCounter.value--}),1e3)}),3e3)}stop(){this.state.value="suspended",this._clear()}reset(){this.state.value="stopping",this._clear(),this.isBreakTime=!1,this.currentCounter.value=this.options.workTime}_clear(){clearInterval(this._interval),clearTimeout(this._timeout),x.pause(),x.currentTime=0}}var B=new O,M=(0,n.aZ)({__name:"TagComponent",emits:["click"],setup(e,{emit:t}){return(e,a)=>((0,n.wg)(),(0,n.iD)("button",{onClick:a[0]||(a[0]=e=>t("click",e))},[(0,n.WI)(e.$slots,"default")]))}});const I=(0,h.Z)(M,[["__scopeId","data-v-1ff866a6"]]);var j=I,D=JSON.parse('{"name":"English","titles":{"common":"Ready to work?","focus":"Focus","break":"Break","pause":"Pause","prepare":"Prepare"}}'),F=JSON.parse('{"name":"Русский","titles":{"common":"Готовы к работе?","focus":"Фокус","break":"Перерыв","pause":"Пауза","prepare":"Подготовка"}}'),N=JSON.parse('{"tipName":"Tip","tips":["To improve concentration and productivity, develop healthy habits, such as enough sleep and physical exercises.","multitasking and social networks can be distracted during work, so it is better to limit them.","breaks are important in order to remain concentrated - try the method of blocking the time such as the tomato method.","The lists of cases not only help you prioritize, what tasks you need to complete in the first place, but you can also a record of incomplete affairs.","If you feel drowsiness, drink a cup of coffee or other substance containing caffeine. Studies show that caffeine in moderate doses can help increase the concentration of attention, especially those of us who are tired.","The tomato method is a time blocking technique that can help divide your tasks into managed minute intervals.","Start the practice of meditation. Some data indicate that several minutes of meditation per day can improve your attention.","Eat products that improve cognitive abilities. What you eat can affect the work of your brain and body. Simple carbohydrates and refined sugar cause a surge of energy, which quickly follows fatigue.","Notifications are one of the main sources of distraction - these pings and calls distract you from work and offer you to check your texts, email or Slack.","Make a list of things. If you want to better concentrate, you need to make a list of things every day so that you have a tangible list of things that need to be celebrated when you finish and you feel more direction to achieve your goals.","Arrange priorities in your tasks. Do not forget to fulfill the most creative or complex tasks in the morning when you are full of energy and motivation.","Support organized space. Maintaining an organized space is the key to the ability to concentrate.","Less multitasking. Although many people think that multitasking is a great way to achieve goals faster and perform two or three things at the same time, multitasking actually harms your concentration.","If you want to be as focused and productive as possible, you should predict your needs in advance before starting work or study","Avoid distracting factors on the Internet. The Internet can be filled with interesting and valuable information, but when it comes to work, this can take a lot of time."]}'),$=JSON.parse('{"tipName":"Совет","tips":["Чтобы улучшить концентрацию и продуктивность, выработайте здоровые привычки, такие как достаточное количество сна и физические упражнения.","Многозадачность и социальные сети могут отвлекать во время работы, поэтому лучше их ограничить.","Перерывы важны для того, чтобы оставаться сосредоточенным — попробуйте метод блокировки времени, такой как метод помидора.","Списки дел не только помогают вам расставить приоритеты, какие задачи вам нужно выполнить в первую очередь, но также могут служить записью незавершенных дел.","Если вы чувствуете сонливость, выпейте чашку кофе или другого вещества , содержащего кофеин . Исследования показывают, что кофеин в умеренных дозах может помочь повысить концентрацию внимания , особенно у тех из нас, кто устал.","Метод помидора — это техника блокировки времени, которая может помочь разделить ваши задачи на управляемые минутные интервалы.","Начните практику медитации. Некоторые данные свидетельствуют о том, что несколько минут медитации в день могут улучшить ваше внимание.","Ешьте продукты, которые улучшают познавательные способности. То, что вы едите, может повлиять на работу вашего мозга и тела. Простые углеводы и рафинированный сахар вызывают прилив энергии, за которым быстро следует усталость.","Уведомления являются одним из основных источников отвлечения — эти пинги и звонки отвлекают вас от работы и предлагают вам проверить свои тексты, электронную почту или Slack.","Составьте список дел. Если вы хотите лучше сосредоточиться, вам нужно каждый день составлять список дел, чтобы у вас был осязаемый список вещей, которые нужно отмечать, когда вы закончите, и вы чувствовали больше направления для достижения своих целей.","Расставляйте приоритеты в своих задачах. Не забывайте выполнять самые творческие или сложные задачи утром, когда вы полны энергии и мотивации.","Поддерживайте организованное пространство. Поддержание организованного пространства является ключом к способности сосредоточиться.","Меньше многозадачности. Хотя многие люди думают, что многозадачность — отличный способ быстрее достигать целей и выполнять два или три дела одновременно, многозадачность на самом деле вредит вашей концентрации.","Если вы хотите быть как можно более сосредоточенным и продуктивным, вам следует заранее предугадать свои потребности, прежде чем приступить к работе или учебе","Избегайте отвлекающих факторов в Интернете. Интернет может быть наполнен интересной и ценной информацией, но когда дело доходит до выполнения работы, это может отнимать много времени"]}');class L{constructor(){(0,U.Z)(this,"list",{en:{...D,...N},ru:{...F,...$}}),(0,U.Z)(this,"_lang",(0,o.iH)(this.defaultLang)),(0,U.Z)(this,"locales",(0,n.Fl)((()=>this.list[this._lang.value])))}get lang(){return this._lang.value}get defaultLang(){const e=window.navigator.language.slice(0,2);return Object.keys(this.list).includes(e)?e:"en"}setLocale(e){this._lang.value=e,console.log("lang",this._lang.value)}}var P=new L;const W={class:"circle-bar"},A=["width","height","viewPort"],H=["r","cx","cy","stroke-width","stroke-dasharray"],E=["r","cx","cy","stroke-width","stroke-dasharray","stroke-dashoffset"];var J=(0,n.aZ)({__name:"CircleBar",props:{value:{default:.25},seconds:{default:125},size:{default:200},thin:{default:16},fontSize:{default:16}},setup(e){const t=e,a=(0,n.Fl)((()=>Math.PI*t.size)),i=(0,n.Fl)((()=>(1-t.value)*a.value)),r=(0,n.Fl)((()=>l(Math.floor(t.seconds/60))+":"+l(Math.round(t.seconds%60))));function l(e){return e<10?`0${e}`:e}return(l,c)=>((0,n.wg)(),(0,n.iD)("div",W,[((0,n.wg)(),(0,n.iD)("svg",{id:"svg",width:e.size,height:e.size,viewPort:`0 0 ${e.size/2} ${e.size/2}`,version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("circle",{r:e.size/2-e.thin/2,cx:""+e.size/2,cy:""+e.size/2,fill:"transparent","stroke-width":`${e.thin}px`,"stroke-dasharray":(0,o.SU)(a),"stroke-dashoffset":"0"},null,8,H),(0,n._)("circle",{id:"bar",r:e.size/2-e.thin/2,cx:""+e.size/2,cy:""+e.size/2,fill:"transparent","stroke-width":`${e.thin}px`,"stroke-dasharray":(0,o.SU)(a),"stroke-dashoffset":`${(0,o.SU)(i)}px`},null,8,E)],8,A)),(0,n._)("div",{class:"legend",style:(0,s.j5)(`font-size: ${t.fontSize}px`)},(0,s.zw)((0,o.SU)(r)),5)]))}});const V=(0,h.Z)(J,[["__scopeId","data-v-2e029078"]]);var G=V,K=(0,n.aZ)({__name:"TipComponent",setup(e){const t=(0,o.iH)(0);function a(){return Math.floor(Math.random()*P.locales.value.tips.length)}return(0,n.bv)((()=>{t.value=a()})),(e,a)=>((0,n.wg)(),(0,n.iD)("p",null,(0,s.zw)((0,o.SU)(P).locales.value.tipName)+": "+(0,s.zw)((0,o.SU)(P).locales.value.tips[t.value]),1))}});const R=(0,h.Z)(K,[["__scopeId","data-v-85428c30"]]);var Y=R;const X={class:"info"};var ee=(0,n.aZ)({__name:"Card",props:{seconds:null,value:null,isBreakTime:{type:Boolean},state:null},setup(e){const t=e,a=(0,n.Fl)((()=>"running"===t.state?t.isBreakTime?P.locales.value.titles["break"]:P.locales.value.titles.focus:"suspended"===t.state?P.locales.value.titles.pause:"prepare"===t.state?P.locales.value.titles.prepare:P.locales.value.titles.common));return(i,r)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)(["card",{showGif:!e.isBreakTime&&"running"===e.state}])},[(0,n._)("div",X,[(0,n._)("section",null,[(0,n._)("h2",null,(0,s.zw)((0,o.SU)(a)),1),"running"!==e.state&&"prepare"!==e.state?((0,n.wg)(),(0,n.j4)(Y,{key:t.state})):(0,n.kq)("",!0)]),(0,n.Wm)(G,{radius:20,thin:10,size:100,fontSize:24,seconds:e.seconds,value:e.value},null,8,["seconds","value"])])],2))}});const te=(0,h.Z)(ee,[["__scopeId","data-v-48ff4600"]]);var ae=te;const ie={class:"app"},ne={class:"wrap"},se={class:"lang"},oe={class:"tag-list"},re={class:"manage"};var le=(0,n.aZ)({__name:"App",setup(e){const t=[[20,5],[25,5],[30,10],[40,20],[45,15]];function a(e){B.options.workTime=60*t[e][0],B.options.breakTime=60*t[e][1],B.reset()}const i=(0,n.Fl)((()=>{const e=B.isBreakTime?B.options.breakTime:B.options.workTime,t=B.currentCounter.value;return 1-Math.floor(t/e*100)/100}));return(0,n.wF)((()=>{a(0)})),(e,r)=>((0,n.wg)(),(0,n.iD)("div",ie,[(0,n._)("div",ne,[(0,n._)("section",se,[(0,n._)("span",{class:(0,s.C_)({active:"en"===(0,o.SU)(P).lang}),onClick:r[0]||(r[0]=e=>(0,o.SU)(P).setLocale("en"))},"English",2),(0,n._)("span",{class:(0,s.C_)({active:"ru"===(0,o.SU)(P).lang}),onClick:r[1]||(r[1]=e=>(0,o.SU)(P).setLocale("ru"))},"Русский",2)]),(0,n.Wm)(ae,{value:(0,o.SU)(i),seconds:(0,o.SU)(B).currentCounter.value,isBreakTime:(0,o.SU)(B).isBreakTime,state:(0,o.SU)(B).state.value},null,8,["value","seconds","isBreakTime","state"]),(0,n._)("div",oe,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(t,((e,t)=>(0,n.Wm)(j,{onClick:e=>a(t),key:t},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e[0])+"/"+(0,s.zw)(e[1]),1)])),_:2},1032,["onClick"]))),64))]),(0,n._)("div",re,["stopping"===(0,o.SU)(B).state.value||"suspended"===(0,o.SU)(B).state.value?((0,n.wg)(),(0,n.j4)(f,{key:0,onClick:r[2]||(r[2]=e=>(0,o.SU)(B).start()),fill:"white"})):((0,n.wg)(),(0,n.j4)(_,{key:1,onClick:r[3]||(r[3]=e=>(0,o.SU)(B).stop()),fill:"white"})),(0,n.Wm)(q,{onClick:r[4]||(r[4]=e=>(0,o.SU)(B).reset()),fill:"white"})])])]))}});const ce=le;var ue=ce;(0,i.ri)(ue).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],s=e[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,o=i[0],r=i[1],l=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var u=l(a)}for(t&&t(i);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},i=self["webpackChunkpomodoro_timer"]=self["webpackChunkpomodoro_timer"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(8132)}));i=a.O(i)})();
//# sourceMappingURL=app.cd5f7d83.js.map