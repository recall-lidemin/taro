import request from '../utils/request'

export async function homeList(): Promise<any> {
  return new Promise((resolve, reject) => {
    resolve({
      code: 0,
      data: {
        list: [1, 2, 3],
      },
    })
  })
}
