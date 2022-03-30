import { SectionBlockName } from '../constants'

export class SectionBlock {
    public readonly blockType: string
    public readonly label = 'Section'
    public readonly content = `
<section>
    <h1>This is a simple title</h1>
    <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
</section>
`

    public readonly idFactory: (name: string) => string
    public readonly render = ({ el }: { el: HTMLElement }) => {
        el.classList.add('gjs-fonts', 'gjs-f-h1p')
    }

    constructor(params: { idFactory: (name: string) => string }) {
        Object.assign(this, params)
        this.blockType = this.idFactory(SectionBlockName)
    }
}
