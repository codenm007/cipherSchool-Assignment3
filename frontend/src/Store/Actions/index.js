export const createRecipe = (data) =>{
    return{
        type: 'CREATEPROJECT',
        payload : {
            data : data
        }
    }
}