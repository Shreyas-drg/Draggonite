const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const observer2 = new IntersectionObserver((entries2) =>{
    entries2.forEach(entry2 => {
        if(entry2.isIntersecting){
            entry2.target.classList.add('Heffect');
        }
        else{
            entry2.target.classList.remove('Heffect');
        }
    });
});

const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach(entry3 => {
        if(entry3.isIntersecting){
            entry3.target.classList.add('Heffect2');
        }
        else{
            entry3.target.classList.remove('Heffect2');
        }
    });
});

document.querySelectorAll('.hidden-on-scroll').forEach(el => observer.observe(el));
document.querySelectorAll('.hidden-on-scroll2').forEach(el2 => observer2.observe(el2));
document.querySelectorAll('.hidden-on-scroll3').forEach(el3 => observer3.observe(el3));



