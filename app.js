function getUser(){
  try{
    const u=JSON.parse(localStorage.getItem('campuscode_user'));
    if(u&&u.name)return u;
  }catch(e){}
  return{name:'Sai Harshith',email:'sai@campuscode.co.in',role:'STUDENT',campusId:'CC-2026-8841',bio:'Full-stack builder passionate about hackathons, systems, and shipping products.',skills:'HTML, CSS, JavaScript, React, Next.js, Node.js, Python, Tailwind CSS, Git'};
}
function setUser(u){localStorage.setItem('campuscode_user',JSON.stringify(u))}
function genCaptcha(){
  const c='23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let s='';
  for(let i=0;i<5;i++)s+=c[Math.floor(Math.random()*c.length)];
  return s;
}
function quickDemoLogin(){
  setUser({name:'Sai Harshith',email:'sai@campuscode.co.in',role:'STUDENT',campusId:'CC-2026-8841',bio:'Full-stack builder passionate about hackathons, systems, and shipping products.',skills:'HTML, CSS, JavaScript, React, Next.js, Node.js, Python, Tailwind CSS, Git'});
  location.href='student.html';
}
function logout(){
  localStorage.removeItem('campuscode_user');
  location.href='login.html';
}
