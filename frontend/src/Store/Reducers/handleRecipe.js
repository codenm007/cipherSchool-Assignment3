const initialState = {
    projects: [],
  };
  
  const handleProject = (state = initialState, action) => {
    switch (action.type) {
      // when user wants to create a new project
      case "CREATEPROJECT": {
        const { data } = action.payload;
  
        return {
          ...state,
          projects: [
            ...state.projects,
            {
              data: data,
            },
          ],
        };
      }
  
      // when user wants to delete a project
    //   case "DELETEPROJECT": {
    //     const newList = state.projects.filter(
    //       (elem) => elem.data.id != action.id
    //     );
  
    //     return {
    //       ...state,
    //       projects: newList,
    //     };
    //   }
  
      default: {
        return state;
      }
    }
  };
  
  export default handleProject;