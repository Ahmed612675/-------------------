document.querySelectorAll("form button").forEach((btn)=>{
  btn.addEventListener("click",()=>{
    btn.textContent="تم الاستلام";
  });
});
