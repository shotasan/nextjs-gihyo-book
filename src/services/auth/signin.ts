import { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type SigninParams = {
  username: string
  password: string
}

const signin = async (
  // APIのルートURLを指定
  context: ApiContext,
  // ユーザー名、パスワードを受け取る
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
