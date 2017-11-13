export const token = state => {
    return state.user.token || localStorage.getItem('token');
};
export const rightClick = state => state.user.rightClick;
export const userInfo = state => state.user.user;
export const user = state => state.user;
