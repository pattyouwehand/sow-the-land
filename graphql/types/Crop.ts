import { builder } from "../builder"

builder.prismaObject('Crop', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    url: t.exposeString('url'),
    description: t.exposeString('description'),
    imageUrl: t.exposeString('imageUrl'),
    category: t.exposeString('category'),
    users: t.relation('users')
  })
})

builder.queryField("crops", (t) =>
  t.prismaField({
    type: ['Crop'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.crop.findMany({ ...query })
  })
)