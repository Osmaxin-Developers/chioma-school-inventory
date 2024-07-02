import vine from '@vinejs/vine'

export const createUsageRefundValidator = vine.compile(
  vine.object({
    inventories: vine.array(
      vine.object({
        id: vine.number(),
        quantity: vine.number(),
      })
    ),
  })
)
