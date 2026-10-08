// 変換カードの真ん中の絵（SVG断片）。座標は中心0,0・単位mm・おおよそ±10に収める
// 絵柄: 平塗り・濃いグレーの輪郭線0.6mm・陰影なし。小さく刷っても潰れないよう細部は入れない
const OL='stroke="#3a3f47" stroke-width=".6" stroke-linejoin="round" stroke-linecap="round"';
const heat=(x,y)=>`<path d="M${x-2} ${y} q1 -1.2 0 -2.4 q-1 -1.2 0 -2.4 M${x} ${y} q1 -1.2 0 -2.4 q-1 -1.2 0 -2.4 M${x+2} ${y} q1 -1.2 0 -2.4 q-1 -1.2 0 -2.4" fill="none" stroke="#d6452b" stroke-width=".7" stroke-linecap="round"/>`;
const rays=(cx,cy,r1,r2,n,col,start=0,span=360)=>Array.from({length:n},(_,k)=>{const a=(start+span*k/(span===360?n:n-1))*Math.PI/180;return `<line x1="${(cx+r1*Math.cos(a)).toFixed(2)}" y1="${(cy+r1*Math.sin(a)).toFixed(2)}" x2="${(cx+r2*Math.cos(a)).toFixed(2)}" y2="${(cy+r2*Math.sin(a)).toFixed(2)}" stroke="${col}" stroke-width=".8" stroke-linecap="round"/>`}).join("");
const car=(body)=>`<path d="M-10 3 L-10 -0.5 Q-10 -2 -8 -2 L-5 -6 L3.5 -6 L7 -2 Q10 -2 10 0 L10 3 Z" fill="${body}" ${OL}/>
 <path d="M-4.3 -5 L-6.3 -2 L-1 -2 L-1 -5 Z M0 -5 L0 -2 L5.5 -2 L3.2 -5 Z" fill="#dff1fb" ${OL}/>
 <circle cx="-5.8" cy="3.4" r="2.3" fill="#3a3f47"/><circle cx="5.8" cy="3.4" r="2.3" fill="#3a3f47"/>
 <circle cx="-5.8" cy="3.4" r=".9" fill="#c9ced3"/><circle cx="5.8" cy="3.4" r=".9" fill="#c9ced3"/>`;
