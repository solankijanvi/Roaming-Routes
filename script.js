let navbar = document.querySelector('.header .navbar');

// Function to compress the navbar
function compressNavbar() {
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

// Add event listener to all links within the navbar
document.querySelectorAll('.header .navbar a').forEach(link => {
    link.addEventListener('click', compressNavbar);
});

//destination section
document.addEventListener('DOMContentLoaded', function(){
    var readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function(link){
        link.addEventListener('click',function(event){
            event.preventDefault();
        
            var targetID = this.getAttribute('data-target');
            var targetParagraph = document.getElementById(targetID);
            if(targetParagraph.style.display === 'none' || targetParagraph.style.display === ''){
                targetParagraph.style.display = 'block';
                this.textContent = 'Read less';

            }
            else{
                targetParagraph.style.display = 'none';
                this.textContent = 'Read more';
            }
        });

    });
});