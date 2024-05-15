import { SkeletonElement } from './styled'

export interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export function Skeleton({ type }: SkeletonProps) {
  return <SkeletonElement type={type} />
}
