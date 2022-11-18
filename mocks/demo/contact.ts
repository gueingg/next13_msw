import {rest} from 'msw'

export const contact = [
  rest.post('/api/contact', (_req, res, ctx) => {
    return res(ctx.status(200));
  })
]