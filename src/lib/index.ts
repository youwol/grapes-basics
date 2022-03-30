import { SectionBlock } from './blocks/section.block'
import { TextBlock } from './blocks/text.block'
import { ImageBlock } from './blocks/image.block'
import { LinkBlock } from './blocks/link.block'
import { Columns2Block } from './blocks/columns-2.block'
import { CustomViewBlock } from './custom-view/custom-view.block'
import { CustomViewComponent } from './custom-view/custom-view.component'

export function getBlocks() {
    return [
        SectionBlock,
        TextBlock,
        ImageBlock,
        LinkBlock,
        Columns2Block,
        CustomViewBlock,
    ]
}

export function getComponents() {
    return [CustomViewComponent]
}
