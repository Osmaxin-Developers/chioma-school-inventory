import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    full_name: vine.string(),
    email: vine.string().email(),
    password: vine.string(),
    role_id: vine.number(),
  })
)
