/*window.addEventListener('keydown', function(e) {
                                    //console.dir(e.keyCode);
                                    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
                                    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
                                    //console.log(audio);
                                    if (!audio) return; //stop the function from running all together
                                    audio.currentTime = 0; //rewind to the start
                                    audio.play();
                                    //console.log(key);
                                    //key.addClass('playing');
                                    key.classList.add('playing');
                                    //key.classList.remove('playing');
                                    //key.classList.toggle('playing');
                                    /* setTimeout(function() {

                                    }, 0.07)//


                        }); */

        function playSound(e) {
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (!audio) return; //stop the function from running all together
            audio.currentTime = 0; //rewind to the start
            audio.play();
            key.classList.add('playing');

        }

        /*function removeTransition(e) {
            console.log(e);
        }*/
        function removeTransition(e) {
            if (e.propertyName !== 'transition') return; //skip it if it's not a transform
            // console.log(e.propertyName);
            //console.log(this);
            this.classList.remove('playing');
        }
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        window.addEventListener('keydown', playSound());