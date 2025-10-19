import('@weblynk/ui').then(m=>{
  if(!('Badge' in m)) {
    console.error('❌ Smoke: Badge export missing from @weblynk/ui');
    process.exit(1);
  }
  console.log('✅ Smoke: @weblynk/ui import OK (found Badge)');
}).catch(e => { console.error(e); process.exit(1); });
