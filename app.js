document.addEventListener('DOMContentLoaded', function() {
    let svgList = document.querySelectorAll('.icons svg');
    let Grid = document.querySelector('.grid');
    let Box = document.querySelectorAll('.box');
    let Container = document.querySelector('.container');


    svgList.forEach(function(item, index) {
        item.addEventListener('click', function() {
            /* Arkaplan ekliyoruz*/
            let activeElement = document.querySelector('.active');
            activeElement.classList.remove('active');
            this.classList.add('active');

            /* Grid işlemleri */
            switch (index) {
                case 0:
                    Grid.classList.remove('repeat-1');
                    Box.forEach(function(item) {
                        item.classList.remove('w-100')
                    })
                    Container.classList.remove('new-height');
                    break;
                case 1:
                    Grid.classList.add('repeat-1');
                    Box.forEach(function(item) {
                        item.classList.add('w-100');
                    })
                    Container.classList.add('new-height');
                    break;
            }
        })
    })
})