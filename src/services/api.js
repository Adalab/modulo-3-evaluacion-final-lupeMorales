const callToApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const dataApi = data.map((item) => {
        return {
          name: item.name,
          image: item.image,
          specie: item.species,
          status: item.alive,
          house: item.house,
          gender: item.gender,
          ancestry: item.ancestry,
        };
      });
      return dataApi;
    });
};
export default callToApi;
