import { LinkBlockName } from '../constants'

export class LinkBlock {
    public readonly blockType: string
    public readonly label = 'Link'
    public readonly content = {
        type: 'link',
        content: 'Text for the link',
        attributes: { href: '' },
    }

    public readonly idFactory: (name: string) => string
    public readonly render = ({ el }: { el: HTMLElement }) => {
        el.classList.add('fas', 'fa-link')
    }

    constructor({ idFactory }: { idFactory: (name: string) => string }) {
        this.blockType = idFactory(LinkBlockName)
    }
}
