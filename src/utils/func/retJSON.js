module.exports = (success, data, err = "") => {
  return JSON.stringify({
    success: success,
    data: data,
    err: err
  })
}