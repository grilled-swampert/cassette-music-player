const stickySections = [...document.querySelectorAll('.sticky')];
let images = [
    '/images/groceries.png',
    '/images/robot.png',
    '/images/plants.png',
    '/images/cat-muffs.png'
];

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image);
    })
}) 

window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
     
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 900 ? 900 : percentage; 
    scrollSection.style.transform = `translate3D(${-(percentage)}vw, 0, 0)`;
}
