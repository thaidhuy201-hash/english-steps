export const dayKey=(date=new Date())=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const initialState=()=>({version:1,goal:3,records:{},history:[],checks:[],draft:''});
export function validateState(s,ids){
 if(!s||s.version!==1||![3,5,8].includes(s.goal)||!Array.isArray(s.history)||!Array.isArray(s.checks)||typeof s.draft!=='string'||s.draft.length>20000||!s.records||typeof s.records!=='object'||Array.isArray(s.records))throw Error('Tệp sao lưu không hợp lệ.');
 for(const [id,r] of Object.entries(s.records)){if(!ids.includes(id)||!r||!Number.isInteger(r.box)||r.box<0||r.box>5||!Number.isFinite(r.due)||r.due<0||!Number.isInteger(r.seen)||r.seen<1)throw Error('Dữ liệu thẻ không hợp lệ.');}
 if(s.checks.some(x=>!Number.isInteger(x)||x<0||x>6)||s.history.length>50000||s.history.some(h=>!h||!/^\d{4}-\d{2}-\d{2}$/.test(h.day)||!ids.includes(h.id)||typeof h.correct!=='boolean'))throw Error('Lịch sử không hợp lệ.');
 return {version:1,goal:s.goal,records:Object.fromEntries(Object.entries(s.records).map(([id,r])=>[id,{box:r.box,due:r.due,seen:r.seen}])),history:s.history.map(h=>({day:h.day,id:h.id,correct:h.correct})),checks:[...new Set(s.checks)],draft:s.draft};
}
export function schedule(record,correct,now=Date.now()){
 const box=correct?Math.min(5,(record?.box||0)+1):0;
 const days=[0,1,3,7,14,30];
 return {box,due:now+(correct?days[box]*86400000:5*60000),seen:(record?.seen||0)+1};
}
export function makeQueue(cards,state,now=Date.now()){
 const due=cards.filter(c=>state.records[c.id]?.due<=now).sort((a,b)=>state.records[a.id].due-state.records[b.id].due);
 const fresh=cards.filter(c=>!state.records[c.id]);
 const recent=state.history.slice(-10),accuracy=recent.length?recent.filter(h=>h.correct).length/recent.length:1;
 const maxNew=accuracy<.6?1:3;
 return [...due,...fresh.slice(0,maxNew)].slice(0,state.goal);
}
