export const dateCheck = (prevDate) => {
  if (!prevDate) return false;
  const todayDay = getExactDay(new Date())
  const todayMonth = new Date().getMonth()
  const prevTodayDay = getExactDay(prevDate)
  const prevTodayMonth = prevDate.getMonth()


  return prevTodayDay >= todayDay && prevTodayMonth >= todayMonth
}

const getExactDay = (date) => {
  const indDay = date.toLocaleString('es-ES').indexOf("/")
  return date.toLocaleString('es-ES').slice(0, indDay)
}