const ICONS={
"モーター":`<rect x="-7" y="-4.5" width="11" height="9" rx="1.6" fill="#b7bec5" ${OL}/>
 <rect x="4" y="-4" width="2.6" height="8" rx=".6" fill="#6b737c" ${OL}/>
 <rect x="6.6" y="-3" width="1.6" height="1.4" fill="#d9a400" ${OL}/><rect x="6.6" y="1.6" width="1.6" height="1.4" fill="#d9a400" ${OL}/>
 <rect x="-10.5" y="-.8" width="3.5" height="1.6" fill="#e3e6ea" ${OL}/>
 <path d="M-9.5 -4.2 a4.2 4.2 0 0 0 0 8.4" fill="none" stroke="#2f6fd6" stroke-width=".9" stroke-linecap="round"/>
 <path d="M-9.5 4.2 l1.3 .2 l-.9 1" fill="none" stroke="#2f6fd6" stroke-width=".9" stroke-linecap="round" stroke-linejoin="round"/>`,
"電気自動車":`${car("#5fa8e0")}<path d="M10 0.5 Q12 1 11.2 5 Q10.6 8 8 8" fill="none" stroke="#3a3f47" stroke-width=".7"/>
 <rect x="5.6" y="6.9" width="2.6" height="2.2" rx=".4" fill="#3a3f47"/>`,
"ホットプレート":`<rect x="-10" y="0" width="20" height="4.5" rx="1.2" fill="#e8e2d6" ${OL}/>
 <rect x="-8.5" y="-1.6" width="17" height="2" rx=".6" fill="#4a4f57" ${OL}/>
 <rect x="-12" y="1" width="2" height="1.6" rx=".5" fill="#4a4f57"/><rect x="10" y="1" width="2" height="1.6" rx=".5" fill="#4a4f57"/>
 <circle cx="6.5" cy="2.3" r=".8" fill="#d6452b"/>${heat(0,-3.5)}`,
"アイロン":`<path d="M-10 3 L7.5 3 Q10 3 9 0.5 Q7 -4.5 -1 -4.5 L-6 -4.5 Q-10 -4.5 -10 -0.5 Z" fill="#8fc0e6" ${OL}/>
 <path d="M-6.5 -4.5 Q-6.5 -8 -2.5 -8 L2.5 -8 Q5 -8 5 -5.5" fill="none" stroke="#3a3f47" stroke-width="1.5" stroke-linecap="round"/>
 <rect x="-10" y="3" width="19" height="1.2" fill="#c9ced3" ${OL}/>
 <path d="M-6 6.5 q.8 1 0 2 M-2 6.5 q.8 1 0 2 M2 6.5 q.8 1 0 2" fill="none" stroke="#9aa3ad" stroke-width=".7" stroke-linecap="round"/>`,
"蛍光灯":`<rect x="-9" y="-1.6" width="18" height="3.2" rx="1.6" fill="#fffbe0" ${OL}/>
 <rect x="-10.6" y="-1.3" width="1.8" height="2.6" rx=".4" fill="#9aa3ad" ${OL}/><rect x="8.8" y="-1.3" width="1.8" height="2.6" rx=".4" fill="#9aa3ad" ${OL}/>
 ${[-6,-2,2,6].map(x=>`<line x1="${x}" y1="-3.2" x2="${x}" y2="-5.6" stroke="#ef8a1f" stroke-width=".8" stroke-linecap="round"/><line x1="${x}" y1="3.2" x2="${x}" y2="5.6" stroke="#ef8a1f" stroke-width=".8" stroke-linecap="round"/>`).join("")}`,
"豆電球":`<path d="M-2.6 2 Q-5 -0.5 -5 -3.5 A5 5 0 0 1 5 -3.5 Q5 -0.5 2.6 2 Z" fill="#fff3a6" ${OL}/>
 <path d="M-1.2 1.8 L-1.2 -2 L0 -3.2 L1.2 -2 L1.2 1.8" fill="none" stroke="#9a7a00" stroke-width=".5"/>
 <rect x="-2.8" y="2" width="5.6" height="4.5" rx=".5" fill="#b7bec5" ${OL}/>
 <path d="M-2.8 3.5 h5.6 M-2.8 5 h5.6" stroke="#3a3f47" stroke-width=".4"/>
 <rect x="-1" y="6.5" width="2" height="1.4" fill="#4a4f57"/>
 ${rays(0,-3.5,6.4,8.6,5,"#ef8a1f",-170,160)}`,
"LEDライト":`<path d="M3 -4 L10.5 -7.5 L10.5 7.5 L3 4 Z" fill="#fff6b8" opacity=".9"/>
 <rect x="-10" y="-2" width="9" height="4" rx="1" fill="#3a6ea5" ${OL}/>
 <path d="M-1 -2 L3 -3.6 L3 3.6 L-1 2 Z" fill="#5a8ec5" ${OL}/>
 <rect x="-7" y="-2.6" width="2.2" height=".8" rx=".3" fill="#3a3f47"/>`,
"エレベーター":`<line x1="0" y1="-10" x2="0" y2="-5" stroke="#3a3f47" stroke-width=".8"/>
 <circle cx="0" cy="-9.5" r="1.4" fill="#9aa3ad" ${OL}/>
 <rect x="-5" y="-5" width="10" height="12" rx=".8" fill="#c9ced3" ${OL}/>
 <rect x="-3.6" y="-3.4" width="7.2" height="9.2" fill="#eef0f2" ${OL}/>
 <line x1="0" y1="-3.4" x2="0" y2="5.8" stroke="#3a3f47" stroke-width=".5"/>
 <path d="M-8 6 v-6 M8 6 v-6 M-8.2 -0.5 l.2 -1.2 l.2 1.2 M8 -1.7 l-.2 1.2 h.4 z" fill="none" stroke="#2e9e5b" stroke-width=".8" stroke-linecap="round"/>
 <path d="M-9.4 1 L-8 -1.6 L-6.6 1 M6.6 1 L8 -1.6 L9.4 1" fill="none" stroke="#2e9e5b" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/>`,
"充電（二次電池）":`<rect x="-6" y="-8" width="4" height="10" rx=".8" fill="#4caf6a" ${OL}/><rect x="2" y="-8" width="4" height="10" rx=".8" fill="#4caf6a" ${OL}/>
 <rect x="-4.9" y="-9" width="1.8" height="1" fill="#9aa3ad"/><rect x="3.1" y="-9" width="1.8" height="1" fill="#9aa3ad"/>
 <rect x="-9" y="0" width="18" height="6.5" rx="1.5" fill="#e3e6ea" ${OL}/>
 <circle cx="6" cy="3.3" r=".9" fill="#2e9e5b"/>
 <path d="M-9 3 Q-11 3 -11 6 L-11 9" fill="none" stroke="#3a3f47" stroke-width=".7"/>`,
"乾電池":`<rect x="-3.6" y="-7.5" width="7.2" height="15" rx="1" fill="#3a3f47" ${OL}/>
 <rect x="-3.6" y="-7.5" width="7.2" height="4.5" rx="1" fill="#d9a400" ${OL}/>
 <rect x="-1.3" y="-9.2" width="2.6" height="1.7" rx=".3" fill="#c9ced3" ${OL}/>
 <rect x="-2.6" y="-1" width="1.2" height="7" rx=".5" fill="#5a5f67"/>`,
"燃料電池":`<rect x="-9" y="-4.5" width="11" height="10" rx="1" fill="#c9ced3" ${OL}/>
 ${[-7,-5,-3,-1].map(x=>`<line x1="${x}" y1="-3" x2="${x}" y2="4" stroke="#7d8690" stroke-width=".6"/>`).join("")}
 <rect x="5" y="-8" width="4.4" height="14" rx="2.2" fill="#6fa8dc" ${OL}/>
 <path d="M2 0 L5 0" stroke="#3a3f47" stroke-width=".9"/>
 <rect x="6" y="-9.3" width="2.4" height="1.4" rx=".3" fill="#7d8690" ${OL}/>`,
"ガソリン自動車":`${car("#e0614b")}<rect x="6.6" y="-1.2" width="2" height="1.6" fill="#f6d36b" ${OL}/>
 <circle cx="-11.3" cy="1.8" r="1" fill="#c9ced3"/><circle cx="-12.6" cy="0.2" r=".7" fill="#dfe2e5"/>`,
"化学かいろ":`<rect x="-6" y="-6" width="12" height="13" rx="2" fill="#f4f1ea" ${OL}/>
 <rect x="-4" y="-4" width="8" height="9" rx="1" fill="#e6dccb" stroke="#b9ab92" stroke-width=".4"/>
 ${heat(0,-7)}`,
"石油ストーブ":`<rect x="-6" y="-6.5" width="12" height="14" rx="2" fill="#c9ced3" ${OL}/>
 <rect x="-4" y="-3" width="8" height="7" rx="1" fill="#3a3f47"/>
 <path d="M0 3.5 Q-2.8 1 -1 -1.8 Q-.4 .2 0 -.4 Q.8 -2.2 0.4 -2.6 Q3 0 2.3 2.2 Q1.8 3.5 0 3.5 Z" fill="#ef8a1f"/>
 <path d="M-4.5 -6.5 Q0 -9.5 4.5 -6.5" fill="none" stroke="#3a3f47" stroke-width=".9"/>
 <rect x="-6" y="7.5" width="12" height="1.2" fill="#7d8690"/>`,
"太陽光発電":`<circle cx="6.5" cy="-6.5" r="2.8" fill="#ef8a1f"/>${rays(6.5,-6.5,3.8,5.2,8,"#ef8a1f")}
 <path d="M-10 6 L-5.5 -2 L7 -2 L2.5 6 Z" fill="#2f5fa8" ${OL}/>
 <path d="M-8.5 3.3 L4 3.3 M-7 .7 L5.5 .7 M-6 6 L-1.5 -2 M-1.8 6 L2.7 -2" stroke="#9ec3ef" stroke-width=".45"/>
 <path d="M-2 6 L-2 8.5 M-6 8.5 L2 8.5" stroke="#3a3f47" stroke-width=".8" stroke-linecap="round"/>`,
"光合成":`<circle cx="6.5" cy="-6.5" r="2.8" fill="#ef8a1f"/>${rays(6.5,-6.5,3.8,5.2,8,"#ef8a1f")}
 <path d="M-8 8 C-9 0 -3 -5 4 -3 C3 4 -2 8 -8 8 Z" fill="#4caf6a" ${OL}/>
 <path d="M-8 8 L1 -1 M-4.5 4.5 L-4.6 1.3 M-2.6 2.6 L.5 2.5" stroke="#2e7d4a" stroke-width=".55" stroke-linecap="round"/>
 <path d="M3.5 -3.5 L1.2 -1.4 M5.5 -2 L3.4 .6" stroke="#ef8a1f" stroke-width=".6" stroke-dasharray="1 .8"/>`,
"蒸気機関車":`<circle cx="-5" cy="-8" r="1.6" fill="#e6e8ea"/><circle cx="-2.6" cy="-9.3" r="2" fill="#eef0f2"/><circle cx=".6" cy="-9" r="1.5" fill="#e6e8ea"/>
 <rect x="-6.3" y="-6.8" width="2.6" height="3.5" fill="#3a3f47"/>
 <rect x="-9" y="-3.5" width="11" height="6" rx="2.6" fill="#3a3f47" ${OL}/>
 <rect x="2" y="-6.5" width="7" height="9" rx=".5" fill="#4a4f57" ${OL}/><rect x="3.4" y="-5.2" width="4.2" height="3" fill="#dff1fb"/>
 <rect x="-10" y="2.5" width="20" height="1.4" fill="#7d8690"/>
 <circle cx="-6.5" cy="5.5" r="2" fill="#d6452b" ${OL}/><circle cx="-1.5" cy="5.5" r="2" fill="#d6452b" ${OL}/><circle cx="5.5" cy="5.2" r="2.4" fill="#d6452b" ${OL}/>`,
"火力発電":`<circle cx="2.6" cy="-9.4" r="1.5" fill="#dfe2e5"/><circle cx="5" cy="-10" r="1.2" fill="#e8eaec"/>
 <rect x="1.5" y="-8" width="2.4" height="10" fill="#e8e2d6" ${OL}/><rect x="1.5" y="-6.5" width="2.4" height="1" fill="#d6452b"/>
 <rect x="-10" y="0" width="20" height="7" rx=".5" fill="#c9ced3" ${OL}/>
 <path d="M-10 0 L-10 -3 L-3 -3 L-3 0" fill="#b7bec5" ${OL}/>
 ${[-7,-3,1,5].map(x=>`<rect x="${x}" y="2.4" width="2" height="2" fill="#6fa8dc"/>`).join("")}`,
"地熱発電":`<path d="M-11 7 L-3 -6 L4 4 L7 0 L11 7 Z" fill="#8d6e4f" ${OL}/>
 <path d="M-5.2 -2.4 L-3 -6 L-.8 -2.6 Z" fill="#f4f1ea"/>
 <rect x="1" y="2" width="8" height="5" fill="#c9ced3" ${OL}/>
 <path d="M2.5 2 Q2.5 -.5 3.6 -1.3 L5.6 -1.3 Q6.6 -.5 6.6 2" fill="#e3e6ea" ${OL}/>
 <circle cx="4.6" cy="-3.6" r="1.6" fill="#eef0f2"/><circle cx="6.4" cy="-5.6" r="1.9" fill="#f4f5f6"/><circle cx="4.2" cy="-7.4" r="1.4" fill="#eef0f2"/>`,
"発電機":`<rect x="-8" y="-3" width="11" height="9" rx="1.5" fill="#f2b84b" ${OL}/>
 <circle cx="-2.5" cy="1.5" r="2.2" fill="#e3e6ea" ${OL}/>
 <path d="M-2.5 1.5 L6.5 -5" stroke="#3a3f47" stroke-width="1.2" stroke-linecap="round"/>
 <rect x="5.5" y="-8.5" width="2.2" height="4.5" rx="1.1" fill="#d6452b" ${OL}/>
 <path d="M-8 4 Q-11 4 -11 7.5" fill="none" stroke="#3a3f47" stroke-width=".6"/><path d="M-6 6 Q-7 8.5 -9 8.6" fill="none" stroke="#d6452b" stroke-width=".6"/>
 <path d="M8.5 -1 a3.5 3.5 0 0 1 -2.5 3.2" fill="none" stroke="#2f6fd6" stroke-width=".8" stroke-linecap="round"/>`,
"風力発電":`<path d="M-.7 -2 L-1.3 10 L1.3 10 L.7 -2 Z" fill="#e3e6ea" ${OL}/>
 ${[0,120,240].map(a=>`<path d="M0 -3 L-1 -4.5 Q0 -12 1 -4.5 Z" transform="rotate(${a} 0 -3)" fill="#f7f8f9" ${OL}/>`).join("")}
 <circle cx="0" cy="-3" r="1.3" fill="#9aa3ad" ${OL}/>
 <path d="M7 -9 a9 9 0 0 1 2.5 5" fill="none" stroke="#2f6fd6" stroke-width=".8" stroke-linecap="round"/>`,
"ブレーキ（摩擦）":`<circle cx="0" cy="2" r="8" fill="none" stroke="#3a3f47" stroke-width="2.4"/>
 <circle cx="0" cy="2" r="1.2" fill="#9aa3ad" ${OL}/>
 ${[0,45,90,135].map(a=>`<line x1="0" y1="-4.8" x2="0" y2="8.8" transform="rotate(${a} 0 2)" stroke="#9aa3ad" stroke-width=".35"/>`).join("")}
 <path d="M-4.5 -9.2 L-4.5 -5.5 L-2.6 -5.5 M4.5 -9.2 L4.5 -5.5 L2.6 -5.5 M-4.5 -9.2 L4.5 -9.2" fill="none" stroke="#7d8690" stroke-width="1" stroke-linejoin="round"/>
 <rect x="-3.2" y="-6.8" width="1.6" height="2.6" fill="#d6452b"/><rect x="1.6" y="-6.8" width="1.6" height="2.6" fill="#d6452b"/>
 <path d="M-7 -6 q-.8 -1 0 -2 M7 -6 q.8 -1 0 -2" fill="none" stroke="#d6452b" stroke-width=".7" stroke-linecap="round"/>`,
"水力発電（ダム）":`<path d="M-11 -4 L-3 -4 L-3 7 L-11 7 Z" fill="#6fb6ea"/>
 <path d="M-3.5 -6 L1 -6 L5 7 L-3.5 7 Z" fill="#b7bec5" ${OL}/>
 <path d="M1.5 -2 Q5 -1 6 3 Q6.6 6 7.5 7 M3.5 -1.6 Q7.5 0 8.4 4 Q8.8 6 10 7" fill="none" stroke="#2f8fd6" stroke-width="1.1" stroke-linecap="round"/>
 <path d="M-11 7 L11 7" stroke="#3a3f47" stroke-width=".7"/>
 <path d="M-10 -2 h3 M-9 0 h3" stroke="#e8f4fc" stroke-width=".5"/>`,
"ジェットコースター":`<path d="M-11 -6 Q-4 -6 0 1 Q3 6 11 6" fill="none" stroke="#7d8690" stroke-width="1"/>
 <path d="M-11 -4 Q-4.5 -4 -1 2.5 Q2.4 8 11 8" fill="none" stroke="#7d8690" stroke-width="1"/>
 ${[-8,-3.5,1,5.5].map((x,k)=>`<line x1="${x}" y1="${[-6,-4.2,1.6,5.2][k]}" x2="${x}" y2="${[-4,-2.4,3.6,7.2][k]}" stroke="#7d8690" stroke-width=".6"/>`).join("")}
 <g transform="rotate(42 -2.6 -1.4)"><rect x="-6.6" y="-4.8" width="8" height="3.6" rx="1" fill="#d6452b" ${OL}/>
 <circle cx="-4.8" cy="-.9" r=".9" fill="#3a3f47"/><circle cx="-.6" cy="-.9" r=".9" fill="#3a3f47"/></g>
 <path d="M-9 -9.5 l2.5 1.2 M-10.2 -7.8 l2.5 1.2" stroke="#9aa3ad" stroke-width=".6" stroke-linecap="round"/>`
};
