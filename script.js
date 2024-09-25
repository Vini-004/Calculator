let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            display.value += button.textContent;
        } else if (button.classList.contains('operator')) {
            display.value += ` ${button.textContent} `;
        } else if (button.classList.contains('decimal')) {
            if (!display.value.includes('.')) {
                display.value += '.';
            }
        } else if (button.classList.contains('clear')) {
            display.value = '';
        } else if (button.classList.contains('equals')) {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (button.classList.contains('backspace')) {
            if (display.value !== '') {
                display.value = display.value.slice(0, -1);
            }
        }
    });
});