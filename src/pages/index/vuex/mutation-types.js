export const asynctypes = [
    'getUser'
]

export const synctypes = [
    'setToken',
    'setRightClick',
    'setWalletAddress',
    'setAmount'
]

export const types = {};
asynctypes.forEach(item => {
    types[item + '.start'] = item + '.start';
    types[item + '.ok'] = item + '.ok';
    types[item + '.error'] = item + '.error';
});
synctypes.forEach(item => {
    types[item] = item;
});
