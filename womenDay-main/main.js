onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
setTimeout(() => {
  document.getElementById("next").style.display = "block"
}, 10000);
document.getElementById("next").addEventListener("click", () =>{
  location.href = "./proposal.html"
})