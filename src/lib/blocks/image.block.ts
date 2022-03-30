import { ImageBlockName } from '../constants'

export class ImageBlock {
    public readonly blockType: string
    public readonly label = 'Image'
    public readonly content = { type: 'image' }

    public readonly idFactory: (name: string) => string
    public readonly render = ({ el }: { el: HTMLElement }) => {
        el.classList.add('gjs-fonts', 'gjs-f-image')
    }

    constructor(params: { idFactory: (name: string) => string }) {
        Object.assign(this, params)
        this.blockType = this.idFactory(ImageBlockName)
    }
}
