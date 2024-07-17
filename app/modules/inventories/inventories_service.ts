import { inject } from '@adonisjs/core'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { HttpContext } from '@adonisjs/core/http'
import { UploadApiResponse } from 'cloudinary'
import Inventory from '../../models/inventory.js'
import { CloudinaryService } from '../../services/cloudinary/cloudinary.service.js'

@inject()
export class InventoryService {
  constructor(
    private readonly ctx: HttpContext,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  public async create(data: Partial<Inventory> & { inventory_photo: MultipartFile }) {
    const uploadedInventoryPhoto = await this.cloudinaryService.uploadFile(data.inventory_photo)

    const inventory = await Inventory.create({
      name: data.name,
      description: data.description,
      image_url: uploadedInventoryPhoto.secure_url,
      price: data.price,
      quantity: data.quantity,
      user_id: this.ctx.auth.getUserOrFail().id,
    })

    return inventory
  }

  public async update(data: Partial<Inventory> & { inventory_photo: MultipartFile; id: number }) {
    const inventory = await Inventory.findOrFail(data.id)

    let uploadedInventoryPhoto: UploadApiResponse | undefined = undefined

    if (data.inventory_photo) {
      uploadedInventoryPhoto = (await this.cloudinaryService.uploadFile(
        data.inventory_photo
      )) as UploadApiResponse
    }

    inventory.merge({
      name: data.name ?? inventory.name,
      description: data.description ?? inventory.description,
      image_url: uploadedInventoryPhoto?.secure_url ?? inventory.image_url,
      price: data.price ?? inventory.price,
      quantity: data.quantity ?? inventory.quantity,
    })

    return inventory
  }

  public async remove(id: number) {
    const inventory = await Inventory.query().where('id', id).delete()

    return inventory
  }

  public async findOne(id: number) {
    const inventory = await Inventory.findOrFail(id)

    inventory.load('user')

    return inventory
  }

  public async findAll(page: number, size: number, search?: string) {
    page = page ?? 1
    size = size ?? 10

    let query = Inventory.query()
    if (search) {
      query = query.whereLike('name', '%' + search + '%')
    }

    return query.paginate(page, size)
  }
}
