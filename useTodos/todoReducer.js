
export const todoReducer = (initialState= [],action= {}) => {
  switch (action.type) {
    case "[TODO]: Add Todo":
       return [...initialState,action.payLoad]; // común colocar un error en sitios donde aun no se implementa algo o no se sabe que colocar aun
    case "[TODO] Remove Todo":
      return initialState.filter(todo => todo.id !== action.payLoad);


      case "[TODO] Toggle Todo":
        return initialState.map(todo =>{
          if(todo.id === action.payLoad){
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo
        }); 
    
      default:
          return initialState
    }
  }
