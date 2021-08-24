// export function getDataById(result, today) {
//   return result?.find((data) => data.day === today);
// }

export function getDataById(result, today) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].day === today) {
      return result[i].weightNum;
    }
  }
  return null;
}
