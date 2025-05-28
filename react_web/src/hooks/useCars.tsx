import { useMemo } from "react";


export const usePosts = (cars, sort) => {
    const sortedCars = useMemo(() => {
        console.log('sortedCars')
        if (sort) {
          return [...cars].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return cars
    }, [sort, cars])

    return sortedCars
}


export const useCars = (cars, sort, query) => {
  const sortedCars = usePosts(cars, sort)
  const sortedAndSearchedCars = useMemo(() => {
    return sortedCars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedCars])

  return sortedAndSearchedCars
}