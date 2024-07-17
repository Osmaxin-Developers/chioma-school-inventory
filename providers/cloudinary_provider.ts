import env from '#start/env'
import type { ApplicationService } from '@adonisjs/core/types'
import { v2 } from 'cloudinary'

export default class CloudinaryProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {
    v2.config({
      cloud_name: env.get('CLOUDINARY_CLOUD_NAME'),
      api_key: env.get('CLOUDINARY_API_KEY'),
      api_secret: env.get('CLOUDINARY_API_SECRET'),
    })
  }

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
