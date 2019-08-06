
export const peopleService = {
    fetchAllPeoples(){
      return fetch('/users.json')
          .then(response=>response.json())
    }
};
