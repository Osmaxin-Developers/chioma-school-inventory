import { inject } from '@adonisjs/core'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { HttpContext } from '@adonisjs/core/http'
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
      user_id: this.ctx.auth?.user?.id,
    })

    this.ctx.session.flash('success', 'Inventory created successfully')

    return inventory
  }
}
