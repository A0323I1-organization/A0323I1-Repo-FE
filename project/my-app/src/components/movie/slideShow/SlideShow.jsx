import { useEffect } from 'react';
import '../slideShow/SlideShow.css';

function SlideShow() {

    let refreshInterval;

    useEffect(() => {
        sliderAnimation();
        return () => {
            clearInterval(refreshInterval);
        };
    }, []);

    function sliderAnimation() {
        let slider = document.querySelector('.slider .list');
        let items = document.querySelectorAll('.slider .list .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');
        let dots = document.querySelectorAll('.slider .dots li');

        let lengthItems = items.length - 1;
        let active = 0;

        next.onclick = function () {
            active = active + 1 <= lengthItems ? active + 1 : 0;
            reloadSlider();
        };

        prev.onclick = function () {
            active = active - 1 >= 0 ? active - 1 : lengthItems;
            reloadSlider();
        };

        refreshInterval = setInterval(() => {
            next.click();
        }, 3000);

        function reloadSlider() {
            slider.style.left = -items[active].offsetLeft + 'px';

            let lastActiveDot = document.querySelector('.slider .dots li.active');
            lastActiveDot.classList.remove('active');
            dots[active].classList.add('active');

            clearInterval(refreshInterval);
            refreshInterval = setInterval(() => {
                next.click();
            }, 3000);
        }

        dots.forEach((li, key) => {
            li.addEventListener('click', () => {
                active = key;
                reloadSlider();
            });
        });
        
    }

    return (
        <>
                    <div className="slider">
            <div className="list">
                <div className="item">
                <img
                    src="https://cdn.galaxycine.vn/media/2024/3/21/demon-slayer-kimetsu-no-yaiba-on-stage-mugen-train-arc-4-1_1710999294803.jpg"
                    alt=""
                />
                </div>
                <div className="item">
                <img
                    src="https://cdn.galaxycine.vn/media/2024/3/21/gxk-2048_1710996917814.jpg"
                    alt=""
                />
                </div>
                <div className="item">
                <img
                    src="https://cdn.galaxycine.vn/media/2024/3/14/sang-den-3_1710397716255.jpg"
                    alt=""
                />
                </div>
                <div className="item">
                <img
                    src="https://cdn.galaxycine.vn/media/2024/2/15/very-happy-day-digital-2048x682_1707987204574.jpg"
                    alt=""
                />
                </div>
                <div className="item">
                <img
                    src="https://cdn.galaxycine.vn/media/2024/2/8/2048x682_1707364876796.jpg"
                    alt=""
                />
                </div>
            </div>
            <div className="buttons">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
            </div>
            <ul className="dots">
                <li className="active" />
                <li />
                <li />
                <li />
                <li />
            </ul>
            </div>
        </>
    )
}

export default SlideShow;