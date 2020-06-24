document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector('form');
    const url = document.querySelector('.url');
    const topText = document.querySelector('.topText');
    const bottomText = document.querySelector('.bottomText');
    const memes = document.querySelector('.memes');

    document.addEventListener("submit",function(e){
        e.preventDefault();

        const image = document.createElement('img');
        const input1 = document.createElement('div');
        const input2 = document.createElement('div');
        const cancel = document.createElement('div');
        const container = document.createElement('div');
        
        
        image.setAttribute('src',url.value)
        input1.innerHTML = topText.value;
        input2.innerHTML = bottomText.value;
        cancel.innerHTML = '&#10006';

        container.style.position = 'relative';
        container.style.textAlign = 'center';

        input1.style.position = 'absolute';
        input1.style.top = '12%';
        input1.style.left = '50%';
        input1.style.transform = 'translate(-50%, -50%)';

        input2.style.position = 'absolute'
        input2.style.bottom = '0%';
        input2.style.left = '50%';
        input2.style.transform = 'translate(-50%, -50%)';

        cancel.style.position = 'absolute';
        cancel.style.top = '50%';
        cancel.style.left = '50%';
        cancel.style.transform = 'translate(-50%, -50%)';

        container.addEventListener('click',function(e){
            e.target.parentElement.remove();
        })

        container.appendChild(image);
        container.appendChild(input1);
        container.appendChild(input2);
        container.appendChild(cancel);
        memes.appendChild(container);

        form.reset();
    })
})