const exchengeRatesList = document.querySelector('.exchenge-rates__list');

const socket = new WebSocket('wss://web-socket-current.herokuapp.com');

const renderExchenge = (wrapper, data) => {
    const {from, to, rate, change} = JSON.parse(data);
    console.log('from, to, rate, change: ', from, to, rate, change);

    const listItem = document.createElement('li');
    listItem.classList.add(
        'exchenge-rates__item', 
        change === 1 ? 'exchenge-rates__item_up' : 'exchenge-rates__item_down',
    );

    const currency = document.createElement('span');
    currency.classList.add('exchenge-rates__currency');
    currency.textContent = `${from}/${to}`

    const value = document.createElement('span');
    value.classList.add('exchenge-rates__value');
    value.textContent = rate;

    listItem.append(currency, value);
    wrapper.prepend(listItem);

    if (wrapper.children.length > 4) {
        wrapper.children[4].remove();
    }
};


socket.addEventListener('message', event => {
    renderExchenge(exchengeRatesList, event.data);
});

socket.addEventListener('error', err => {
    console.log(err)
});








