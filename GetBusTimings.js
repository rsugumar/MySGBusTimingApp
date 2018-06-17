export getChineseGardenMRTTimingsInfo(service_req_url) {
  return fetch(service_req_url)
    .then((response) => response.json())
    .then((responseJson) => {
      let retVal = []
      for (let bus_service of responseJson['services']) {
        console.log(bus_service);
        if (bus_service.no == '335') {
          retVal.push(bus_service.next); // immediate bus
          retVal.push(bus_service.subsequent); // next to immediate
          retVal.push(bus_service.next2); // next to next
          retVal.push(bus_service.next3); // already too much? can avoid
        }
      }
      return retVal;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export getMoviesListFromFB(service_req_url) {
  return fetch(service_req_url)
    .then((response) => response.json())
    .then((responseJson) => {
      let retVal = [];
      for (let movie of responseJson['movies']) {
        retVal.push(movie['title']);
      }

      return retVal;
    })
    .catch((error) => {
      console.error(error);
    });
}
