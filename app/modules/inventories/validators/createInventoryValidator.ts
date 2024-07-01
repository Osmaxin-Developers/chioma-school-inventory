import vine from '@vinejs/vine'

export const createInventoryValidator = vine.compile(
  vine.object({
    name: vine.string(),
    price: vine.number(),
    quantity: vine.number(),
    description: vine.string(),
    inventory_photo: vine.file({
      extnames: [
        'jpg',
        'jpeg',
        'png',
        'gif',
        'bmp',
        'tiff',
        'tif',
        'svg',
        'webp',
        'ico',
        'heic',
        'heif',
        'avif',
      ],
    }),
  })
)
