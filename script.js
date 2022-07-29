const submitBtn = document.querySelector('.submitBtn');
const label = Array.from(document.querySelectorAll('.label'));
const ratingState = document.querySelector('.ratingState');
const thankyouState = document.querySelector('.thankyouState');

label.forEach(element => {
    element.addEventListener('click', () => {  
        label.forEach((el) => el.classList.remove("ratingSelected"));
        element.classList.toggle('ratingSelected');        
        submitBtn.removeAttribute('disabled');
    });
});

submitBtn.addEventListener('click', submitRatings);

function submitRatings(e)  {
    const selectedRating = document.querySelector('.ratingSelected');
    const thankRating = document.querySelector('.rated span');
    thankRating.textContent = selectedRating.textContent; 
    thankyouState.classList.remove('none');
    ratingState.classList.add('none');
    e.preventDefault();
}

