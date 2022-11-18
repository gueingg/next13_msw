export const cc = [
  {
    id: 1,
    created_at: "2020-05-12T09:45:56.681+02:00",
    name: "Khadijah Clayton",
  },
  {
    id: 2,
    created_at: "2020-05-12T09:45:56.681+02:00",
    name: "Caroline Mayer",
  },
  {
    id: 3,
    created_at: "2020-05-12T09:45:56.681+02:00",
    name: "Vanessa Way",
  },
  {
    id: 4,
    created_at: "2020-05-12T09:45:56.681+02:00",
    name: "Generation X",
  },
  {
    id: 5,
    created_at: "2020-05-12T09:45:56.681+02:00",
    name: "Mariam Todd (Mitzi)",
  },
];

export type ccType = {
  id: number,
  created_at : string,
  name: string,
}

import {rest} from 'msw';

export const CChandlers =[
  rest.get('/cc', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ccType[]>(cc)
      )
  })
]