const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'CLR') {
            result.value = '';
        } else if (value === 'DEL') {
            result.value = result.value.slice(0, -1);
        } else if (value === '=') {
            try {
                result.value = eval(result.value);
            } catch {
                result.value = 'Error';
            }
        } else {
            result.value += value;
        }
    });
});