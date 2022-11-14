
const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_NEWS':
           return { ...state, loading: true };
     case 'GET_USERS':
               return { ...state, loading: true };
     case 'NEWS_RECEIVED':
           return { ...state, news: action.json[0], loading: false, user: null  }
     case 'USERS_RECEIVED':
               return { ...state, user: action.json[0], loading: false, news: null }
      default: 
           return state;
    }
   };

export default reducer;