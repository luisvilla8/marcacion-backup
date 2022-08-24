export const dateCheck = (prevDate) => {
  if (!prevDate) return false;
  if (prevDate === null) return false;
  const todayDay = getExactDay(new Date())
  const todayMonth = new Date().getMonth()
  const prevTodayDay = getExactDay(new Date(prevDate))
  const prevTodayMonth = new Date(prevDate).getMonth()

  return prevTodayDay >= todayDay && prevTodayMonth >= todayMonth
}

const getExactDay = (date) => {
  const indDay = date.toLocaleString('es-ES').indexOf("/")
  return date.toLocaleString('es-ES').slice(0, indDay)
}