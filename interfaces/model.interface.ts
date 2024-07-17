import { ModelObject } from '@adonisjs/lucid/types/model'
import { DateTime } from 'luxon'

export interface Pagination {
  page?: number
  size?: number
}

export interface ModelPagination<T> {
  meta: {
    current_page: number
    first_page: number
    first_page_url: string
    last_page: number
    last_page_url: string
    next_page_url: string
    per_page: number
    previous_page_url: number
    total: number
  }
  data: T[]
}

export interface IBaseModel {
  id: number
  cuid: string
  created_at: DateTime
  updated_at: DateTime | null
}
