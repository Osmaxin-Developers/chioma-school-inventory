import vine from '@vinejs/vine'

export const createUsageRefundValidator = vine.compile(
  vine.object({
    usage_inventories: vine.array(
      vine.object({
        id: vine.number(),
        quantity: vine.number(),
      })
    ),
    usage_id: vine.number()
  })
)
