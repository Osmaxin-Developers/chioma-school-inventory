import vine from '@vinejs/vine'

export const createUsageValidator = vine.compile(
  vine.object({
    receiver_name: vine.string(),
    receiver_location: vine.string(),
    description: vine.string(),
    inventories: vine.array(
      vine.object({
        id: vine.number(),
        quantity: vine.number(),
      })
    ),
  })
)
