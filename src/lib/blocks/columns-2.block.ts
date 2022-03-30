import { Columns2BlockName } from '../constants'

export class Columns2Block {
    public readonly blockType: string
    public readonly label = '2 Columns'
    public readonly content = `
    <div class='' style='display:flex; width:100%; height:100%; padding:5px' data-gjs-droppable='.fx-row-cell' data-gjs-custom-name='Row'>
          <div class='' style='min-width:50px; width:100%' data-gjs-draggable='.row' 
            data-gjs-resizable='resizerRight' data-gjs-name= 'Cell'></div>
          <div class='' style='min-width:50px; width:100%'  data-gjs-draggable='.row'
            data-gjs-resizable='resizerRight' data-gjs-name= 'Cell' ></div>
    </div>
  `
    public readonly idFactory: (name: string) => string
    public readonly render = ({ el }: { el: HTMLElement }) => {
        el.classList.add('gjs-fonts', 'gjs-f-b2')
    }

    constructor({ idFactory }: { idFactory: (name: string) => string }) {
        this.blockType = idFactory(Columns2BlockName)
    }
}
