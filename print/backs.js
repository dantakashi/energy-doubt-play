// 裏面の案（54×86mm・縦）。全カード同じ柄。白縁3.5mmは表と同じ。文字は入れない
const BC=["#d9a400","#8a4fc7","#ef8a1f","#d6452b","#2f6fd6","#2e9e5b"]; // 電・化・光・熱・運・位
const BW=54,BH=86,BM=3.5,BX=27,BY=43;
const bInner=(fill,extra="")=>`<rect width="${BW}" height="${BH}" rx="3" fill="#fff"/><clipPath id="bk"><rect x="${BM}" y="${BM}" width="${BW-2*BM}" height="${BH-2*BM}" rx="1.8"/></clipPath><g clip-path="url(#bk)"><rect x="0" y="0" width="${BW}" height="${BH}" fill="${fill}"/>${extra}</g>`;
const arcPath=(r,a0,a1)=>{const p=a=>[(BX+r*Math.cos(a)).toFixed(3),(BY+r*Math.sin(a)).toFixed(3)];const [x0,y0]=p(a0),[x1,y1]=p(a1);return `M${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1}`};
const BACKS={
 ring:{t:"リング",d:"紺地の真ん中に、6色を6等分した太い輪。いちばん静か。",f:()=>bInner("#1f2a44",
   BC.map((c,k)=>{const a0=(k*60-90+2)*Math.PI/180,a1=((k+1)*60-90-2)*Math.PI/180;return `<path d="${arcPath(11,a0,a1)}" fill="none" stroke="${c}" stroke-width="4.2" stroke-linecap="butt"/>`}).join("")+
   `<circle cx="${BX}" cy="${BY}" r="5.2" fill="none" stroke="#e9e6df" stroke-width=".5" opacity=".6"/><circle cx="${BX}" cy="${BY}" r="1.4" fill="#e9e6df"/>`)},
 cycle:{t:"回る矢印",d:"6色の丸い矢印が輪になって追いかけ合う。エネルギーが次々に変わっていくイメージ。",f:()=>bInner("#1f2a44",
   BC.map((c,k)=>{const a0=(k*60-90+6)*Math.PI/180,a1=((k+1)*60-90-10)*Math.PI/180,r=12;const tx=BX+r*Math.cos(a1),ty=BY+r*Math.sin(a1);const deg=((k+1)*60-90-10)+90;
     return `<path d="${arcPath(r,a0,a1)}" fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/><path d="M-2.2 -1.8 L0.6 0 L-2.2 1.8" transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) rotate(${deg})" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""))},
 stripe:{t:"斜めストライプ",d:"紺地に6色の細い斜線をくり返す。柄が全体に散るので、汚れや折れ目が目立ちにくい。",f:()=>{let l="";for(let i=-12;i<20;i++){l+=`<line x1="${i*5}" y1="0" x2="${i*5+40}" y2="${BH}" stroke="${BC[((i%6)+6)%6]}" stroke-width=".9" opacity=".85"/>`}return bInner("#1f2a44",l)}},
 hex:{t:"六角形",d:"紺地にうすい六角形の網目。真ん中の六角形だけ6色の三角に塗り分け。",f:()=>{let g="";const R=4.2,h=R*Math.sqrt(3);
   const hexP=(cx,cy,r)=>Array.from({length:6},(_,k)=>{const a=(k*60+30)*Math.PI/180;return `${(cx+r*Math.cos(a)).toFixed(2)},${(cy+r*Math.sin(a)).toFixed(2)}`}).join(" ");
   for(let row=-2;row<14;row++)for(let col=-2;col<9;col++){const cx=BX+col*h-4*h+(row%2?h/2:0),cy=BY+(row-6)*R*1.5;g+=`<polygon points="${hexP(cx,cy,R)}" fill="none" stroke="#3a4a6e" stroke-width=".35"/>`}
   const big=9;g+=BC.map((c,k)=>{const a0=(k*60-90)*Math.PI/180,a1=((k+1)*60-90)*Math.PI/180;return `<polygon points="${BX},${BY} ${(BX+big*Math.cos(a0)).toFixed(2)},${(BY+big*Math.sin(a0)).toFixed(2)} ${(BX+big*Math.cos(a1)).toFixed(2)},${(BY+big*Math.sin(a1)).toFixed(2)}" fill="${c}" stroke="#1f2a44" stroke-width=".5"/>`}).join("");
   return bInner("#1f2a44",g)}},
 light:{t:"白地の線",d:"白地に6色の細い角丸の枠を重ねた。インクがいちばん少ない。紙が厚い（0.20mm）ので、表の色はたぶん透けないが、刷って確かめる。",f:()=>bInner("#ffffff",
   BC.map((c,k)=>{const m=BM+2+k*1.6;return `<rect x="${m}" y="${m}" width="${BW-2*m}" height="${BH-2*m}" rx="2" fill="none" stroke="${c}" stroke-width=".7"/>`}).join("")+
   BC.map((c,k)=>{const a=(k*60-90)*Math.PI/180;return `<circle cx="${(BX+4*Math.cos(a)).toFixed(2)}" cy="${(BY+4*Math.sin(a)).toFixed(2)}" r="2.3" fill="${c}"/>`}).join(""))}
};
