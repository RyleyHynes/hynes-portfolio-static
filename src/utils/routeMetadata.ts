import { rainierPhotos, tetonPhotos, whitneyPhotos } from '@/assets/trips'

type RoutePhotoMetadata = {
  aliases: readonly string[]
  photos: readonly string[]
}

export const routeMetadata: readonly RoutePhotoMetadata[] = [
  {
    aliases: ['Disappointment Cleaver', 'Mount Rainier', 'Rainier'],
    photos: rainierPhotos,
  },
  {
    aliases: ['Grand Teton', 'Teton'],
    photos: tetonPhotos,
  },
  {
    aliases: ['Mount Whitney', 'Whitney'],
    photos: whitneyPhotos,
  },
] as const
