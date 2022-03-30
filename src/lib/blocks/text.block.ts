import { TextBlockName } from '../constants'

export class TextBlock {
    public readonly blockType: string
    public readonly label = 'Text'
    public readonly content

    public readonly idFactory: (name: string) => string
    public readonly render = ({ el }: { el: HTMLElement }) => {
        el.classList.add('gjs-fonts', 'gjs-f-text')
    }

    constructor(params: { idFactory: (name: string) => string }) {
        Object.assign(this, params)
        this.blockType = this.idFactory(TextBlockName)
        this.content = '<div data-gjs-type="text">Insert your text here</div>'
    }
}
