import type { ArtKind } from '../../data/projects'
import { CacheArt } from './CacheArt'
import { FsmArt } from './FsmArt'
import { PhotoArt } from './PhotoArt'

export function ProjectArt({ kind }: { kind: ArtKind }) {
  if (kind === 'photo') return <PhotoArt />
  if (kind === 'cache') return <CacheArt />
  return <FsmArt />
}
