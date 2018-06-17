export function getChineseGardenMRTTimingsInfo(service_req_url) {
  return fetch(service_req_url)
    .then((response) => response.json())
    .then((responseJson) => {
      let retVal = []
      for (let bus_service of responseJson['services']) {
        console.log(bus_service);
        if (bus_service.no == '335') {
          immediate_next_bus = {'eta': bus_service.next.time, 'duration_sec': bus_service.next.duration_ms/1000};
          subsequent_bus = {'eta': bus_service.subsequent.time, 'duration_sec': bus_service.subsequent.duration_ms/1000};
          next2_bus = {'eta': bus_service.next2.time, 'duration_sec': bus_service.next2.duration_ms/1000};
          next3_bus = {'eta': bus_service.next3.time, 'duration_sec': bus_service.next3.duration_ms/1000};

          retVal.push(immediate_next_bus); // immediate bus
          retVal.push(subsequent_bus); // next to immediate
          retVal.push(next2_bus); // next to next
          retVal.push(next3_bus); // already too much? can avoid
        }
      }

      return retVal;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function getMoviesListFromFB(service_req_url) {
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
